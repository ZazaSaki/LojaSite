import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import FacetMark from "@/components/FacetMark";
import LabelArt from "@/components/LabelArt";
import MapCard from "@/components/MapCard";
import images from "@/data/images.json";
import { brand, copy, location, otherServices, promo, serviceGroups } from "@/content/site";
import { families, formatRange, plural, products, totalProducts } from "@/lib/catalog";

export default function Home() {
  const ritual = images.ritual;
  return (
    <>
      <HomeHero />

      {/* Intro */}
      <section id="ritual" className="relative overflow-hidden py-[clamp(5rem,12vw,10rem)]">
        <div className="container-calm grid items-center gap-16 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-mocha-deep">{brand.descriptor}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-title font-light">
                {copy.homeIntroTitle.text.replace(/\.$/, "")}
                <span className="text-amber">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lede font-light text-muted">{copy.homeIntroBody.text}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-mocha/20 pt-8">
                <Stat value={String(serviceGroups.length)} label="grupos de serviços" />
                <Stat value={String(families.length)} label="famílias de produtos" />
                <Stat value={String(totalProducts)} label="produtos" />
              </div>
            </Reveal>
          </div>
          <div className="relative md:col-span-6 lg:col-span-6 lg:col-start-7">
            <Reveal y={40}>
              <div className="arch relative mx-auto aspect-[4/5] max-w-md overflow-hidden bg-stone shadow-[0_40px_80px_-40px_rgba(42,34,30,0.5)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ritual.src}
                  width={ritual.width}
                  height={ritual.height}
                  alt="Pedras negras empilhadas junto a velas"
                  loading="lazy"
                  className="h-full w-full scale-110 object-cover object-[82%_60%]"
                />
              </div>
            </Reveal>
            <FacetMark className="absolute -bottom-10 -left-4 w-40 animate-drift text-mocha/25 sm:w-52 md:-left-10" />
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="relative bg-stone/60 py-[clamp(5rem,10vw,8rem)]">
        <div className="container-calm">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow text-mocha-deep">Serviços</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 max-w-2xl text-title font-light">{copy.servicesIntro.text}</h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link href="/services/" className="btn btn-ghost shrink-0">
                Ver todos <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((g, i) => (
              <Reveal as="li" key={g.slug} delay={i * 0.08}>
                <Link
                  href={`/services/#${g.slug}`}
                  className="group relative flex h-full min-h-[15rem] flex-col sm:min-h-[22rem] overflow-hidden rounded-[1.5rem] bg-linen p-7 transition-[transform,box-shadow] duration-700 ease-[var(--ease-calm)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(42,34,30,0.35)]"
                >
                  <span className="font-display text-[5rem] leading-[0.8] sm:text-[7rem] font-light italic text-mocha/25 transition-colors duration-700 group-hover:text-amber/60">
                    {g.letter}
                  </span>
                  <h3 className="mt-auto font-sans text-sm font-normal uppercase tracking-[0.24em]">{g.name}</h3>
                  <ul className="mt-4 space-y-1 text-sm text-muted">
                    {g.lines.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                  <ArrowUpRight
                    aria-hidden
                    className="absolute right-6 top-6 h-5 w-5 text-mocha opacity-0 transition-all duration-700 group-hover:opacity-100"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm text-muted">
              <Link href="/services/#outros" className="link-underline">
                {otherServices.name}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Brands */}
      <section className="overflow-hidden py-[clamp(5rem,10vw,8rem)]">
        <div className="container-calm">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow text-mocha-deep">Produtos</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 max-w-2xl text-title font-light">{copy.productsIntro.text}</h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link href="/products/" className="btn btn-ghost shrink-0">
                {plural(totalProducts, "produto", "produtos")} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>

        <div aria-hidden className="mt-16 flex select-none overflow-hidden border-y border-mocha/15 py-6">
          <div className="flex shrink-0 animate-[marquee_60s_linear_infinite] items-center gap-12 pr-12 font-display text-5xl font-light italic text-mocha/50 md:text-6xl">
            {[...families, ...families].map((f, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap">
                {f.name}
                <FacetMark className="h-6 w-6 text-amber/60" />
              </span>
            ))}
          </div>
          <div className="flex shrink-0 animate-[marquee_60s_linear_infinite] items-center gap-12 pr-12 font-display text-5xl font-light italic text-mocha/50 md:text-6xl">
            {[...families, ...families].map((f, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap">
                {f.name}
                <FacetMark className="h-6 w-6 text-amber/60" />
              </span>
            ))}
          </div>
        </div>

        <ul className="container-calm mt-16 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
          {families.map((f, i) => {
            const first = products.find((p) => p.familySlug === f.slug)!;
            return (
              <Reveal as="li" key={f.slug} delay={(i % 4) * 0.08}>
                <Link href={`/products/family/${f.slug}/`} className="group block">
                  <LabelArt
                    id={first.id}
                    family={f.name}
                    familySlug={f.slug}
                    className="aspect-[4/5] rounded-[1.25rem] transition-shadow duration-700 group-hover:shadow-[0_30px_60px_-30px_rgba(42,34,30,0.35)]"
                  />
                  <h3 className="mt-5 font-display text-[1.75rem] font-normal leading-tight">{f.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {plural(f.count, "produto", "produtos")} <span className="max-sm:block">· {formatRange(f)}</span>
                  </p>
                </Link>
              </Reveal>
            );
          })}
          <Reveal as="li" delay={0.24}>
            <Link
              href="/products/"
              className="group flex aspect-[4/5] flex-col justify-end rounded-[1.25rem] border border-mocha/25 p-6 transition-colors duration-700 hover:border-mocha hover:bg-stone/50"
            >
              <span className="font-display text-[1.9rem] leading-tight font-light">
                Ver todos os <em>produtos</em>
              </span>
              <ArrowRight aria-hidden className="mt-6 h-5 w-5 text-mocha transition-transform duration-700 group-hover:translate-x-2" />
            </Link>
          </Reveal>
        </ul>
      </section>

      {/* Promo spotlight */}
      <section className="relative overflow-hidden bg-espresso py-[clamp(5rem,10vw,9rem)] text-linen">
        <div aria-hidden className="glow absolute right-[10%] top-1/4 h-[28rem] w-[28rem] animate-breathe opacity-60" />
        <div className="container-calm relative grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-amber-soft">Promoções</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-[clamp(3rem,2rem+4.5vw,6.5rem)] font-light leading-[0.95]">
                1 Like <span className="italic text-amber-soft">=</span> 5%
                <br />
                <span className="italic">de Desconto</span>
              </h2>
              <span className="sr-only">{promo.title}</span>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-lede font-light text-linen/75">{promo.detail}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link href="/promocoes/" className="btn btn-light mt-10">
                Promoções <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal y={40}>
              <PromoArtwork />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-[clamp(5rem,10vw,8rem)]">
        <div className="container-calm grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-mocha-deep">Onde estamos?</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-title font-light">{copy.visitInvite.text}</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <address className="mt-8 text-lede font-light not-italic text-muted">
                {location.street}
                <br />
                {location.postalCode} {location.city}
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-5xl font-light leading-none">{value}</p>
      <p className="eyebrow mt-3 !text-[0.62rem] text-muted">{label}</p>
    </div>
  );
}

function PromoArtwork() {
  const p = images.promo;
  return (
    <figure className="relative">
      <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-linen/10 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.7)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.src}
          width={p.width}
          height={p.height}
          alt={`${promo.title}. ${promo.detail}`}
          loading="lazy"
          className="h-auto w-full"
          style={{ backgroundImage: `url(${p.blur})`, backgroundSize: "cover" }}
        />
      </div>
    </figure>
  );
}
