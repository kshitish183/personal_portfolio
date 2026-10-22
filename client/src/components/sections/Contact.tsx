import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import ContactForm from "../ui/ContactForm";
import Section from "../ui/Section";

function Contact() {
  const { t } = useTranslation();

  return (
    <Section id="contact" title={t("sections.contact")}>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="comic-panel">
          <p className="font-mono text-sm uppercase text-action">{t("contact.eyebrow")}</p>
          <h3 className="mt-3 font-display text-3xl font-black uppercase">
            {t("contact.title")}
          </h3>
          <p className="mt-4 leading-7 text-paper/70">
            {t("contact.description")}
          </p>
          <div className="mt-6 grid gap-3 text-sm text-paper/75">
            <a className="contact-shortcut" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
            </a>
            <a className="contact-shortcut" href={profile.githubUrl} rel="noreferrer" target="_blank">
              <Github size={18} />
              GitHub
            </a>
            <a className="contact-shortcut" href={profile.linkedinUrl} rel="noreferrer" target="_blank">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <p className="contact-shortcut">
              <MapPin size={18} />
              {profile.location} / {profile.timezone}
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}

export default Contact;
