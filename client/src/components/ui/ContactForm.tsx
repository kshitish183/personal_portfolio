import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

type FormStatus = "idle" | "loading" | "success" | "error";

function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const isLoading = status === "loading";

  function updateField(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="field-group">
          <span>{t("contact.fields.name")}</span>
          <input className="form-field" disabled={isLoading} name="name" onChange={updateField} required value={form.name} />
        </label>
        <label className="field-group">
          <span>{t("contact.fields.email")}</span>
          <input className="form-field" disabled={isLoading} name="email" onChange={updateField} required type="email" value={form.email} />
        </label>
      </div>
      <label className="field-group">
        <span>{t("contact.fields.subject")}</span>
        <input className="form-field" disabled={isLoading} name="subject" onChange={updateField} required value={form.subject} />
      </label>
      <label className="field-group">
        <span>{t("contact.fields.message")}</span>
        <textarea className="form-field min-h-44 resize-y" disabled={isLoading} name="message" onChange={updateField} required value={form.message} />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button className="comic-button" disabled={isLoading} type="submit">
          {isLoading ? t("contact.sending") : t("contact.send")}
        </button>

        {status === "success" && <p className="text-electric" role="status">{t("contact.success")}</p>}
        {status === "error" && (
          <p className="text-action" role="alert">
            {t("contact.error")} <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
