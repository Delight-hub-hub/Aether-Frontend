import { useState } from 'react'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function ContactForm({
  eyebrow = 'Demo request',
  title = 'Tell us what you want to see',
  description = 'Share the portfolio, property, or workflow you want to modernize and we will tailor the walkthrough.',
  submitLabel = 'Request demo',
  note = 'We usually reply within one business day.',
  idPrefix = 'contact',
  compact = false,
  className = '',
  messagePlaceholder = 'Tell us about your team, current tools, and what success looks like.',
}) {
  const [formData, setFormData] = useState(initialFormData)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const isSubmitting = status.type === 'submitting'
  const apiBase = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '')

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'submitting', message: 'Submitting your request...' })

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
      }

      const response = await fetch(`${apiBase}/api/clients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      let data = {}

      try {
        data = await response.json()
      } catch {
        data = {}
      }

      if (!response.ok) {
        throw new Error(data.error || 'We could not submit the request.')
      }

      setStatus({ type: 'success', message: 'Thanks. Our team will follow up shortly.' })
      setFormData(initialFormData)
    } catch (error) {
      setStatus({
        type: 'error',
        message: `We could not send the request right now. ${error.message}`,
      })
    }
  }

  return (
    <div className={`contact-form-wrapper ${compact ? 'contact-form-wrapper--compact' : ''} ${className}`.trim()}>
      <form onSubmit={handleSubmit} className="contact-form" aria-busy={isSubmitting}>
        <div className="contact-form-header">
          <div>
            <p className="contact-form-kicker">{eyebrow}</p>
            <h3>{title}</h3>
          </div>
          {!compact && <p className="contact-form-note">{note}</p>}
        </div>

        <p className="contact-form-description">{description}</p>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor={`${idPrefix}-name`}>Name</label>
            <input
              id={`${idPrefix}-name`}
              className="form-input"
              name="name"
              placeholder="Your full name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor={`${idPrefix}-email`}>Email</label>
            <input
              id={`${idPrefix}-email`}
              className="form-input"
              type="email"
              name="email"
              placeholder="name@company.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor={`${idPrefix}-phone`}>Phone</label>
            <input
              id={`${idPrefix}-phone`}
              className="form-input"
              name="phone"
              placeholder="+27 12 345 6789"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group form-group--full">
            <label htmlFor={`${idPrefix}-message`}>Message</label>
            <textarea
              id={`${idPrefix}-message`}
              className="form-textarea"
              name="message"
              placeholder={messagePlaceholder}
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-footer">
          <p className="form-hint">Tell us the goal, the team size, and any deadline or rollout constraints.</p>
          <button type="submit" className="form-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : submitLabel}
          </button>
        </div>

        {status.message && (
          <p
            className={`form-status ${status.type === 'success' ? 'form-status-success' : ''} ${
              status.type === 'error' ? 'form-status-error' : ''
            }`}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  )
}
