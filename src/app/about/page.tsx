import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import MapCard from "@/components/MapCard";
import images from "@/data/images.json";
import { brand, copy, location, serviceGroups } from "@/content/site";
import { families } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Sobre",
  description: `${brand.name} · ${brand.descriptor} · ${location.full}`,
};

export default function About() {
  const logo = "/images/logo.png";
  const ritual = images.ritual;
  return (
    <>
      <PageHero eyebrow="Sobre" title={<>Quem somos?</>} intro={<p>{copy.aboutBody.text}</p>} />

      <section className="pb-[clamp(5rem,10vw,8rem)]">
        <div className="container-calm grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" y={40}>
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] bg-linen-deep">
              <div aria-hidden className="glow absolute inset-1/4 animate-breathe opacity-40" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo} alt={`${brand.name}: ${brand.tagline}`} width={396} height={396} className="relative w-[68%]" />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <dl className="divide-y divide-mocha/15 border-y border-mocha/15">
                {[
                  ["Nome", brand.name],
                  ["O que somos", brand.descriptor],
                  ["O nosso lema", brand.slogan],
                  ["Serviços", serviceGroups.map((g) => g.name).join(" · ")],
                  ["Produtos", families.map((f) => f.name).join(" · ")],
                ].map(([k, v]) => (
                  <div key={k} className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-6">
                    <dt className="eyebrow !text-[0.64rem] pt-1 text-muted">{k}</dt>
                    <dd className={k === "O nosso lema" ? "font-display text-3xl font-light italic sm:col-span-2" : "sm:col-span-2"}>{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/services/" className="btn btn-solid">
                  Serviços <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link href="/products/" className="btn btn-ghost">
                  Produtos
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative h-[clamp(18rem,45vw,32rem)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ritual.src}
            width={ritual.width}
            height={ritual.height}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[50%_45%]"
            style={{ backgroundImage: `url(${ritual.blur})`, backgroundSize: "cover" }}
          />
          <div aria-hidden className="absolute inset-0 bg-espresso/45" />
          <div className="container-calm relative flex h-full items-center">
            <Reveal>
              <p className="max-w-3xl font-display text-[clamp(2.25rem,1.5rem+3.5vw,5rem)] font-light italic leading-[1.05] text-linen">
                {brand.slogan}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="onde-estamos" className="scroll-mt-[var(--header-h)] py-[clamp(5rem,10vw,8rem)]">
        <div className="container-calm grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-mocha-deep">Localização</p>
              <h2 className="mt-6 text-title font-light">Onde estamos?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <address className="mt-8 text-lede font-light not-italic text-muted">
                <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                  {location.street}
                  <br />
                  {location.postalCode} {location.city}
                </a>
              </address>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-8" delay={0.15} y={40}>
            <MapCard />
          </Reveal>
        </div>
      </section>
    </>
  );
}
