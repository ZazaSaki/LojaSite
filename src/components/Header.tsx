"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import clsx from "clsx";
import { brand, location, nav } from "@/content/site";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

export default function Header() {
  const pathname = usePathname() ?? "/";
  // Pages that open on a dark full-bleed section get a light, transparent header.
  const overHero = pathname === "/" || pathname.startsWith("/promocoes");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const lenis = useLenis();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  const transparent = overHero && !scrolled && !open;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow,backdrop-filter] duration-700 ease-[var(--ease-calm)]",
        // No backdrop-filter while the menu is open: it would become the containing
        // block for the fixed full-screen sheet and clip it to the header's height.
        open
          ? "bg-linen text-espresso"
          : transparent
            ? "bg-transparent text-linen"
            : "bg-linen/80 text-espresso shadow-[0_1px_0_rgba(138,114,102,0.18)] backdrop-blur-xl backdrop-saturate-150",
      )}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-espresso focus:px-4 focus:py-2 focus:text-linen"
      >
        Saltar para o conteúdo
      </a>
      <div className="container-calm flex h-[var(--header-h)] items-center justify-between">
        <Link href="/" aria-label={`${brand.name}, Início`} className="relative z-10">
          <span className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mark.png"
              alt=""
              width={40}
              height={40}
              className={clsx("h-10 w-10 object-contain transition-[filter] duration-700", transparent && "brightness-[2.2] saturate-50")}
            />
            <span className="flex flex-col leading-none">
              <span className="font-sans text-[1.3rem] font-light tracking-[0.02em]">{brand.name}</span>
              <span className="mt-1 text-[0.58rem] uppercase tracking-[0.34em] opacity-75">{brand.tagline}</span>
            </span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "relative rounded-full px-4 py-2 text-[0.74rem] uppercase tracking-[0.22em] transition-opacity duration-500",
                      active ? "opacity-100" : "opacity-70 hover:opacity-100",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-current"
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          aria-label={open ? "Fechar navegação" : "Abrir navegação"}
          aria-expanded={open}
          aria-controls="menu-movel"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="relative block h-3 w-6">
            <span className={clsx("absolute left-0 h-px w-6 bg-current transition-transform duration-500", open ? "top-1.5 rotate-45" : "top-0")} />
            <span className={clsx("absolute left-0 h-px bg-current transition-all duration-500", open ? "top-1.5 w-6 -rotate-45" : "top-3 w-4")} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movel"
            className="fixed inset-0 top-0 z-0 flex flex-col bg-linen px-[clamp(1rem,4vw,3.5rem)] pt-[calc(var(--header-h)+2rem)] pb-10 text-espresso md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Navegação">
              <ul className="space-y-2">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className="flex items-baseline gap-4 py-1 font-display text-5xl font-light aria-[current=page]:italic"
                    >
                      <span className="eyebrow w-6 text-mocha-deep">0{i + 1}</span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto space-y-2 border-t border-mocha/20 pt-6 text-sm text-muted">
              <p className="eyebrow text-mocha-deep">Onde estamos?</p>
              <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="block">
                {location.full}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
