import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="section-shell grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
      <div className="space-y-6">
        <div className="badge">Matcha Powder Supplier</div>
        <h1 className="text-3xl font-bold leading-tight text-deep-green sm:text-4xl md:text-5xl">
          Matcha Powder Supplier for Global B2B Buyers
        </h1>
        <p className="text-lg text-deep-green/80">
          Multiple grades for cafés, brands, distributors, and manufacturers. OEM supported. Consistent quality for repeat
          orders.
        </p>
        <ul className="space-y-2 text-deep-green/90">
          {[
            "Multiple grades (2A–7A) for different applications",
            "OEM / Private Label supported",
            "Export-ready packaging & documentation"
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-green-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <Link
            href="#contact"
            className="rounded-full bg-deep-green px-5 py-3 text-sm font-semibold text-white shadow-subtle transition hover:opacity-90"
          >
            Get a Quote
          </Link>
          <Link
            href="#grades"
            className="rounded-full border border-deep-green px-5 py-3 text-sm font-semibold text-deep-green transition hover:bg-green-50"
          >
            View Grades
          </Link>
        </div>
      </div>
      <div className="relative h-64 overflow-hidden rounded-3xl gradient-block shadow-subtle md:h-full min-h-[320px]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
        <div className="absolute bottom-6 left-6 space-y-3 text-white drop-shadow">
          <p className="text-sm uppercase tracking-widest text-white/80">Sailtik</p>
          <p className="text-2xl font-semibold">Matcha grades 2A–7A</p>
          <p className="text-sm text-white/70">OEM ready • Consistent batches</p>
        </div>
      </div>
    </section>
  );
}
