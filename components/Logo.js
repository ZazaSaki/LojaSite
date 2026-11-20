import Link from 'next/link';

export default function Logo({ className = '' }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Simple Pure — O seu ritual SPA">
      <svg viewBox="0 0 48 48" className="h-9 w-9 shrink-0" aria-hidden="true" fill="none">
        <g fill="currentColor">
          {/* center petal */}
          <path d="M24 4c4.6 7.2 4.6 13.4 0 17.6-4.6-4.2-4.6-10.4 0-17.6Z" />
          {/* left petal */}
          <path d="M24 13c-11.6-2.2-18 3.2-16 9.6 4.6-2.4 9.2-4.6 16-2Z" opacity=".72" />
          {/* right petal */}
          <path d="M24 13c11.6-2.2 18 3.2 16 9.6-4.6-2.4-9.2-4.6-16-2Z" opacity=".72" />
          {/* left leaf */}
          <path d="M24 24c-8.2 6-11.4 10.4-9.4 15.4 5.2-1 8.4-4.4 9.4-9.6Z" opacity=".45" />
          {/* right leaf */}
          <path d="M24 24c8.2 6 11.4 10.4 9.4 15.4-5.2-1-8.4-4.4-9.4-9.6Z" opacity=".45" />
        </g>
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.4rem] font-semibold tracking-wide">Simple Pure</span>
        <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.3em] opacity-70">
          O seu ritual SPA
        </span>
      </span>
    </Link>
  );
}
