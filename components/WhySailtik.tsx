const reasons = [
  "Focused on matcha powder only",
  "Clear grade system for different applications",
  "B2B export experience",
  "Consistent quality for repeat orders",
  "OEM support for brand owners",
  "Responsive communication"
];

export default function WhySailtik() {
  return (
    <section id="why" className="py-14">
      <div className="section-shell space-y-6">
        <h2 className="text-2xl font-semibold text-deep-green">Why Sailtik</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason} className="card-shadow rounded-2xl bg-white p-4 text-sm font-semibold text-deep-green">
              {reason}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
