import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="simple-page">
      <Link className="back-chip" href="/">
        <span className="back-icon">←</span>
        Back to Home
      </Link>
      <h1>VYRON Solutions</h1>
      <p>
        VYRON software gives companies control over workforce operations, marketing growth,
        maintenance, cost leakage, construction visibility, farm records and recruitment pipelines.
      </p>
      <div className="simple-grid">
        <Link href="/software/core"><b>Workforce Control</b><span>Clocking, rosters, HR cases and payroll-readiness.</span></Link>
        <Link href="/software/reach"><b>Marketing Growth</b><span>Campaigns, content, outreach and lead pipelines.</span></Link>
        <Link href="/software/cost"><b>Cost Protection</b><span>Invoice intelligence, category control and margin protection.</span></Link>
      </div>
    </main>
  );
}
