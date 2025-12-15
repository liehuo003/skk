import Link from "next/link";

const navItems = [
  { href: "#products", label: "Products" },
  { href: "#grades", label: "Grades & Uses" },
  { href: "#oem", label: "OEM" },
  { href: "#compliance", label: "Compliance" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-green-100 bg-white/90 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-3">
        <Link href="#" className="text-lg font-semibold tracking-tight text-deep-green">
          Sailtik
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-deep-green/80 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-deep-green transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full bg-deep-green px-4 py-2 text-sm font-semibold text-white shadow-subtle transition hover:opacity-90"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
