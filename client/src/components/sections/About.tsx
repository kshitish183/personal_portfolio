import { useTranslation } from "react-i18next";
import Section from "../ui/Section";

function About() {
  const { t } = useTranslation();
  const highlights = t("about.highlights", { returnObjects: true }) as string[];

  return (
    <Section id="about" title={t("about.title")}>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="border border-white/15 bg-panel p-6 shadow-comic md:p-8">
          <p className="text-lg leading-8 text-paper/80">
            {t("about.intro")}
          </p>
          <p className="mt-5 text-lg leading-8 text-paper/80">
            {t("about.detail")}
          </p>
          <p className="mt-6 border-l-4 border-action pl-4 text-base leading-7 text-paper/75">
            {t("about.lookingFor")}
          </p>
        </article>

        <div className="grid gap-4">
          {highlights.map((item, index) => (
            <div key={item} className="border border-white/15 bg-ink p-5">
              <span className="font-mono text-sm text-action">0{index + 1}</span>
              <h3 className="mt-2 font-display text-2xl font-black uppercase">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default About;
