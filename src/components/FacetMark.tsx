/**
 * Three faceted "leaf-gems", a vector echo of the Simple Pure logo mark.
 * Each leaf is rendered as a fan of triangles around an inner point, with
 * varying opacity to suggest cut facets catching the light.
 */
type Leaf = { c: [number, number]; pts: [number, number][]; shade: number[] };

const LEAVES: Leaf[] = [
  {
    c: [42, 72],
    pts: [[46, 2], [66, 34], [74, 60], [60, 108], [22, 172], [10, 120], [0, 76], [12, 36]],
    shade: [0.95, 0.7, 0.85, 0.55, 0.75, 0.6, 0.9, 0.65],
  },
  {
    c: [92, 104],
    pts: [[48, 84], [80, 66], [130, 52], [178, 38], [168, 82], [128, 120], [70, 160], [30, 178]],
    shade: [0.7, 0.92, 0.62, 0.85, 0.55, 0.78, 0.6, 0.88],
  },
  {
    c: [130, 164],
    pts: [[42, 186], [96, 150], [148, 134], [184, 140], [200, 156], [168, 178], [120, 196], [76, 196]],
    shade: [0.6, 0.88, 0.7, 0.95, 0.65, 0.82, 0.55, 0.75],
  },
];

export default function FacetMark({
  className,
  color = "currentColor",
  title,
}: {
  className?: string;
  color?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="-4 -4 208 208"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <g fill={color}>
        {LEAVES.map((leaf, li) =>
          leaf.pts.map((p, i) => {
            const q = leaf.pts[(i + 1) % leaf.pts.length];
            return (
              <polygon
                key={`${li}-${i}`}
                points={`${leaf.c[0]},${leaf.c[1]} ${p[0]},${p[1]} ${q[0]},${q[1]}`}
                fillOpacity={leaf.shade[i]}
                stroke={color}
                strokeOpacity={0.15}
                strokeWidth={0.6}
                strokeLinejoin="round"
              />
            );
          }),
        )}
      </g>
    </svg>
  );
}
