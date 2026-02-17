import Container from "@/components/Container";
import { products } from "@/content/site";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Products | Blue Wave Marine",
  description: "Browse Blue Wave Marine seafood export products.",
};

export default function ProductsPage() {
  return (
    <section>
      <Container>
        <div className="py-16 md:py-20">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Products
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-black/70 md:text-base">
            A curated list of seafood products for Asian importers and distributors.
            We can customise cuts, packing, and grades based on your requirements.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
