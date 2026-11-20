import clsx from "clsx";
import { toneOf } from "@/lib/catalog";
import FacetMark from "./FacetMark";

/** Deterministic pseudo-random number from a string (for per-product variation). */
const seed = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return ((h >>> 0) % 1000) / 1000;
};

/**
 * Apothecary-style label tile. There are no product photographs in the data,
 * so each product gets an abstract, family-tinted composition instead.
 */
export default function LabelArt({
  id,
  family,
  familySlug,
  size = "card",
  className,
}: {
  id: string;
  family: string;
  familySlug: string;
  size?: "card" | "hero";
  className?: string;
}) {
  const tone = toneOf(familySlug);
  const r = seed(id);
  const r2 = seed(id + "·facet");
  const r3 = seed("·" + id);
  const rot = Math.round(r * 50 - 25);
  const x = Math.round(30 + r * 30);
  return (
    <div
      className={clsx("relative isolate overflow-hidden", className)}
      style={{ background: `linear-gradient(${140 + rot}deg, ${tone.from}, ${tone.to})`, color: tone.ink }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{ background: `radial-gradient(60% 50% at ${x}% 18%, rgba(255,250,240,0.85), transparent 70%)` }}
      />
      <div
        aria-hidden
        className={clsx("absolute", size === "hero" ? "-right-[6%] -bottom-[8%] w-[66%]" : "-right-[8%] -bottom-[10%] w-[72%]")}
        style={{ transform: `rotate(${Math.round((r2 - 0.5) * 36)}deg) translate(${Math.round((r3 - 0.5) * 14)}%, ${Math.round(r2 * 8)}%) scale(${(0.9 + r3 * 0.2).toFixed(2)})` }}
      >
        <FacetMark
          color={tone.facet}
          className="w-full transition-transform duration-[1400ms] ease-[var(--ease-calm)] group-hover:scale-[1.06] group-hover:rotate-[4deg]"
        />
      </div>
      <div
        style={{ transform: `rotate(${rot}deg)` }}
        className="absolute -left-1/4 top-[58%] h-px w-[150%] bg-current opacity-[0.08]"
        aria-hidden
      />
      <div
        className={clsx(
          "absolute flex flex-col justify-between border bg-[rgba(250,246,240,0.72)] backdrop-blur-[2px]",
          size === "hero" ? "left-[9%] top-[10%] h-[44%] w-[52%] p-6 sm:p-8" : "left-[9%] top-[9%] h-[44%] w-[62%] p-3 sm:p-4",
        )}
        style={{ borderColor: `${tone.ink}26` }}
      >
        <span className={clsx("eyebrow !tracking-[0.26em]", size === "hero" ? "" : "!text-[0.55rem]")} style={{ color: tone.ink, opacity: 0.75 }}>
          {family}
        </span>
        <span aria-hidden className="h-px w-8 bg-current opacity-30" />
        <span
          className={clsx("font-display italic leading-none", size === "hero" ? "text-5xl sm:text-6xl" : "text-[1.15rem] sm:text-[1.55rem]")}
          style={{ color: tone.ink }}
        >
          {id}
        </span>
      </div>
    </div>
  );
}
