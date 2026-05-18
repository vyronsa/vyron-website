import Link from "next/link";

type Product = {
  slug: string;
  name: string;
  icon: string;
  kicker: string;
  headline: string;
  intro: string;
  problems: string[];
  features: string[];
  ai: string[];
  dashboard: string[];
  roi: string[];
  reports: string[];
  bestFor: string[];
};

const products: Record<string, Product> = {
  core: {
    slug: "core",
    name: "VYRON CORE",
    icon: "V",
    kicker: "Workforce • HR • Clocking • Payroll Readiness",
    headline:
      "Control staff, shifts, clocking, HR exceptions and payroll readiness from one live command centre.",
    intro:
      "VYRON CORE is not a payroll system. It is the operational control layer before payroll. It makes sure hours, attendance, rosters, leave, overtime, exceptions and approvals are clean before anything reaches payroll. It helps companies stop paying for mistakes, unauthorised overtime, missing clock-ins, unmanaged leave and manual HR admin.",
    problems: [
      "Payroll teams waste hours chasing missing clock-ins, unclear shift changes and late approvals.",
      "Managers often only see overtime and attendance problems after payroll pressure has already started.",
      "Multi-branch staff movement is difficult to control when rosters, clocking and HR records live in separate places.",
      "Leave, warnings, disciplinary notes and availability often sit in WhatsApp messages, spreadsheets or paper files.",
      "Payroll export becomes risky when exceptions are not approved and reviewed before processing.",
    ],
    features: [
      "Live clocking visibility across stores, sites and departments.",
      "Smart roster planning with location rules, staff rotations and future shift control.",
      "Late arrival, missed clock-out, overtime, short-hour and manual adjustment exception handling.",
      "Leave and availability workflows with approval tracking.",
      "HR case tracking, warnings, disciplinary records and compliance notes.",
      "Payroll-readiness checks that block export until unresolved issues are reviewed.",
      "Employee profiles with work history, attendance patterns and HR visibility.",
      "Management reports for workforce risk, open exceptions and branch performance.",
    ],
    ai: [
      "Detects unusual attendance and overtime patterns before they become payroll leakage.",
      "Suggests roster improvements using historical patterns and location needs.",
      "Flags repeated late arrivals, risky exceptions and unresolved manager actions.",
      "Supports managers with clearer compliance guidance and HR decision prompts.",
    ],
    dashboard: [
      "See open exceptions, overtime risk, missing approvals and payroll blockers in one view.",
      "Compare branches, teams and managers by unresolved workforce issues.",
      "Understand where payroll risk is building before payroll day arrives.",
      "Give owners and executives visibility without waiting for manual reports.",
    ],
    roi: [
      "Reduces unauthorised overtime and payroll leakage.",
      "Cuts weekly admin time spent chasing attendance problems.",
      "Creates cleaner payroll input without replacing the payroll system.",
      "Improves accountability between employees, managers and payroll teams.",
    ],
    reports: [
      "Payroll-readiness reports.",
      "Attendance and exception reports.",
      "Leave and availability reports.",
      "HR case and warning history.",
    ],
    bestFor: ["Retail groups", "Restaurants", "Multi-branch operations", "Warehouses", "Security teams", "Field staff businesses", "Operations-heavy companies"],
  },
  reach: {
    slug: "reach",
    name: "VYRON REACH",
    icon: "✦",
    kicker: "AI Marketing • Campaigns • Leads • Growth",
    headline:
      "Plan, generate, manage and measure marketing activity from one intelligent growth workspace.",
    intro:
      "VYRON REACH is an AI marketing command centre for companies that need consistent marketing output without scattered spreadsheets, random ad ideas and disconnected campaign work. It brings campaign planning, audience targeting, content generation, outreach, lead pipelines and performance intelligence into one place.",
    problems: [
      "Marketing is inconsistent because nobody owns the full workflow from idea to follow-up.",
      "Ad spend is often guessed instead of planned around goals, audience and expected return.",
      "Leads, outreach, content ideas and campaign results are disconnected.",
      "Small teams need agency-level output without agency-level monthly costs.",
      "Owners cannot easily see what marketing is active, what is working and what still needs action.",
    ],
    features: [
      "Campaign planning for Google, Facebook, social, email and direct outreach.",
      "AI-assisted ad copy, post ideas, campaign angles and promotional messaging.",
      "Lead pipeline tracking from first contact to opportunity.",
      "Content calendar and campaign activity overview.",
      "Audience, offer and channel planning for different business types.",
      "Brand messaging library to keep campaigns consistent.",
      "Sales follow-up flows and prospect communication planning.",
      "Management reporting for campaign performance and growth activity.",
    ],
    ai: [
      "Generates campaign angles based on the product, market and target customer.",
      "Suggests where marketing effort should go based on business goals.",
      "Creates ads, outreach messages and social content faster.",
      "Highlights weak campaigns, missing follow-ups and growth opportunities.",
    ],
    dashboard: [
      "View active campaigns, leads, content, outreach and follow-up actions in one place.",
      "See which channels are generating interest and where activity is falling behind.",
      "Track campaign performance and pipeline movement without manual reporting.",
      "Give business owners a clear marketing control room.",
    ],
    roi: [
      "Improves marketing consistency and speed.",
      "Reduces dependency on expensive outsourced marketing for every small task.",
      "Turns campaigns into repeatable systems instead of random activity.",
      "Helps teams follow up faster and lose fewer leads.",
    ],
    reports: ["Campaign performance reports.", "Lead pipeline reports.", "Content activity reports.", "Marketing opportunity summaries."],
    bestFor: ["SMEs", "Agencies", "Dealerships", "Service businesses", "Property businesses", "Franchise groups", "Sales teams"],
  },
  maint: {
    slug: "maint",
    name: "VYRON MAINT",
    icon: "✓",
    kicker: "Properties • Tickets • Technicians • SLA Control",
    headline:
      "Manage maintenance tickets, properties, units, technicians, evidence, SLA risk and repeat issues in one place.",
    intro:
      "VYRON MAINT gives property managers and operations teams control over maintenance from the first reported issue to final completion evidence. It stops lost tickets, slow contractors, repeated faults, poor visibility and expensive maintenance surprises.",
    problems: [
      "Maintenance issues get lost in WhatsApp groups, emails and spreadsheets.",
      "Managers struggle to prove what was done, when it was done and by whom.",
      "Repeat issues keep costing money because nobody sees the pattern early enough.",
      "Technicians and contractors are difficult to compare without clear history and evidence.",
      "Owners do not always have a live view of overdue, high-risk or repeated issues.",
    ],
    features: [
      "Property and unit-based maintenance ticket management.",
      "Issue categories, priorities, SLA timers and status tracking.",
      "Technician and contractor assignment.",
      "Before and after photo evidence.",
      "Maintenance history per property, unit and asset.",
      "Repeat issue detection and risk visibility.",
      "Open, overdue, completed and high-risk dashboard views.",
      "Cost notes, contractor records and completion history.",
    ],
    ai: [
      "Suggests issue priority, category and risk level.",
      "Detects repeat problems across units, buildings and assets.",
      "Flags SLA risk before jobs become complaints.",
      "Highlights properties, contractors or assets causing repeated cost.",
    ],
    dashboard: [
      "See open, overdue, urgent and completed jobs across all properties.",
      "Track technician workload and contractor accountability.",
      "Identify repeat faults and high-risk buildings early.",
      "Give owners a clean operational view of maintenance performance.",
    ],
    roi: [
      "Reduces lost maintenance communication.",
      "Improves contractor accountability.",
      "Protects property value with better maintenance history.",
      "Reduces repeated callouts and avoidable delays.",
    ],
    reports: ["Property maintenance reports.", "SLA and overdue job reports.", "Contractor performance reports.", "Repeat issue and risk summaries."],
    bestFor: ["Property managers", "Body corporates", "Rental portfolios", "Facilities teams", "Hotels", "Construction aftercare teams"],
  },
  cost: {
    slug: "cost",
    name: "VYRON COST",
    icon: "R",
    kicker: "Invoices • Supplier Spend • Leakage • Margin Protection",
    headline:
      "Find hidden cost leakage in invoices, suppliers, stock categories and operating spend before it damages profit.",
    intro:
      "VYRON COST is built for companies that want stronger control over supplier spend, invoice accuracy, food cost, packaging, cleaning, distribution and operating expenses. It turns cost checking into a structured intelligence system instead of a manual afterthought.",
    problems: [
      "Invoice errors and category mistakes quietly reduce margin.",
      "Supplier increases are often noticed too late.",
      "Management cannot easily see which stores, branches or categories are leaking profit.",
      "Manual checking is slow, inconsistent and dependent on one person.",
      "Cost movements are hard to explain when invoices, categories and reports are disconnected.",
    ],
    features: [
      "Supplier invoice analysis and category breakdowns.",
      "Food cost, packaging, cleaning and distribution visibility.",
      "VAT and total-check workflows for invoice accuracy.",
      "Store, branch and month-based spend summaries.",
      "Supplier comparison and price movement tracking.",
      "Margin pressure alerts and unusual spend detection.",
      "Export-ready reports for finance and management.",
      "Operational cost dashboards for decision-makers.",
    ],
    ai: [
      "Identifies unusual invoice movements and possible overcharges.",
      "Flags category shifts that may hide margin leakage.",
      "Suggests where management should investigate supplier cost increases.",
      "Creates executive summaries from detailed invoice data.",
    ],
    dashboard: [
      "See cost by supplier, category, store, branch and month.",
      "Track food, packaging, cleaning and distribution trends.",
      "Spot margin pressure and suspicious invoice movements.",
      "Give owners visibility over profit leakage before month-end.",
    ],
    roi: [
      "Recovers hidden margin by exposing leakage.",
      "Improves supplier control and price movement visibility.",
      "Reduces manual finance checking time.",
      "Helps management act before cost increases become normal.",
    ],
    reports: ["Supplier cost reports.", "Store and category spend reports.", "VAT and invoice validation reports.", "Executive leakage summaries."],
    bestFor: ["Restaurants", "Retail groups", "Food production", "Franchises", "Hospitality", "Multi-branch businesses"],
  },
  build: {
    slug: "build",
    name: "VYRON BUILD",
    icon: "▲",
    kicker: "Projects • Contractors • Progress • Handover",
    headline:
      "Track builds, units, phases, contractors, defects, photos, timelines and handover readiness from one site command centre.",
    intro:
      "VYRON BUILD is designed for builders, developers and project teams that need real-time control across houses, flats, units, subcontractors and construction phases. It helps prevent missing evidence, unclear progress, late defects and poor site communication.",
    problems: [
      "Progress updates are scattered across calls, WhatsApp photos and site notes.",
      "Developers struggle to see which units are behind and why.",
      "Defects and snag lists often appear too late in the project.",
      "Contractor accountability is weak without structured evidence.",
      "Handover readiness becomes stressful when project information is not centralised.",
    ],
    features: [
      "Project, phase, block and unit tracking.",
      "Contractor assignment and task progress visibility.",
      "Before and after photo evidence and site notes.",
      "Snag list and defect tracking.",
      "Handover readiness dashboards.",
      "Timeline, delay and risk visibility.",
      "Progress reports for owners, developers and managers.",
      "Mobile site workflows for quick updates.",
    ],
    ai: [
      "Flags delayed units or risky phases.",
      "Summarises progress from site updates.",
      "Highlights repeat contractor issues.",
      "Suggests priority actions before handover deadlines are missed.",
    ],
    dashboard: [
      "See progress by project, phase, contractor and unit.",
      "Track defects, delays, risks and handover blockers.",
      "Compare contractors by progress and issue history.",
      "Give developers one clear view of site readiness.",
    ],
    roi: [
      "Improves build visibility and reduces project confusion.",
      "Reduces handover chaos and late defect discovery.",
      "Strengthens contractor accountability.",
      "Saves time by centralising evidence and progress reporting.",
    ],
    reports: ["Progress reports.", "Snag and defect reports.", "Contractor performance reports.", "Handover readiness summaries."],
    bestFor: ["Developers", "Builders", "Project managers", "Estate developments", "Construction teams", "Renovation companies"],
  },
  farm: {
    slug: "farm",
    name: "VYRON FARM",
    icon: "V",
    kicker: "Farm Operations • Livestock • Lineage • Herd Intelligence",
    headline:
      "Manage animals, lineage, breeding, treatments, weights, camps and farm performance from one practical farm system.",
    intro:
      "VYRON FARM gives farmers a structured way to manage livestock records, breeding lines, health events, treatments, farm tasks and operational visibility. It starts with serious cattle and stud management and expands into broader farm control.",
    problems: [
      "Animal records are often kept in books, spreadsheets or memory.",
      "Lineage and breeding history becomes hard to search as the herd grows.",
      "Treatments, vaccinations, weights and health notes can be missed.",
      "Farm owners need better visibility without complicated corporate software.",
      "Important herd performance information is often not connected to daily decisions.",
    ],
    features: [
      "Searchable animal catalogue by tag number.",
      "Father, mother, birth year, breed and lineage tracking.",
      "Treatment, vaccination, weight and health history.",
      "Breeding records, calf history and stud performance.",
      "Camp, herd movement and farm operational notes.",
      "Farm tasks, reminders and production records.",
      "Performance dashboards for herd and farm decisions.",
      "Mobile-friendly field usage for quick updates.",
    ],
    ai: [
      "Suggests animals to monitor based on health or breeding history.",
      "Highlights missing treatment, vaccination or weight records.",
      "Summarises lineage and performance notes.",
      "Supports stronger breeding and management decisions.",
    ],
    dashboard: [
      "See herd performance and animal record completeness.",
      "Track breeding, treatment and movement activity.",
      "View risk areas across health, camps and production.",
      "Give farmers a practical operational control centre.",
    ],
    roi: [
      "Protects valuable livestock and lineage records.",
      "Reduces missed treatments and admin gaps.",
      "Improves breeding decisions with better information.",
      "Saves time searching through paper records and spreadsheets.",
    ],
    reports: ["Animal profile reports.", "Lineage and breeding summaries.", "Treatment, health and weight history.", "Herd performance and farm activity reports."],
    bestFor: ["Stud farms", "Cattle farmers", "Mixed farms", "Game farms", "Breeders", "Agricultural managers", "Farm owners", "Livestock operations"],
  },
  recruit: {
    slug: "recruit",
    name: "VYRON RECRUIT",
    icon: "∞",
    kicker: "Hiring • Candidates • Pipelines • Talent Intelligence",
    headline:
      "Find, manage, compare and move candidates through hiring pipelines without losing control to expensive recruitment chaos.",
    intro:
      "VYRON RECRUIT helps companies reduce recruitment cost, improve hiring speed and create a structured candidate intelligence system. It gives teams a way to manage roles, candidates, outreach, screening and hiring progress in one place.",
    problems: [
      "Recruitment agencies are expensive and often own the candidate relationship.",
      "Hiring pipelines are scattered across emails, LinkedIn, spreadsheets and manager notes.",
      "Good candidates are lost because follow-up is inconsistent.",
      "Managers lack a clear view of which roles are stuck and why.",
      "Companies do not build their own long-term talent database.",
    ],
    features: [
      "Role and vacancy management.",
      "Candidate pipeline stages and status tracking.",
      "Candidate profiles, notes, documents and communication history.",
      "Shortlist comparison and scoring workflows.",
      "Outreach message planning and follow-up tracking.",
      "Interview scheduling visibility and manager feedback.",
      "Hiring dashboards for open roles and bottlenecks.",
      "Talent pool database for future hiring.",
    ],
    ai: [
      "Summarises candidate strengths and risks.",
      "Generates outreach and follow-up messages.",
      "Matches candidates to role requirements more clearly.",
      "Flags stalled roles, weak pipelines and missing feedback.",
    ],
    dashboard: [
      "View roles, candidates, stages, interviews and hiring blockers.",
      "Compare pipelines across departments or locations.",
      "Track where recruitment is slowing down.",
      "Give HR and leadership hiring visibility without manual spreadsheets.",
    ],
    roi: [
      "Reduces recruitment agency dependency.",
      "Speeds up hiring decisions and follow-up.",
      "Builds an owned candidate database.",
      "Improves control over hiring cost and pipeline quality.",
    ],
    reports: ["Open vacancy reports.", "Candidate pipeline reports.", "Interview and feedback reports.", "Hiring cost and bottleneck summaries."],
    bestFor: ["Medium businesses", "Large employers", "HR teams", "Specialised industries", "Agriculture", "Operations-heavy companies"],
  },
};

