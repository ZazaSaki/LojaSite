import {
  Sparkles,
  Flower2,
  Smile,
  Heart,
  Leaf,
  Sun,
  Hand,
  Bell,
  HeartPulse,
  Footprints,
} from 'lucide-react';

const MAP = {
  'PURE RITUAL': Sparkles,
  'PURE MASSAGE': Flower2,
  'PURE FACE': Smile,
  'PURE BOBY': Heart,
  'PURE EPIL': Leaf,
  'PURE FOTOTERAPI': Sun,
  'PURE MANICURE': Hand,
  'PURE BELL': Bell,
  'PURE THERAPYS': HeartPulse,
  'PURE MEDPEDICURE': Footprints,
};

export default function ServiceIcon({ name, className = '', strokeWidth = 1.2 }) {
  const Icon = MAP[name] || Sparkles;
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
