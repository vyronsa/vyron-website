import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main className="vy-product-page product-core">
      <header className="vy-product-topbar">
        <Link href="/" className="vy-back-button"><span>←</span>Back to Home</Link>
        <div className="vy-product-brand"><strong>VYRON</strong><small>SOFTWARE</small></div>
        <div className="vy-product-contact"><a href="mailto:info@vyronsoft.co.za">info@vyronsoft.co.za</a><a href="tel:0720804844">072 080 4844</a></div>
      </header>
      <section className="vy-product-hero-panel">
        <div className="vy-product-hero-copy">
          <p className="vy-product-kicker">Resources</p>
          <h1>VYRON RESOURCES</h1>
          <h2>Product information, rollout guidance and operational software planning for business leaders.</h2>
          <p className="vy-product-intro">For detailed product information, open the VYRON product suite and choose the software command centre you want to explore.</p>
          <Link className="vy-hero-cta-primary" href="/software">View Products</Link>
        </div>
      </section>
    </main>
  );
}
