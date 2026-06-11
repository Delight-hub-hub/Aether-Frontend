import { query } from '../lib/database.js'

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

export async function GET() {
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
    return Response.json(
      { error: error instanceof Error ? error.message : 'Unable to save the consultation request.' },
      { status: 500 },
    )
  }
}
