import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/content/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/60 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            {site.name}
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-black/70 hover:text-black"
              >
                {i.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-[color:var(--ocean-700)] px-4 py-2 text-sm font-medium text-white hover:bg-[color:var(--ocean-600)]"
          >
            Request a Quote
          </Link>
        </div>
      </Container>
    </header>
  );
}