import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { query } from '../lib/database.js'

const fallbackStorePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data', 'clients.json')
let useLocalFallback = false

function mapClientRow(row) {
  return {
    _id: String(row.id),
    name: row.name,
    email: row.email,
    phone: row.phone ?? '',
    message: row.message ?? '',
    createdAt: row.created_at,
  }
}

function isDatabaseUnavailable(error) {
  if (!error) {
    return false
  }

  const code = String(error.code ?? '').toUpperCase()
  const message = String(error.message ?? '')

  return (
    ['ENOTFOUND', 'ECONNREFUSED', 'ETIMEDOUT', 'EAI_AGAIN', 'ECONNRESET', 'EHOSTUNREACH'].includes(code) ||
    /getaddrinfo enotfound/i.test(message) ||
    /tenant\/user .* not found/i.test(message)
  )
}

async function readFallbackClients() {
  try {
    const raw = await fs.readFile(fallbackStorePath, 'utf8')
    const parsed = JSON.parse(raw)

    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    if (error.code === 'ENOENT') {
      return []
    }

    throw error
  }
}

async function writeFallbackClients(clients) {
  await fs.mkdir(path.dirname(fallbackStorePath), { recursive: true })
  await fs.writeFile(fallbackStorePath, `${JSON.stringify(clients, null, 2)}\n`)
}

function createFallbackRow({ name, email, phone, message }) {
  return {
    id: Date.now(),
    name,
    email,
    phone,
    message,
    created_at: new Date().toISOString(),
  }
}

export async function GET() {
  try {
    if (!useLocalFallback) {
      try {
        const result = await query(
          `
            SELECT id, name, email, phone, message, created_at
            FROM clients
            ORDER BY created_at DESC
          `,
        )

        return Response.json(result.rows.map(mapClientRow))
      } catch (error) {
        if (!isDatabaseUnavailable(error)) {
          throw error
        }

        useLocalFallback = true
        console.warn('Database unavailable. Serving contact submissions from local storage.')
      }
    }

    const clients = await readFallbackClients()
    return Response.json(clients.map(mapClientRow))
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : 'Unable to load client submissions.' },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null)

    if (!body) {
      return Response.json({ error: 'Invalid JSON body.' }, { status: 400 })
    }

    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const phone = String(body.phone ?? '').trim() || null
    const message = String(body.message ?? '').trim()

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      )
    }

    if (!useLocalFallback) {
      try {
        const result = await query(
          `
            INSERT INTO clients (name, email, phone, message)
            VALUES ($1, $2, $3, $4)
            RETURNING id, name, email, phone, message, created_at
          `,
          [name, email, phone, message],
        )

        return Response.json(mapClientRow(result.rows[0]), { status: 201 })
      } catch (error) {
        if (!isDatabaseUnavailable(error)) {
          throw error
        }

        useLocalFallback = true
        console.warn('Database unavailable. Falling back to local contact storage.')
      }
    }

    const clients = await readFallbackClients()
    const savedClient = createFallbackRow({ name, email, phone, message })
    clients.unshift(savedClient)
    await writeFallbackClients(clients)

    return Response.json(mapClientRow(savedClient), { status: 201 })
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : 'Unable to save the consultation request.' },
      { status: 500 },
    )
  }
}
