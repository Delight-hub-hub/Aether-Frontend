import { useEffect, useState } from 'react'
import '../App.css'
import { getApiBase } from '../lib/api'

const dateFormatter = new Intl.DateTimeFormat('en-ZA', {
  dateStyle: 'medium',
  timeStyle: 'short',
})

function formatSubmissionDate(value) {
  if (!value) {
    return 'No timestamp'
  }

  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? 'Invalid date' : dateFormatter.format(date)
}

function toTimestamp(value) {
  const time = new Date(value || 0).getTime()
  return Number.isFinite(time) ? time : 0
}

export default function Admin() {
  const [clients, setClients] = useState([])
  const apiBase = getApiBase()

  useEffect(() => {
    fetch(`${apiBase}/api/clients`)
      .then((res) => res.json())
      .then((data) => setClients(Array.isArray(data) ? data : []))
      .catch((err) => console.error(err))
  }, [apiBase])

  const orderedClients = [...clients].sort((a, b) => toTimestamp(b.createdAt) - toTimestamp(a.createdAt))
  const latestClient = orderedClients[0]
  const totalClients = orderedClients.length
  const recentLeadCount = orderedClients.slice(0, 3).length

  return (
    <main className="admin-shell">
      <section className="admin-hero surface-card">
        <div className="admin-hero__copy">
          <p className="card-kicker">Operations dashboard</p>
          <h1>Client submissions</h1>
          <p>
            A clean view of every consultation request coming through the website, with recent activity and
            contact details front and center.
          </p>
        </div>

        <div className="admin-hero__cards">
          <article className="admin-stat-card">
            <span>Total submissions</span>
            <strong>{totalClients}</strong>
            <p>All form entries currently stored in the backend.</p>
          </article>

          <article className="admin-stat-card">
            <span>Recent leads</span>
            <strong>{recentLeadCount}</strong>
            <p>The newest conversations currently visible in the feed.</p>
          </article>

          <article className="admin-stat-card">
            <span>Latest lead</span>
            <strong>{latestClient?.name || 'Waiting for first lead'}</strong>
            <p>{latestClient ? formatSubmissionDate(latestClient.createdAt) : 'No submissions yet'}</p>
          </article>
        </div>
      </section>

      <section className="admin-layout">
        <aside className="admin-rail surface-card">
          <div className="admin-rail__intro">
            <p className="card-kicker">Control room</p>
            <h3>Review, route, and respond without losing the context of each message.</h3>
            <p>
              The feed below keeps the newest requests at the top so the next best action is easy to spot.
            </p>
          </div>

          <div className="admin-rail__signals" aria-label="Inbox summary">
            <div>
              <span>API base</span>
              <strong>{apiBase}</strong>
            </div>
            <div>
              <span>Latest update</span>
              <strong>{formatSubmissionDate(latestClient?.createdAt)}</strong>
            </div>
            <div>
              <span>Queue size</span>
              <strong>{totalClients}</strong>
            </div>
          </div>
        </aside>

        <section className="admin-feed" aria-label="Client submission list">
          {orderedClients.length ? (
            orderedClients.map((client, index) => (
              <article key={client._id || `${client.email}-${index}`} className="surface-card admin-card">
                <div className="admin-card__top">
                  <div>
                    <p className="card-kicker">Submission {String(index + 1).padStart(2, '0')}</p>
                    <h3>{client.name || 'Unnamed client'}</h3>
                  </div>
                  <span className="admin-timestamp">{formatSubmissionDate(client.createdAt)}</span>
                </div>

                <div className="admin-card__meta">
                  <span>{client.email || 'No email provided'}</span>
                  <span>{client.phone || 'No phone provided'}</span>
                </div>

                <p className="admin-message">{client.message || 'No message supplied.'}</p>
              </article>
            ))
          ) : (
            <article className="surface-card admin-empty">
              <p className="card-kicker">Inbox empty</p>
              <h3>No submissions yet.</h3>
              <p>Once the form receives a consultation request, it will appear here automatically.</p>
            </article>
          )}
        </section>
      </section>
    </main>
  )
}
