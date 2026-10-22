import { useTranslation } from "react-i18next";
import { skills } from "../../data/skills";
import Section from "../ui/Section";

const capabilities = [
  "Responsive React apps",
  "REST API integrations",
  "Deployment-ready builds"
];

function Skills() {
  const { t } = useTranslation();

  return (
    <Section id="skills" title={t("sections.skills")}>
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {capabilities.map((item) => (
          <div key={item} className="capability-tile">
            {item}
          </div>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <article key={group.category} className="comic-panel">
            <h3 className="font-display text-2xl font-black uppercase text-action">
              {group.category}
            </h3>
            <p className="mt-3 min-h-20 text-sm leading-6 text-paper/65">{group.outcome}</p>
            <ul className="mt-5 space-y-4 text-paper/80">
              {group.items.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between gap-4">
                    <span>{skill.name}</span>
                    <span className="font-mono text-xs text-action">{skill.confidence}%</span>
                  </div>
                  <span className="mt-2 block h-2 bg-white/10" aria-hidden="true">
                    <span className="block h-full bg-action" style={{ width: `${skill.confidence}%` }} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
