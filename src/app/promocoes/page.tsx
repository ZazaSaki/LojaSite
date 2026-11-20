import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";
import FacetMark from "@/components/FacetMark";
import images from "@/data/images.json";
import { copy, location, promo } from "@/content/site";

export const metadata: Metadata = {
  title: "Promoções",
  description: `${promo.title}. ${promo.detail}.`,
};

export default function Promocoes() {
  const p = images.promo;
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-espresso pt-[calc(var(--header-h)+clamp(3rem,8vw,7rem))] pb-[clamp(5rem,10vw,8rem)] text-linen">
      <div aria-hidden className="glow absolute left-[15%] top-[20%] h-[34rem] w-[34rem] animate-breathe opacity-60" />
      <div aria-hidden className="glow absolute right-[5%] bottom-[5%] h-[22rem] w-[22rem] animate-breathe opacity-40 [animation-delay:-4s]" />
      <FacetMark className="pointer-events-none absolute -right-20 top-28 w-[26rem] animate-drift text-linen/[0.05]" />

      <div className="container-calm relative">
        <Reveal>
          <p className="eyebrow text-amber-soft">Promoções</p>
        </Reveal>

        <div className="mt-10 grid items-end gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <h1 className="text-[clamp(3.5rem,2rem+7vw,9rem)] font-light leading-[0.9]">
                1 Like <span className="italic text-amber-soft">=</span>
                <br />
                5% <span className="italic">de Desconto</span>
              </h1>
              <span className="sr-only">{promo.title}</span>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="flex items-start gap-4 border-t border-linen/15 pt-8">
                <Heart className="mt-1.5 h-5 w-5 shrink-0 text-amber-soft" aria-hidden />
                <p className="text-lede font-light text-linen/85">{promo.detail}</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 pl-9 text-linen/55">{copy.promoMood.text}</p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.25} y={50}>
          <figure className="mx-auto mt-[clamp(3rem,7vw,6rem)] max-w-[851px]">
            <div className="overflow-hidden rounded-[2rem] ring-1 ring-linen/10 shadow-[0_60px_120px_-50px_rgba(0,0,0,0.8)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                width={p.width}
                height={p.height}
                alt={`${promo.title}. ${promo.detail}`}
                className="h-auto w-full"
                style={{ backgroundImage: `url(${p.blur})`, backgroundSize: "cover" }}
              />
            </div>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col gap-6 border-t border-linen/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-linen/70">{location.full}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/" className="btn btn-light">
                Serviços <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/about/#onde-estamos" className="btn btn-ghost text-linen">
                Onde estamos?
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
