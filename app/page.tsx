import Container from "@/components/Container";
import Link from "next/link";
import { site, products } from "@/content/site";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="border-b border-black/10">
        <Container>
          <div className="py-20 md:py-28">

            {/* Small Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs text-black/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[color:var(--teal-500)]" />
              Serving Asian importers & distributors
            </div>

            {/* Headline */}
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Premium seafood exports,{" "}
              <span className="text-black/70">
                delivered with consistency.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
              {site.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* REQUEST A QUOTE (WHITE VERSION) */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[color:var(--ocean-700)] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:bg-[color:var(--bg2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--teal-400)] focus-visible:ring-offset-2"
              >
                Request a Quote
              </Link>

              {/* BROWSE PRODUCTS */}
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/70 px-6 py-3 text-sm font-medium text-black transition-all duration-200 hover:-translate-y-1 hover:bg-black/5 hover:shadow-md"
              >
                Browse Products
              </Link>

            </div>

            {/* Markets */}
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

          </div>
        </Container>
      </section>

      {/* PRODUCTS PREVIEW */}
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
                className="hidden text-sm font-medium text-[color:var(--ocean-700)] transition-colors duration-200 hover:text-[color:var(--ocean-600)] md:block"
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
    </>
  );
}