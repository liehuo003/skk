import Link from "next/link";

const grades = [
  { grade: "2A", uses: "baking, smoothies, everyday food" },
  { grade: "3A", uses: "café drinks, matcha latte, versatile manufacturing" },
  { grade: "4A", uses: "entry ceremonial-style, premium drinks & retail blends" },
  { grade: "5A", uses: "high ceremonial-style, high-end beverages & branded retail tins" },
  { grade: "6A", uses: "top ceremonial-style, premium cafés & boutique brands" },
  { grade: "7A", uses: "ultra-premium ceremonial-style, luxury tea brands & gift products" }
];

export default function GradesTable() {
  return (
    <section id="grades" className="py-14">
      <div className="section-shell space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-deep-green">Grades & Uses</h2>
          <p className="text-deep-green/80">Choose based on flavor profile, color, and application.</p>
        </div>
        <div className="table-wrapper hidden md:block">
          <table className="min-w-full divide-y divide-green-100 text-left text-sm">
            <thead className="bg-green-50/60 text-xs uppercase tracking-wider text-deep-green/70">
              <tr>
                <th className="px-6 py-3">Grade</th>
                <th className="px-6 py-3">Suggested Uses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-50 bg-white">
              {grades.map((row) => (
                <tr key={row.grade} className="hover:bg-green-50/50">
                  <td className="px-6 py-4 text-base font-semibold text-deep-green">{row.grade}</td>
                  <td className="px-6 py-4 text-deep-green/80">{row.uses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid gap-4 md:hidden">
          {grades.map((row) => (
            <div key={row.grade} className="card-shadow rounded-2xl bg-white p-4">
              <div className="text-sm font-semibold text-deep-green">Grade {row.grade}</div>
              <p className="mt-2 text-sm text-deep-green/80">{row.uses}</p>
            </div>
          ))}
        </div>
        <Link
          href="#contact"
          className="inline-flex items-center text-sm font-semibold text-deep-green underline decoration-2 underline-offset-4 hover:text-green-700"
        >
          Tell us your use case → we’ll recommend grades.
        </Link>
      </div>
    </section>
  );
}
