"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import images from "@/data/images.json";
import { brand, copy, location } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0]);
  const img = images.ritual;

  const words = brand.slogan.split(" ");
  const split = 3; // "Trata por dentro" / "o que se vê por fora"

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[38rem] overflow-hidden bg-espresso text-linen">
      <motion.div style={{ y }} className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          width={img.width}
          height={img.height}
          alt="Velas acesas em taças de madeira, toalhas enroladas e pedras negras"
          fetchPriority="high"
          className="h-full w-full animate-kenburns object-cover object-[70%_50%]"
          style={{ backgroundImage: `url(${img.blur})`, backgroundSize: "cover" }}
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(100deg,rgba(30,24,21,0.88)_0%,rgba(30,24,21,0.55)_45%,rgba(30,24,21,0.12)_80%)]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-espresso/70 to-transparent" />
      <div aria-hidden className="glow absolute left-[38%] top-[34%] h-72 w-72 animate-breathe opacity-50 mix-blend-screen" />

      <motion.div style={{ opacity: fade }} className="container-calm relative flex h-full flex-col justify-end pb-[clamp(5rem,12vh,9rem)]">
        <motion.p
          className="eyebrow text-amber-soft"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
        >
          {brand.tagline} · {location.city}
        </motion.p>
        <h1 className="mt-6 max-w-[14ch] text-display font-light">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                className={i >= split ? "inline-block italic text-amber-soft/95" : "inline-block"}
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.4, delay: 0.35 + i * 0.08, ease }}
              >
                {w}
                {i < words.length - 1 ? " " : ""}
              </motion.span>
              {i === split - 1 && <br className="hidden sm:block" />}
            </span>
          ))}
        </h1>
        <motion.div
          className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1.1, ease }}
        >
          <p className="max-w-md text-lede font-light text-linen/80">{copy.heroIntro.text}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/" className="btn btn-light">
              Serviços <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/products/" className="btn btn-ghost text-linen">
              Produtos
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#ritual"
        aria-label="Descer"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-linen/60 hover:text-linen md:flex"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      >
        <span className="h-10 w-px animate-pulse bg-linen/40" />
        <ArrowDown className="h-4 w-4" aria-hidden />
      </motion.a>
    </section>
  );
}
