import type { LucideIcon } from "lucide-react";

const toneClasses = {
  cyan: "text-electric",
  yellow: "text-warning",
  red: "text-action"
};

type Tone = keyof typeof toneClasses;

type SkillCardProps = {
  title: string;
  icon: LucideIcon;
  tone?: Tone;
  delay?: string;
};

function SkillCard({ title, icon: Icon, tone = "cyan", delay = "" }: SkillCardProps) {
  return (
    <article className={`comic-card animate-rise group ${delay}`}>
      <Icon className={`mx-auto ${toneClasses[tone]}`} size={38} strokeWidth={2.5} />
      <h3 className="mt-4 font-display text-xl font-black uppercase text-paper">{title}</h3>
    </article>
  );
}

export default SkillCard;
