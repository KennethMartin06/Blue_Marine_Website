import Container from "@/components/Container";
import { site } from "@/content/site";

export const metadata = {
  title: "About | Blue Wave Marine",
  description: "About Blue Wave Marine seafood exports.",
};

export default function AboutPage() {
  return (
    <section>
      <Container>
        <div className="py-16 md:py-20">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            About {site.name}
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-black/70 md:text-base">
            {site.name} is focused on serving importers and distributors across Asia with
            export-grade seafood. We emphasise consistency, clear communication, and reliable
            dispatch timelines.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "B2B-first",
                desc: "Built for procurement teams: clear specs, forms, and fast quote cycles.",
              },
              {
                title: "Market-aligned",
                desc: "Product forms and packing options tailored for Asian buyer preferences.",
              },
              {
                title: "Reliable operations",
                desc: "Focused on repeatable quality and dependable shipment readiness.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <div className="text-base font-semibold">{x.title}</div>
                <p className="mt-2 text-sm text-black/70">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
