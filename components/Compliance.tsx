const documents = [
  "COA / Specification",
  "Microbiological test (upon request)",
  "Pesticide residue test (upon request)",
  "Other documents as required by destination market"
];

export default function Compliance() {
  return (
    <section id="compliance" className="bg-green-50/40 py-14">
      <div className="section-shell space-y-6">
        <h2 className="text-2xl font-semibold text-deep-green">Compliance & Documentation</h2>
        <p className="text-deep-green/80">COA, product specifications, and relevant certificates available upon request.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {documents.map((item) => (
            <div key={item} className="card-shadow rounded-2xl bg-white p-4 text-sm text-deep-green/90">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
