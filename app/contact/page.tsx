import Container from "@/components/Container";
import { site } from "@/content/site";

export const metadata = {
  title: "Contact | Blue Wave Marine",
  description: "Contact Blue Wave Marine for seafood export enquiries.",
};

export default function ContactPage() {
  const wa = site.contact.whatsapp.replace(/\s|\+|-/g, "");
  return (
    <section>
      <Container>
        <div className="py-16 md:py-20">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Contact Sales
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-black/70 md:text-base">
            For the fastest quote, share: product name, quantity, destination port, and packaging preference.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <div className="text-base font-semibold">Enquiry details</div>

              <form className="mt-5 grid gap-3">
                <input
                  className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-black/30"
                  placeholder="Your name"
                />
                <input
                  className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-black/30"
                  placeholder="Company / Organisation"
                />
                <input
                  className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-black/30"
                  placeholder="Email"
                />
                <textarea
                  className="min-h-[140px] w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-black/30"
                  placeholder="Message (product, quantity, destination port, packaging)"
                />
                <button
                  type="button"
                  className="mt-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
                >
                  Send (demo)
                </button>
                <p className="text-xs text-black/60">
                  This button is currently a UI demo. If you want, I’ll add a real email/API route.
                </p>
              </form>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <div className="text-base font-semibold">Direct contact</div>
              <div className="mt-4 space-y-2 text-sm text-black/70">
                <div>Email: {site.contact.email}</div>
                <div>Phone: {site.contact.phone}</div>
                <div>Location: {site.contact.location}</div>
              </div>

              <a
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-black/5"
                href={`https://wa.me/${wa}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Sales
              </a>

              <div className="mt-4 text-xs text-black/60">
                Recommended for Asian buyers: WhatsApp-first enquiries usually convert best.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
