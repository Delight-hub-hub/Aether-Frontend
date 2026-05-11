import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);

  const [status, setStatus] = useState({ type: "idle", message: "" });
  const isSubmitting = status.type === "submitting";

  const handleChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "submitting", message: "Submitting..." });

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim()
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/clients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      setStatus({ type: "success", message: "Submitted successfully." });
      setFormData(initialFormData);
    } catch (error) {
      setStatus({ type: "error", message: `Error: ${error.message}` });
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form form">
        <div className="contact-form-header">
          <div>
            <p className="contact-form-kicker">Project intake</p>
            <h3>Tell us about your project</h3>
          </div>
          <p className="contact-form-note">Usually reply within one business day.</p>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
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
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
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
            <label htmlFor="contact-phone">Phone</label>
            <input
              id="contact-phone"
              className="form-input"
              name="phone"
              placeholder="+1 555 123 4567"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group form-group--full">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              className="form-textarea"
              name="message"
              placeholder="Tell us what you need built."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-footer">
          <p className="form-hint">Tell us the goal, the pressure point, and any deadline or site constraints.</p>
          <button type="submit" className="form-submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>

        {status.message && (
          <p
            className={`form-status ${status.type === "success" ? "form-status-success" : ""} ${
              status.type === "error" ? "form-status-error" : ""
            }`}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
