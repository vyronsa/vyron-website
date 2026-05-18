import Link from "next/link";
import { products } from "./products";
import styles from "./software-page.module.css";

export default function SoftwarePage() {
  return (
    <main className={styles.page}>
      <header className={styles.top}>
        <Link href="/" className={styles.back}>← Back to Home</Link>
        <div className={styles.brand}>VYRON <small>SOFTWARE</small></div>
        <div className={styles.contact}><span>info@vyronsoft.co.za</span><span>072 080 4844</span></div>
      </header>
      <section className={styles.hero}>
        <h1>Software command centres built for serious operational control.</h1>
        <p>Choose a VYRON product below to open the full enterprise sales page. Each product is designed to reduce manual admin, expose risk earlier and give management a clearer command centre.</p>
      </section>
      <section className={styles.grid}>
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/software/${product.slug}`}
            className={styles.card}
            style={{ "--accent": product.accent, "--glow": product.glow } as React.CSSProperties}
          >
            <h2>{product.name}</h2>
            <p>{product.headline}</p>
            <b>Open product →</b>
          </Link>
        ))}
      </section>
    </main>
  );
}
