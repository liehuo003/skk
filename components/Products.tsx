const productCards = [
  {
    title: "Ceremonial-style grades",
    body: "Smooth flavor and vibrant color, suitable for premium drinks and gifting blends."
  },
  {
    title: "Café & beverage grades",
    body: "Balanced taste for lattes, frappes, and consistent beverage programs."
  },
  {
    title: "Food & baking grades",
    body: "Reliable color retention and flavor for baking, confectionery, and ice cream."
  },
  {
    title: "Custom blends (on request)",
    body: "Formulations adjusted for your specific applications and price points."
  }
];

export default function Products() {
  return (
    <section id="products" className="bg-green-50/40 py-14">
      <div className="section-shell space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-deep-green">Products</h2>
          <p className="text-deep-green/80">
            We focus on matcha powder only, with a grade system suitable for different use cases.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {productCards.map((card) => (
            <div key={card.title} className="card-shadow rounded-2xl bg-white p-5">
              <h3 className="text-lg font-semibold text-deep-green">{card.title}</h3>
              <p className="mt-2 text-sm text-deep-green/80">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
