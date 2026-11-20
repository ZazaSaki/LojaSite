import { Gem, Footprints, Sun, Palette, Leaf, Flower, Package } from 'lucide-react';

const ART = {
  gemology: { icon: Gem, label: 'Gemology' },
  gehwol: { icon: Footprints, label: 'Gehwol' },
  skinclinic: { icon: Sun, label: 'SkinClinic' },
  maquilhagem: { icon: Palette, label: 'Maquilhagem' },
  'mossi-epil': { icon: Leaf, label: 'Mossi Epil' },
  'yellow-rose': { icon: Flower, label: 'Yellow Rose' },
  outros: { icon: Package, label: 'Outros' },
};

export default function ProductArt({ slug, className = '' }) {
  const art = ART[slug] || ART.outros;
  const Icon = art.icon;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: 'linear-gradient(160deg, var(--color-sand), var(--color-cream))' }}
      role="img"
      aria-label={art.label}
    >
      <svg
        viewBox="0 0 800 600"
        className="absolute inset-0 h-full w-full text-bronze/15"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="110" cy="90" r="190" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="700" cy="530" r="230" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="400" cy="300" r="120" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <path d="M0 430 C 210 350, 560 500, 800 410" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 0 C 180 100, 330 30, 470 110" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="h-2/5 w-2/5 max-h-40 max-w-40 text-bronze/80" strokeWidth={1.1} aria-hidden="true" />
      </div>
    </div>
  );
}
