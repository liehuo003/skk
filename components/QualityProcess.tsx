const steps = [
  "Shade-grown style cultivation",
  "Steamed & dried",
  "Fine milling",
  "Quality control for color, taste, and fineness"
];

export default function QualityProcess() {
  return (
    <section id="quality" className="bg-green-50/40 py-14">
      <div className="section-shell space-y-6">
        <h2 className="text-2xl font-semibold text-deep-green">Quality & Process</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step) => (
            <div key={step} className="card-shadow rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold text-deep-green">{step}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-deep-green/70">
          Each batch is monitored for color, taste, and fineness to align with the intended grade and application.
        </p>
      </div>
    </section>
  );
}
