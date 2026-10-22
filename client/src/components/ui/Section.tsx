import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-sm uppercase text-action">Chapter</p>
          <h2 className="font-display text-4xl font-black uppercase text-paper md:text-6xl">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </section>
  );
}

export default Section;
