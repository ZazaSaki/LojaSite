"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import clsx from "clsx";
import images from "@/data/images.json";
import { brand, location } from "@/content/site";

/**
 * Static map image first: no third-party requests and no cookies on page load.
 * The interactive Google Map is a two-step opt-in. The visitor asks for it, reads
 * what loading it implies, and accepts (Lei 41/2004, art. 5.º, prior consent).
 * Consent is not stored, so a page reload withdraws it.
 */
export default function MapCard({ className }: { className?: string }) {
  const [live, setLive] = useState(false);
  const [asking, setAsking] = useState(false);
  const map = images.mapa;
  return (
    <figure className={clsx("relative overflow-hidden rounded-[1.75rem] bg-stone", className)}>
      <div className="relative aspect-[4/3] w-full sm:aspect-[919/460]">
        {live ? (
          <iframe
            title={`Mapa: ${brand.name}, ${location.full}`}
            src={location.embedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={map.src}
              width={map.width}
              height={map.height}
              alt={`Mapa com a localização da ${brand.name}: ${location.full}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[47.6%_50%] [filter:grayscale(0.55)_sepia(0.28)_contrast(0.95)]"
              style={{ backgroundImage: `url(${map.blur})`, backgroundSize: "cover" }}
            />
            <span aria-hidden className="absolute left-[47.6%] top-[50%] -translate-x-1/2 -translate-y-1/2">
              <span className="absolute -inset-6 animate-ping rounded-full bg-amber/30 [animation-duration:3s]" />
              <span className="absolute -inset-3 rounded-full bg-amber/25" />
            </span>
            {asking && (
              <div
                role="dialog"
                aria-modal="false"
                aria-labelledby="mapa-consentimento-titulo"
                className="absolute inset-0 flex items-center justify-center overflow-y-auto bg-espresso/55 p-3 backdrop-blur-sm sm:p-4"
              >
                <div className="max-w-md rounded-2xl bg-linen p-5 text-sm text-espresso shadow-2xl sm:p-6">
                  <p id="mapa-consentimento-titulo" className="flex items-center gap-2 font-medium">
                    <ShieldCheck className="h-4 w-4 text-mocha" aria-hidden /> Mapa interativo da Google
                  </p>
                  <p className="mt-2 leading-relaxed text-muted">
                    Ao carregar o mapa, o seu navegador liga-se aos servidores da Google, que pode definir cookies e tratar
                    o seu endereço IP. Saiba mais na{" "}
                    <Link href="/politica-de-cookies/" className="underline underline-offset-4">
                      Política de Cookies
                    </Link>
                    .
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      autoFocus
                      onClick={() => setLive(true)}
                      className="btn btn-solid !px-4 !py-2.5 !text-[0.66rem]"
                    >
                      Aceitar e carregar mapa
                    </button>
                    <button type="button" onClick={() => setAsking(false)} className="btn btn-ghost !px-4 !py-2.5 !text-[0.66rem]">
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {!live && !asking && (
        <div className="flex flex-wrap items-center justify-between gap-2 bg-stone p-3 sm:absolute sm:inset-x-5 sm:bottom-5 sm:bg-transparent sm:p-0">
          <button
            type="button"
            onClick={() => setAsking(true)}
            aria-expanded={asking}
            className="btn btn-light !px-4 !py-2.5 !text-[0.66rem] shadow-lg">
            <MapPin className="h-4 w-4" aria-hidden /> Carregar mapa interativo
          </button>
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid !px-4 !py-2.5 !text-[0.66rem] shadow-lg"
          >
            Abrir no Google Maps <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      )}
    </figure>
  );
}
