import { Download, Globe2, Menu, Palette, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

type NavbarProps = {
  isLightComic: boolean;
  onToggleTheme: () => void;
};

function Navbar({ isLightComic, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  function toggleLanguage() {
    const nextLanguage = i18n.language === "en" ? "ja" : "en";
    i18n.changeLanguage(nextLanguage);
  }

  return (
    <header className="site-navbar fixed inset-x-0 top-0 z-50 border-b backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home" className="brand-mark font-display text-2xl font-black uppercase">
          Kshitish.dev
        </a>

        <div className="hidden items-center gap-7 text-sm font-black uppercase md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-paper/80 transition hover:text-action"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a className="comic-button-small" href={profile.resumeUrl} download>
            <Download size={17} />
            {t("nav.resume")}
          </a>
          <button
            aria-label="Change language"
            className="comic-button-small"
            onClick={toggleLanguage}
            type="button"
          >
            <Globe2 size={17} />
            {t("nav.languageButton")}
          </button>
          <button
            aria-label="Change color theme"
            className="comic-button-small border-action text-action"
            onClick={onToggleTheme}
            type="button"
          >
            {isLightComic ? <Palette size={17} /> : <Sun size={17} />}
            {isLightComic ? "Comic" : t("nav.mangaButton")}
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-paper md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-menu border-t px-4 py-5 md:hidden">
          <div className="grid gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border border-white/10 bg-panel px-4 py-3 font-black uppercase text-paper"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="inline-flex items-center gap-2 border border-white/10 bg-panel px-4 py-3 font-black uppercase text-paper"
              href={profile.resumeUrl}
              onClick={() => setIsOpen(false)}
              download
            >
              <Download size={18} />
              {t("nav.resume")}
            </a>
            <button
              className="border border-white/10 bg-panel px-4 py-3 text-left font-black uppercase text-paper"
              onClick={toggleLanguage}
              type="button"
            >
              {t("nav.switchLanguage")}
            </button>
            <button
              className="border border-white/10 bg-panel px-4 py-3 text-left font-black uppercase text-paper"
              onClick={onToggleTheme}
              type="button"
            >
              {isLightComic ? "Color" : t("nav.mangaButton")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
