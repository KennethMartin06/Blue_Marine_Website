import Container from "@/components/Container";

export const metadata = {
  title: "Quality | Blue Wave Marine",
  description: "Quality promise and export handling standards for Blue Wave Marine.",
};

export default function QualityPage() {
  return (
    <section>
      <Container>
        <div className="py-16 md:py-20">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Quality & Handling
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-black/70 md:text-base">
            We’re presenting a clean, professional export workflow. When certifications are available,
            this page can be updated with logos and documentation.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Cold-chain discipline",
                desc: "Rapid chilling/freezing and controlled storage to protect freshness and texture.",
              },
              {
                title: "Hygienic handling",
                desc: "Clean processing, careful contact surfaces, and neat packaging practices.",
              },
              {
                title: "Grading & consistency",
                desc: "Standardised sizing/counts and carton specifications for repeatability.",
              },
              {
                title: "Packaging options",
                desc: "Bulk cartons, private label readiness, and market-specific labelling requirements.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <div className="text-base font-semibold">{x.title}</div>
                <p className="mt-2 text-sm text-black/70 md:text-base">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
