import React, { useState } from "react";
import { useTranslation } from "../i18n/useTranslation";

const WEB3FORMS_ACCESS_KEY = "8731c64d-1b69-4630-a81c-1892d10c68d1";

const CTA: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", t.cta.subject);
    formData.append(
      "from_name",
      formData.get("name")?.toString() ?? "Nordkins Website",
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (result.success) {
        form.reset();
        setStatus({ type: "success", message: t.cta.successMessage });
      } else {
        setStatus({
          type: "error",
          message: result.message || t.cta.errorMessage,
        });
      }
    } catch {
      setStatus({ type: "error", message: t.cta.errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="cta-section">
      <div className="cta-panel">
        <div className="cta-copy">
          <p className="cta-kicker">{t.header.nav.contact}</p>
          <h2>{t.cta.title}</h2>
          <p>{t.cta.description}</p>
        </div>
        <form className="cta-form" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="botcheck"
            className="cta-botcheck"
            tabIndex={-1}
            autoComplete="off"
          />

          <label className="cta-field">
            <span>{t.cta.nameLabel}</span>
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={t.cta.namePlaceholder}
            />
          </label>

          <label className="cta-field">
            <span>{t.cta.emailFieldLabel}</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={t.cta.emailPlaceholder}
            />
          </label>

          <label className="cta-field">
            <span>{t.cta.messageLabel}</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder={t.cta.messagePlaceholder}
            />
          </label>

          <button className="cta-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? t.cta.submitting : t.cta.button}
          </button>

          {status ? (
            <p className={`cta-status cta-status-${status.type}`}>
              {status.message}
            </p>
          ) : null}

          {/* <p className="cta-email">{t.cta.emailLabel}</p> */}
        </form>
      </div>

      <style>{`
        .cta-section {
          padding: 0;
        }

        .cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(260px, 0.8fr);
          gap: 2rem;
          padding: 2.5rem;
          background: var(--color-brand);
          color: white;
          box-shadow: var(--shadow-soft);
        }

        .cta-kicker {
          font-size: 0.82rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          font-weight: 700;
          margin-bottom: 0.9rem;
        }

        .cta-copy h2 {
          font-size: clamp(1.9rem, 4vw, 3rem);
          margin-bottom: 1rem;
          line-height: 1.15;
        }

        .cta-copy p {
          max-width: 62ch;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.8;
        }

        .cta-form {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .cta-field {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .cta-field span {
          font-size: 0.88rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.82);
        }

        .cta-field input,
        .cta-field textarea {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.12);
          color: white;
          padding: 0.9rem 1rem;
          font: inherit;
          resize: vertical;
        }

        .cta-field input::placeholder,
        .cta-field textarea::placeholder {
          color: rgba(255, 255, 255, 0.56);
        }

        .cta-field input:focus,
        .cta-field textarea:focus {
          outline: 2px solid rgba(255, 255, 255, 0.4);
          outline-offset: 2px;
          border-color: rgba(255, 255, 255, 0.4);
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3rem;
          padding: 0.85rem 1.3rem;
          background: var(--color-accent);
          color: white;
          font-weight: 700;
          border-radius: 999px;
          border: 0;
          cursor: pointer;
        }

        .cta-button:hover {
          color: white;
          opacity: 0.92;
        }

        .cta-button:disabled {
          opacity: 0.7;
          cursor: wait;
        }

        .cta-status {
          margin: 0;
          font-size: 0.94rem;
          line-height: 1.6;
        }

        .cta-status-success {
          color: rgba(255, 255, 255, 0.9);
        }

        .cta-status-error {
          color: #ffd8d8;
        }

        .cta-email {
          color: rgba(255, 255, 255, 0.82);
          font-weight: 500;
          margin: 0;
        }

        .cta-botcheck {
          display: none;
        }

        @media (max-width: 900px) {
          .cta-panel {
            grid-template-columns: 1fr;
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
