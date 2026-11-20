import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FacetMark from "@/components/FacetMark";
import { copy, otherServices, promo, serviceGroups } from "@/content/site";

export const metadata: Metadata = {
  title: "Serviços",
  description: serviceGroups.map((g) => g.name).join(" · "),
};

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Serviços" title={copy.servicesIntro.text}>
        <nav aria-label="Grupos de serviços" className="mt-12 flex flex-wrap gap-2">
          {serviceGroups.map((g) => (
            <a
              key={g.slug}
              href={`#${g.slug}`}
              className="rounded-full border border-mocha/25 px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-espresso/80 transition-colors duration-500 hover:border-mocha hover:text-espresso"
            >
              {g.letter} · {g.name}
            </a>
          ))}
          <a
            href="#outros"
            className="rounded-full border border-mocha/25 px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-espresso/80 transition-colors duration-500 hover:border-mocha hover:text-espresso"
          >
            {otherServices.name}
          </a>
        </nav>
      </PageHero>

      <div className="container-calm pb-[clamp(4rem,8vw,7rem)]">
        {serviceGroups.map((g) => (
          <section
            key={g.slug}
            id={g.slug}
            aria-labelledby={`${g.slug}-titulo`}
            className="grid scroll-mt-[calc(var(--header-h)+2rem)] gap-10 border-t border-mocha/20 py-[clamp(3.5rem,7vw,6rem)] md:grid-cols-12"
          >
            <Reveal className="md:col-span-3">
              <span
                aria-hidden
                className="block font-display text-[clamp(7rem,5rem+8vw,13rem)] leading-[0.75] font-light italic text-mocha/30"
              >
                {g.letter}
              </span>
            </Reveal>
            <div className="md:col-span-5">
              <Reveal delay={0.1}>
                <p className="eyebrow text-mocha-deep">Serviço {g.letter}</p>
                <h2 id={`${g.slug}-titulo`} className="mt-4 text-[clamp(2.25rem,1.8rem+2vw,3.5rem)] font-light leading-tight">
                  {g.name}
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-md text-lede font-light text-muted">{g.mood.text}</p>
              </Reveal>
            </div>
            <Reveal className="md:col-span-4" delay={0.25}>
              <ul className="divide-y divide-mocha/15 border-y border-mocha/15">
                {g.lines.map((l, j) => (
                  <li key={l} className="group flex items-center justify-between py-5">
                    <span className="font-sans text-[0.95rem] uppercase tracking-[0.2em]">{l}</span>
                    <FacetMark
                      className="h-5 w-5 text-mocha/40 transition-all duration-700 group-hover:rotate-12 group-hover:text-amber"
                      color="currentColor"
                    />
                    <span className="sr-only">
                      {j + 1} de {g.lines.length}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        ))}

        <section
          id="outros"
          aria-labelledby="outros-titulo"
          className="scroll-mt-[calc(var(--header-h)+2rem)] border-t border-mocha/20 py-[clamp(3.5rem,7vw,6rem)]"
        >
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-stone/70 p-[clamp(2rem,5vw,4rem)]">
              <FacetMark className="absolute -right-10 -bottom-16 w-64 text-mocha/10" />
              <h2 id="outros-titulo" className="text-[clamp(2.25rem,1.8rem+2vw,3.5rem)] font-light">
                {otherServices.name}
              </h2>
              <p className="mt-4 max-w-md text-lede font-light text-muted">{otherServices.mood.text}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/about/" className="btn btn-solid">
                  Onde estamos? <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link href="/promocoes/" className="btn btn-ghost">
                  {promo.title}
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
