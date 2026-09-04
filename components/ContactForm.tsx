"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Demande d'information");
    const message = String(data.get("message") || "");

    const body = `Nom : ${name}\nE-mail : ${email}\n\n${message}`;
    const href = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Nom</span>
          <input className={styles.input} name="name" type="text" required autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>E-mail</span>
          <input className={styles.input} name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label className={styles.field}>
        <span className={styles.label}>Sujet</span>
        <input className={styles.input} name="subject" type="text" />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Message</span>
        <textarea className={styles.textarea} name="message" rows={6} required />
      </label>
      <button type="submit" className="btn btn-primary btn-lg">
        Envoyer le message
      </button>
      {sent && (
        <p className={styles.note} role="status">
          Votre logiciel de messagerie va s'ouvrir pour finaliser l'envoi à {SITE.supportEmail}.
        </p>
      )}
    </form>
  );
}
