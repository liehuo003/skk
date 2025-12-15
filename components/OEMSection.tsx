const packaging = ["tins", "pouches", "bulk bags"];
const services = ["printing", "filling", "labeling", "one-stop coordination"];
const steps = ["Requirements", "Grade selection", "Pre-production confirmation", "Production", "Shipment"];

export default function OEMSection() {
  return (
    <section id="oem" className="py-14">
      <div className="section-shell space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-deep-green">OEM / Private Label Supported</h2>
          <p className="text-deep-green/80">Packaging and services coordinated for brand owners and distributors.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-shadow rounded-2xl bg-white p-5">
            <h3 className="text-sm font-semibold text-deep-green">Packaging options</h3>
            <ul className="mt-3 space-y-1 text-sm text-deep-green/80">
              {packaging.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="card-shadow rounded-2xl bg-white p-5">
            <h3 className="text-sm font-semibold text-deep-green">Services</h3>
            <ul className="mt-3 space-y-1 text-sm text-deep-green/80">
              {services.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="card-shadow rounded-2xl bg-white p-5">
            <h3 className="text-sm font-semibold text-deep-green">Simple process</h3>
            <ol className="mt-3 space-y-1 text-sm text-deep-green/80 list-decimal list-inside">
              {steps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
        <p className="text-xs text-deep-green/60">No MOQ mentioned; programs tailored to your requirements.</p>
      </div>
    </section>
  );
}