export function ProductPage({ slug }: { slug: keyof typeof products }) {
  const product = products[slug];

  return (
    <main className={`vyron-page product-${product.slug}`}>
      <header className="vyron-topbar">
        <Link href="/" className="vyron-back">
          <span>←</span> Back to Home
        </Link>
        <div className="vyron-brand">
          VYRON <small>SOFTWARE</small>
        </div>
        <div className="vyron-contact">
          <strong>info@vyronsoft.co.za</strong>
          <strong>072 080 4844</strong>
        </div>
      </header>

      <div className="vyron-wrap">
        <section className="vyron-hero">
          <div className="vyron-card vyron-hero-main">
            <div className="vyron-kicker">{product.kicker}</div>
            <h1>{product.name}</h1>
            <h2>{product.headline}</h2>
            <p>{product.intro}</p>
            <div className="vyron-actions">
              <a className="vyron-btn" href="mailto:info@vyronsoft.co.za">
                Book a Demo
              </a>
              <Link className="vyron-btn ghost" href="/software">
                View all products
              </Link>
            </div>
          </div>

          <aside className="vyron-card vyron-intel">
            <div className="vyron-intel-head">
              <div>
                <p>Live command centre</p>
                <h3>{product.name.replace("VYRON ", "")} Intelligence</h3>
              </div>
              <div className="vyron-orb">{product.icon}</div>
            </div>
            <div className="vyron-stat-grid">
              {product.roi.slice(0, 4).map((item) => (
                <div className="vyron-stat" key={item}>
                  <i />
                  <b>Control Point</b>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="vyron-built">
              <p>Built for</p>
              <div className="vyron-tags">
                {product.bestFor.slice(0, 8).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="vyron-grid-3">
          <InfoBlock title={`The problems ${product.name} solves`} items={product.problems} />
          <InfoBlock title="What the software does" items={product.features} />
          <InfoBlock title="AI and intelligence features" items={product.ai} />
        </section>

        <section className="vyron-card vyron-value">
          <div className="vyron-value-grid">
            <div>
              <div className="vyron-section-kicker">Management value</div>
              <h2>Built to give leadership control, not just another software screen.</h2>
              <p>
                Each VYRON product is designed around practical operational pressure: lost time, weak visibility,
                manual admin, hidden leakage, missed follow-up and decisions being made too late.
              </p>
            </div>
            <div className="vyron-mini-grid">
              <MiniBlock title="Management dashboard value" items={product.dashboard} />
              <MiniBlock title="Operational savings and ROI" items={product.roi} />
              <MiniBlock title="Reporting and control benefits" items={product.reports} />
              <MiniBlock title={`Who ${product.name} is for`} items={product.bestFor} />
            </div>
          </div>
        </section>

        <section className="vyron-card vyron-cta">
          <div className="vyron-section-kicker">Ready to see {product.name}?</div>
          <h2>Book a demo and see how this becomes a serious control layer inside your business.</h2>
          <p>
            VYRON is built for companies that want cleaner processes, stronger visibility, better decisions and less
            operational leakage. Speak to us and we will show how this product fits your business environment.
          </p>
          <div className="vyron-actions" style={{ justifyContent: "center" }}>
            <a className="vyron-btn" href="mailto:info@vyronsoft.co.za">
              Book a Demo
            </a>
            <a className="vyron-btn ghost" href="tel:0720804844">
              Call 072 080 4844
            </a>
          </div>
          <div className="vyron-footerlinks">
            {Object.values(products).map((item) => (
              <Link key={item.slug} href={`/software/${item.slug}`}>
                {item.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="vyron-card vyron-panel">
      <div className="vyron-section-kicker">VYRON Control</div>
      <h3>{title}</h3>
      <div className="vyron-list">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}

function MiniBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="vyron-mini">
      <b>{title}</b>
      <div className="vyron-list">
        {items.slice(0, 5).map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}
