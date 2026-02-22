import Container from "@/components/Container";
import Link from "next/link";
import { site, products } from "@/content/site";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/10">
        <Container>
          <div className="py-16 md:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs text-black/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[color:var(--teal-500)]" />
              Serving Asian importers & distributors
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Premium seafood exports,{" "}
              <span className="text-black/70">delivered with consistency.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
              {site.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[color:var(--ocean-700)] px-6 py-3 text-sm font-medium text-white hover:bg-[color:var(--ocean-600)] transition-all duration-200"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-black/15 bg-white/70 px-6 py-3 text-sm font-medium text-black hover:bg-black/5 transition-all duration-200"
              >
                Browse Products
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {site.markets.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70"
                >
                  {m}
                </span>
              ))}
            </div>

            {/* Minimal stats row (now with pop hover) */}
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {[
                {
                  t: "Cold-chain ready",
                  d: "Handling that supports export timelines.",
                },
                {
                  t: "Clear specifications",
                  d: "Grades, forms, carton specs on request.",
                },
                {
                  t: "Asia-focused supply",
                  d: "Built for importer/distributor needs.",
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="pop rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur hover:shadow-lg"
                >
                  <div className="text-sm font-semibold">{x.t}</div>
                  <div className="mt-2 text-sm text-black/70">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Products preview */}
      <section>
        <Container>
          <div className="py-16">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Products
                </h2>
                <p className="mt-2 text-sm text-black/70">
                  A starter catalogue — add or refine products anytime.
                </p>
              </div>

              <Link
                href="/products"
                className="hidden text-sm font-medium text-[color:var(--ocean-700)] hover:text-[color:var(--ocean-600)] md:block transition-colors duration-200"
              >
                View all →
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 6).map((p) => (
                <ProductCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Quality block */}
      <section className="border-t border-black/10">
        <Container>
          <div className="py-16 md:py-20">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Quality, presented simply.
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-black/70 md:text-base">
              Even without certifications listed today, we can present your
              process professionally: graded sourcing, quick chilling/freezing,
              hygienic handling, moisture-controlled packing, and reliable
              cold-chain dispatch.
            </p>

            {/* Quality cards (now with pop hover) */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Cold-chain handling",
                  desc: "Temperature control from processing to dispatch.",
                },
                {
                  title: "Consistent grading",
                  desc: "Uniform sizing, counts, and carton specifications.",
                },
                {
                  title: "Flexible packaging",
                  desc: "Bulk cartons, private label readiness, and custom specs.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="pop rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur hover:shadow-lg"
                >
                  <div className="text-base font-semibold">{x.title}</div>
                  <p className="mt-2 text-sm text-black/70">{x.desc}</p>
                </div>
              ))}
            </div>

            {/* Final CTA card (now with pop hover) */}
            <div className="pop mt-10 rounded-2xl border border-black/10 bg-white/70 p-8 shadow-sm backdrop-blur hover:shadow-lg md:p-10">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="text-xl font-semibold tracking-tight">
                    Ready to source seafood for your market?
                  </div>
                  <p className="mt-2 text-sm text-black/70">
                    Share product, quantity, destination port, and packaging
                    preference.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="rounded-full bg-[color:var(--ocean-700)] px-6 py-3 text-sm font-medium text-white hover:bg-[color:var(--ocean-600)] transition-all duration-200"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}