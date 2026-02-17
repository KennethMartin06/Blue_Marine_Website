import Container from "@/components/Container";
import { products } from "@/content/site";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <section>
      <Container>
        <div className="py-14 md:py-20">
          <Link href="/products" className="text-sm text-black/70 hover:text-black">
            ← Back to Products
          </Link>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
            {p.name}
          </h1>
          {p.scientific ? (
            <div className="mt-2 text-sm italic text-black/60">{p.scientific}</div>
          ) : null}

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <div className="text-base font-semibold">Overview</div>
              <p className="mt-3 text-sm text-black/70 md:text-base">{p.notes}</p>

              <div className="mt-6 text-sm font-semibold">Available forms</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.form.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <div className="text-base font-semibold">Request a quote</div>
              <p className="mt-2 text-sm text-black/70">
                Share quantity, destination port, and packaging requirements.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/90"
              >
                Contact Sales
              </Link>

              <div className="mt-5 text-xs text-black/60">
                Tip: Include target delivery date and carton spec (kg/carton).
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
