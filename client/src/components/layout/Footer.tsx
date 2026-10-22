import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/profile";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-4 py-8 text-sm text-paper/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p>{profile.name} - {profile.role}</p>
        <div className="flex justify-center gap-3">
          <a aria-label="Email Kshitish" className="footer-link" href={`mailto:${profile.email}`}>
            <Mail size={18} />
          </a>
          <a aria-label="GitHub profile" className="footer-link" href={profile.githubUrl} rel="noreferrer" target="_blank">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn profile" className="footer-link" href={profile.linkedinUrl} rel="noreferrer" target="_blank">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
