import Container from "@/components/Container";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/50 backdrop-blur">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3">
          <div>
            <div className="font-semibold">{site.name}</div>
            <p className="mt-3 text-sm text-black/70">{site.description}</p>
          </div>

          <div className="text-sm">
            <div className="font-medium">Contact</div>
            <div className="mt-3 space-y-1 text-black/70">
              <div>Email: {site.contact.email}</div>
              <div>Phone: {site.contact.phone}</div>
              <div>Location: {site.contact.location}</div>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-medium">Markets</div>
            <div className="mt-3 flex flex-wrap gap-2 text-black/70">
              {site.markets.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-black/10 bg-white/60 px-3 py-1"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 py-6 text-xs text-black/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}