import type { ReactNode } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import clsx from "clsx";
import { isPlaceholder, livroReclamacoes } from "@/content/legal";

/** Renders a legal value; unfilled "[INSERIR …]" placeholders are highlighted so they can't be missed. */
export function LegalValue({ value, className }: { value: string; className?: string }) {
  if (!isPlaceholder(value)) return <span className={className}>{value}</span>;
  return (
    <mark
      data-placeholder
      className={clsx("rounded bg-amber/25 px-1 font-mono text-[0.85em] text-inherit", className)}
    >
      {value}
    </mark>
  );
}

/** Prominent link to the Livro de Reclamações Eletrónico (DL 156/2005, art. 5.º-B n.º 2). */
export function LivroReclamacoesBadge({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <a
      href={livroReclamacoes.url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex items-center gap-3 rounded-xl border px-4 py-3 transition-colors duration-500",
        tone === "dark"
          ? "border-linen/25 bg-linen text-espresso hover:bg-stone"
          : "border-mocha/30 bg-linen-deep text-espresso hover:border-mocha",
      )}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#c8102e] text-white">
        <BookOpen className="h-5 w-5" aria-hidden />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-medium">{livroReclamacoes.label}</span>
        <span className="text-[0.7rem] text-muted">livroreclamacoes.pt</span>
      </span>
      <ArrowUpRight className="h-4 w-4 text-mocha" aria-hidden />
    </a>
  );
}

/** Typographic wrapper for the legal pages. */
export function LegalSection({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-[calc(var(--header-h)+2rem)] border-t border-mocha/15 py-10 md:grid md:grid-cols-12 md:gap-10">
      <h2 className="text-[clamp(1.6rem,1.3rem+1vw,2.25rem)] font-light leading-tight md:col-span-4">{title}</h2>
      <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-espresso/85 md:col-span-8 md:mt-0 [&_a]:underline [&_a]:decoration-mocha/40 [&_a]:underline-offset-4 hover:[&_a]:decoration-mocha [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export function Dl({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <dl className="divide-y divide-mocha/15 border-y border-mocha/15">
      {rows.map(([k, v]) => (
        <div key={k} className="grid gap-1 py-3 sm:grid-cols-3 sm:gap-6">
          <dt className="eyebrow !text-[0.64rem] pt-1 text-muted">{k}</dt>
          <dd className="sm:col-span-2">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
