import Link from "next/link";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <header className={styles.top}>
        <Link href="/" className={styles.back}>← Back to Home</Link>
        <div className={styles.brand}>VYRON <small>SOFTWARE</small></div>
        <div className={styles.contactSmall}><span>info@vyronsoft.co.za</span><span>072 080 4844</span></div>
      </header>
      <section className={styles.hero}>
        <h1>Let’s talk about the right VYRON system for your business.</h1>
        <p>Book a demo, ask a product question, or discuss which VYRON command centre fits your operational problem best.</p>
      </section>
      <section className={styles.cards}>
        <a href="mailto:info@vyronsoft.co.za"><span>Email</span><b>info@vyronsoft.co.za</b><p>Best for demos, product enquiries and business discussions.</p></a>
        <a href="tel:0720804844"><span>Phone</span><b>072 080 4844</b><p>Call to discuss your business problem and the correct VYRON product.</p></a>
        <Link href="/software"><span>Products</span><b>View the suite</b><p>Compare VYRON CORE, REACH, MAINT, COST, BUILD, FARM and RECRUIT.</p></Link>
      </section>
    </main>
  );
}
