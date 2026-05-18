import Link from "next/link";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <header className={styles.top}>
        <Link href="/" className={styles.back}>← Back to Home</Link>
        <div className={styles.brand}>VYRON <small>SOFTWARE</small></div>
        <div className={styles.contact}><span>info@vyronsoft.co.za</span><span>072 080 4844</span></div>
      </header>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Built from real operational experience</p>
          <h1>Software designed around the gaps other systems leave behind.</h1>
          <p>VYRON was created from more than 25 years of practical financial, payroll, accounting, HR, clocking, cost-control and project exposure. The products were designed around the real-world problems companies face every day: manual admin, disconnected systems, hidden cost leakage, poor visibility and decisions made too late.</p>
        </div>
      </section>
      <section className={styles.grid}>
        <article><h2>The story</h2><p>After years of working with payroll processes, accounting systems, HR records, clocking controls, supplier costs and operational projects, the same pattern became clear: most software solves one part of the problem, but leaves management with the hard work of connecting the dots manually.</p></article>
        <article><h2>The gap</h2><p>Companies do not only need data capture. They need control, warnings, dashboards, accountability and clean decision-ready information before money is lost, payroll is processed incorrectly, maintenance slips, campaigns fail or projects run late.</p></article>
        <article><h2>The mission</h2><p>VYRON brings those lessons into a family of SaaS command centres built to reduce admin, expose risk earlier, protect profit and give owners and managers stronger operational visibility.</p></article>
      </section>
      <section className={styles.cta}>
        <h2>Built for companies that want control, not more chaos.</h2>
        <p>Every VYRON product is designed with practical management value first.</p>
        <Link href="/software" className={styles.button}>Explore Products</Link>
      </section>
    </main>
  );
}
