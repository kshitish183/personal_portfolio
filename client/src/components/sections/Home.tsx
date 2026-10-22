import { ChevronDown, Code2, Download, Layers3, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import SkillCard from "../ui/SkillCard";

function Home() {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero-grid relative flex min-h-screen items-center px-4 pb-20 pt-32 text-center">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        <p className="comic-label animate-pop-in">{t("hero.label")}</p>

        <h1 className="hero-title animate-title-slam mt-10">{t("hero.title")}</h1>

        <div className="comic-nameplate animate-rise mt-10">
          <h2>{t("hero.name")}</h2>
          <p>{t("hero.role")}</p>
        </div>

        <div className="mt-12 grid w-full max-w-5xl gap-5 md:grid-cols-3">
          <SkillCard title={t("hero.cards.frontend")} icon={Code2} tone="cyan" delay="delay-100" />
          <SkillCard title={t("hero.cards.backend")} icon={Layers3} tone="yellow" delay="delay-200" />
          <SkillCard title={t("hero.cards.devops")} icon={Rocket} tone="red" delay="delay-300" />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="comic-button">
            {t("hero.cta")}
          </a>
          <a href={profile.resumeUrl} className="comic-button comic-button-alt" download>
            <Download size={20} />
            {t("hero.resume")}
          </a>
        </div>

        <a aria-label="Scroll to about section" className="scroll-cue" href="#about">
          <ChevronDown size={34} />
        </a>
      </div>
    </section>
  );
}

export default Home;
