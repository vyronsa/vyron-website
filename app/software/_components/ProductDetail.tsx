import Link from "next/link";
import styles from "./ProductDetail.module.css";
import { productList, type VyronProduct } from "../_data/products";

export default function ProductDetail({ product }: { product: VyronProduct }) {
  return (
    <main
      className={styles.page}
      style={
        {
          "--accent": product.accent,
          "--accent-soft": product.accentSoft,
          "--gradient": product.gradient,
        } as React.CSSProperties
      }
    >
      <header className={styles.topbar}>
        <Link className={styles.back} href="/">
          <span className={styles.backIcon}>←</span>
          Back to Home
        </Link>
        <div className={styles.brand}>
          VYRON <small>SOFTWARE</small>
        </div>
        <div className={styles.contact}>
          <span>info@vyronsoft.co.za</span>
          <span>072 080 4844</span>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.eyebrow}>{product.eyebrow}</div>
            <h1 className={styles.title}>
              VYRON <span className={styles.shortName}>{product.shortName}</span>
            </h1>
            <h2 className={styles.headline}>{product.headline}</h2>
            <p className={styles.intro}>{product.intro}</p>
            <div className={styles.actions}>
              <a className={styles.primary} href="mailto:info@vyronsoft.co.za?subject=VYRON%20Demo%20Request">
                Book a Demo
              </a>
              <Link className={styles.secondary} href="/software">
                View all products
              </Link>
            </div>
          </div>

          <aside className={styles.console}>
            <div className={styles.consoleTop}>
              <div>
                <span>Live command centre</span>
                <b>Product Intelligence</b>
              </div>
              <div className={styles.logoTile}>V</div>
            </div>
            <div className={styles.metricGrid}>
              {product.roi.slice(0, 4).map((item) => (
                <article className={styles.metric} key={item}>
                  <i />
                  <b>{item}</b>
                  <p>Designed to give management clearer control, cleaner data and stronger operational visibility.</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.sections}>
        <InfoPanel title={`The problems ${product.name} solves`} items={product.problems} />
        <InfoPanel title="What the software does" items={product.features} />
        <InfoPanel title="AI and intelligence features" items={product.intelligence} />
        <InfoPanel title="Management dashboard value" items={product.dashboard} />
        <InfoPanel title="Reporting and control benefits" items={product.reports} />
        <InfoPanel title="Who it is for" items={product.forWho} />
      </section>

      <section className={styles.cta}>
        <div>
          <h2>Book a demo and see how {product.name} can become a serious control layer inside your business.</h2>
          <p>
            VYRON is built for companies that want less manual admin, better management visibility, cleaner workflows and stronger operational control.
          </p>
          <div className={styles.navProducts}>
            {productList.map((item) => (
              <Link key={item.slug} href={`/software/${item.slug}`}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.ctaBox}>
          <a className={styles.primary} href="mailto:info@vyronsoft.co.za?subject=VYRON%20Demo%20Request">
            Book a Demo
          </a>
          <a className={styles.secondary} href="tel:0720804844">
            Call 072 080 4844
          </a>
        </div>
      </section>
    </main>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className={styles.panel}>
      <h2>{title}</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>
            <span className={styles.dot} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
