import Link from "next/link";
import type { Product } from "@/content/site";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/products/${p.slug}`}
      className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-semibold tracking-tight">{p.name}</div>
          {p.scientific ? (
            <div className="mt-1 text-sm italic text-black/60">
              {p.scientific}
            </div>
          ) : null}
        </div>
        <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/70">
          Export
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.form.slice(0, 4).map((f) => (
          <span
            key={f}
            className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/70"
          >
            {f}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-black/70">{p.notes}</p>

      <div className="mt-5 text-sm font-medium text-black">
        View details <span className="transition group-hover:translate-x-0.5">→</span>
      </div>
    </Link>
  );
}
