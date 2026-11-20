import type { ReactNode } from "react";
import FacetMark from "./FacetMark";
import Reveal from "./Reveal";

/** Quiet page header used by every inner page. */
export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-linen pt-[calc(var(--header-h)+clamp(3rem,8vw,7rem))] pb-[clamp(3rem,7vw,6rem)]">
      <div aria-hidden className="glow absolute -right-24 top-10 h-[26rem] w-[26rem] animate-breathe opacity-35" />
      <FacetMark
        className="pointer-events-none absolute -right-10 top-24 hidden h-[22rem] w-[22rem] animate-drift text-mocha/[0.07] md:block"
      />
      <div className="container-calm relative">
        <Reveal>
          <p className="eyebrow text-mocha-deep">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-5xl text-title font-light">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.2}>
            <div className="mt-8 max-w-2xl text-lede font-light text-muted">{intro}</div>
          </Reveal>
        )}
        {children && <Reveal delay={0.3}>{children}</Reveal>}
      </div>
    </section>
  );
}
