import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FacetMark from "@/components/FacetMark";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-[var(--header-h)]">
      <FacetMark className="pointer-events-none absolute -right-16 top-1/4 w-[24rem] animate-drift text-mocha/10" />
      <div className="container-calm relative">
        <p className="eyebrow text-mocha-deep">Erro 404</p>
        <h1 className="mt-6 text-title font-light">Página não encontrada.</h1>
        <p className="mt-6 max-w-md text-lede font-light text-muted">A página que procura não existe ou mudou de lugar.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-solid">
            Início <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href="/products/" className="btn btn-ghost">
            Produtos
          </Link>
        </div>
      </div>
    </section>
  );
}
