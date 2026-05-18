import Link from "next/link";
import styles from "./product-page.module.css";
import { products, type VyronProduct } from "./products";

export default function ProductPageShell({ product }: { product: VyronProduct }) {
  return (
    <main
      className={styles.shell}
      style={
        {
          "--accent": product.accent,
          "--soft": product.accentSoft,
          "--glow": product.glow,
        } as React.CSSProperties
      }
    >
      <header className={styles.topbar}>
        <Link href="/" className={styles.back}>
          <span>←</span> Back to Home
        </Link>
        <div className={styles.brand}>VYRON <small>SOFTWARE</small></div>
        <div className={styles.contact}>
          <span>info@vyronsoft.co.za</span>
          <span>072 080 4844</span>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCard}>
          <div className={styles.kicker}>Enterprise SaaS command centre</div>
          <h1>{product.name}</h1>
          <h2>{product.headline}</h2>
          <p>{product.intro}</p>
          <div className={styles.actions}>
            <a href="mailto:info@vyronsoft.co.za" className={styles.primary}>Book a Demo</a>
            <Link href="/software" className={styles.secondary}>View all products</Link>
          </div>
        </div>

        <aside className={styles.command}>
          <div className={styles.commandTop}>
            <div>
              <p>Live command centre</p>
              <h3>{product.shortName} Intelligence</h3>
            </div>
            <div className={styles.badge}>V</div>
          </div>
          <div className={styles.metricGrid}>
            {product.roi.slice(0, 4).map((item) => (
              <div className={styles.metric} key={item}>
                <i />
                <b>Control Point</b>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className={styles.fit}>
            <p>Built for</p>
            <div className={styles.chips}>{product.forWho.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </aside>
      </section>

      <section className={styles.grid3}>
        <InfoPanel title={`The problems ${product.name} solves`} items={product.problems} />
        <FeaturePanel title="What the software does" items={product.features} />
        <InfoPanel title="AI and intelligence features" items={product.ai} />
      </section>

      <section className={styles.grid2}>
        <InfoPanel title="Management dashboard value" items={product.dashboard} />
        <InfoPanel title="Operational savings and ROI" items={product.roi} />
      </section>

      <section className={styles.grid2}>
        <InfoPanel title="Reporting and control benefits" items={product.reports} />
        <InfoPanel title={`Who ${product.name} is for`} items={product.forWho} />
      </section>

      <section className={styles.cta}>
        <h3>Ready to see {product.name}?</h3>
        <p>Book a demo and see how this can become a serious control layer inside your business.</p>
        <div className={styles.actions} style={{ justifyContent: "center" }}>
          <a href="mailto:info@vyronsoft.co.za" className={styles.primary}>Book a Demo</a>
          <a href="tel:0720804844" className={styles.secondary}>Call 072 080 4844</a>
        </div>
        <nav className={styles.footerLinks}>
          {products.map((item) => (
            <Link key={item.slug} href={`/software/${item.slug}`} className={item.slug === product.slug ? styles.activeLink : ""}>
              {item.name}
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={styles.panel}>
      <div className={styles.stripe} />
      <h3>{title}</h3>
      <div className={styles.list}>{items.map((item) => <div className={styles.item} key={item}>{item}</div>)}</div>
    </div>
  );
}

function FeaturePanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={styles.panel}>
      <div className={styles.stripe} />
      <h3>{title}</h3>
      <div className={styles.featureList}>{items.map((item) => <div className={styles.feature} key={item}>{item}</div>)}</div>
    </div>
  );
}
