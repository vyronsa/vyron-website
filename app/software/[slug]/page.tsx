import Link from "next/link";
import { notFound } from "next/navigation";

type Product = {
  slug: string;
  name: string;
  kicker: string;
  accent: string;
  headline: string;
  intro: string;
  problem: string[];
  features: string[];
  ai: string[];
  outcomes: string[];
  bestFor: string[];
};

const products: Product[] = [
  {
    slug: "core",
    name: "VYRON CORE",
    kicker: "Workforce command centre",
    accent: "from-cyan-400 via-blue-500 to-indigo-500",
    headline: "Control staff, shifts, clocking, HR exceptions and payroll readiness from one live command centre.",
    intro: "VYRON CORE is not a payroll system. It is the operational layer before payroll: the system that makes sure hours, attendance, rosters, leave, exceptions and approvals are clean before anything reaches payroll. It helps companies stop paying for mistakes, unauthorised overtime, missing clock-ins, unmanaged leave and manual HR admin.",
    problem: ["Payroll teams waste hours chasing missing clock-ins and unclear shift changes.", "Managers approve overtime too late, or only notice problems after payroll has already been processed.", "Multi-branch staff movement is hard to control when rosters, clocking and HR records live in separate places.", "Attendance exceptions, leave requests and disciplinary issues often sit in WhatsApp messages, spreadsheets or paper files."],
    features: ["Live clocking visibility across every store, site and department.", "Smart rostering with store rules, staff rotations and future shift planning.", "Exception management for late arrivals, missed clock-outs, overtime, short hours and manual adjustments.", "Leave and availability workflows with approval tracking.", "HR case tracking, warnings, disciplinary records and compliance notes.", "Payroll readiness checks that highlight unresolved issues before payroll export.", "Manager dashboards showing risk areas, open exceptions and operational pressure points.", "Employee profiles with work history, attendance patterns and HR visibility."],
    ai: ["Detect unusual attendance patterns before they become payroll leakage.", "Suggest roster improvements based on historical patterns and location needs.", "Flag risky exceptions, repeated late arrivals and unresolved manager actions.", "Support managers with clearer compliance and HR decision guidance."],
    outcomes: ["Reduce payroll leakage and unauthorised overtime.", "Save management hours every week.", "Create cleaner payroll input without replacing the payroll system.", "Give executives live workforce control across multiple locations."],
    bestFor: ["Retail groups", "Restaurants", "Multi-branch operations", "Warehouses", "Security teams", "Field staff businesses"]
  },
  {
    slug: "reach",
    name: "VYRON REACH",
    kicker: "AI marketing command centre",
    accent: "from-fuchsia-400 via-violet-500 to-purple-600",
    headline: "Plan, generate, manage and measure marketing activity from one intelligent growth workspace.",
    intro: "VYRON REACH is built for businesses that need consistent marketing output without relying on scattered spreadsheets, random ad ideas and disconnected campaign work. It brings campaign planning, audience targeting, content generation, outreach, pipeline visibility and performance thinking into one command centre.",
    problem: ["Companies post inconsistently because nobody owns the full marketing workflow.", "Ad spend is often guessed instead of planned against goals, audience and expected return.", "Sales outreach, leads, content ideas and campaign results are disconnected.", "Small teams need agency-level output without agency-level cost."],
    features: ["Campaign planning for Google, Facebook, social media, email and outreach.", "AI-assisted ad copy, post ideas, campaign angles and promotional messaging.", "Lead pipeline tracking from first contact to opportunity.", "Content calendar and marketing activity overview.", "Audience, offer and channel planning for different business types.", "Management view of what campaigns are running and what still needs action.", "Brand messaging library so companies stay consistent across campaigns.", "Sales follow-up flows and prospect communication planning."],
    ai: ["Generate campaign angles based on product, market and target customer.", "Suggest where marketing effort should go based on business goals.", "Create ad copy, outreach messages and social content faster.", "Highlight weak campaigns and missing follow-up opportunities."],
    outcomes: ["Increase marketing consistency.", "Reduce dependency on expensive outsourced marketing for every small task.", "Turn campaigns into repeatable systems instead of random activity.", "Give owners and managers a clearer growth command centre."],
    bestFor: ["SMEs", "Agencies", "Dealerships", "Service businesses", "Property businesses", "Franchise groups"]
  },
  {
    slug: "maint",
    name: "VYRON MAINT",
    kicker: "Maintenance operations command centre",
    accent: "from-orange-300 via-amber-500 to-red-500",
    headline: "Manage maintenance tickets, properties, units, technicians, evidence, SLA risk and repeat issues in one place.",
    intro: "VYRON MAINT gives property managers and operations teams control over maintenance from the first reported issue to final completion evidence. It is designed to stop lost tickets, slow contractors, repeated faults, poor visibility and expensive maintenance surprises.",
    problem: ["Maintenance issues get lost in WhatsApp groups, emails and spreadsheets.", "Managers struggle to prove what was done, when it was done and by whom.", "Repeat issues keep costing money because nobody sees the pattern early enough.", "Technicians and contractors are difficult to compare without clear history and evidence."],
    features: ["Property and unit-based ticket management.", "Issue categories, priorities, SLA timers and status tracking.", "Technician assignment with before/after photo evidence.", "Maintenance history per property, unit and asset.", "Repeat issue detection and risk visibility.", "Dashboard views for open, overdue, completed and high-risk work.", "Cost tracking, contractor notes and completion records.", "Mobile-friendly workflows for reporting and field updates."],
    ai: ["Suggest issue priority, category and risk level.", "Detect repeat problems across units or buildings.", "Flag SLA risk before jobs become complaints.", "Highlight contractors, properties or assets causing repeated cost."],
    outcomes: ["Reduce maintenance chaos and lost communication.", "Improve contractor accountability.", "Protect property value with better issue history.", "Give owners and managers clear operational control."],
    bestFor: ["Property managers", "Body corporates", "Rental portfolios", "Facilities teams", "Hotels", "Construction aftercare teams"]
  },
  {
    slug: "cost",
    name: "VYRON COST",
    kicker: "Cost leakage intelligence",
    accent: "from-emerald-300 via-green-500 to-teal-500",
    headline: "Find hidden cost leakage in invoices, suppliers, stock, categories and operational spend before it damages profit.",
    intro: "VYRON COST is built for companies that want stronger control over supplier spend, invoice accuracy, food cost, packaging, cleaning, distribution and operating expenses. It turns cost checking into a structured intelligence system instead of a manual afterthought.",
    problem: ["Invoice errors and category mistakes quietly reduce margin.", "Supplier increases are often noticed too late.", "Management cannot easily see which stores, branches or categories are leaking profit.", "Manual checking is slow, inconsistent and dependent on one person."],
    features: ["Supplier invoice analysis and category breakdowns.", "Food cost, packaging, cleaning and distribution visibility.", "VAT and total-check workflows for invoice accuracy.", "Store, branch and month-based spend summaries.", "Supplier comparison and price movement tracking.", "Margin pressure alerts and unusual spend detection.", "Export-ready reports for finance and management.", "Operational cost dashboards for decision-makers."],
    ai: ["Identify unusual invoice movements and possible overcharges.", "Flag category shifts that may hide margin leakage.", "Suggest where management should investigate supplier cost increases.", "Create executive summaries from detailed invoice data."],
    outcomes: ["Recover hidden margin.", "Improve supplier control.", "Reduce manual finance checking time.", "Give owners a sharper view of operational spend."],
    bestFor: ["Restaurants", "Retail groups", "Food production", "Franchises", "Hospitality", "Multi-branch businesses"]
  },
  {
    slug: "build",
    name: "VYRON BUILD",
    kicker: "Construction visibility platform",
    accent: "from-slate-200 via-sky-400 to-blue-600",
    headline: "Track builds, units, phases, contractors, defects, photos, timelines and handover readiness from one site command centre.",
    intro: "VYRON BUILD is designed for builders, developers and project teams that need real-time control across houses, flats, units, subcontractors and construction phases. It helps prevent missing evidence, unclear progress, late defects and poor site communication.",
    problem: ["Progress updates are scattered across calls, WhatsApp photos and site notes.", "Developers struggle to see which units are behind and why.", "Defects and snag lists often appear too late in the project.", "Contractor accountability is weak without structured evidence."],
    features: ["Project, phase, block and unit tracking.", "Contractor assignment and task progress visibility.", "Before/after photo evidence and site notes.", "Snag list and defect tracking.", "Handover readiness dashboards.", "Timeline, delay and risk visibility.", "Progress reports for owners, developers and managers.", "Mobile site workflows for quick updates."],
    ai: ["Flag delayed units or risky phases.", "Summarise progress from site updates.", "Highlight repeat contractor issues.", "Suggest priority actions before handover deadlines are missed."],
    outcomes: ["Improve build visibility.", "Reduce handover chaos.", "Strengthen contractor accountability.", "Give developers one clear view of project readiness."],
    bestFor: ["Developers", "Builders", "Project managers", "Estate developments", "Construction teams", "Renovation companies"]
  },
  {
    slug: "farm",
    name: "VYRON FARM",
    kicker: "Farm intelligence system",
    accent: "from-lime-300 via-green-500 to-emerald-600",
    headline: "Manage livestock, breeding, lineage, treatments, tasks, assets and farm performance from one practical farm command centre.",
    intro: "VYRON FARM gives farmers a structured way to manage animals, records, breeding lines, health events, treatments, farm tasks and operational visibility. It starts with serious cattle and stud management, then expands into broader farm control.",
    problem: ["Animal records are often kept in books, spreadsheets or memory.", "Lineage and breeding history becomes difficult to search as the herd grows.", "Treatments, vaccinations and farm tasks can be missed without reminders.", "Farm owners need better visibility without complicated corporate software."],
    features: ["Searchable animal catalogue by tag number.", "Father, mother, birth year, breed and lineage tracking.", "Treatment, vaccination and health history.", "Breeding records, calf history and stud performance.", "Farm tasks, reminders and operational notes.", "Asset, camp and livestock movement visibility.", "Performance dashboards for herd and farm decisions.", "Mobile-friendly field usage for quick updates."],
    ai: ["Suggest animals to monitor based on health or breeding history.", "Highlight missing treatment or vaccination records.", "Summarise lineage and performance notes.", "Help identify stronger breeding and management decisions."],
    outcomes: ["Protect valuable livestock records.", "Improve breeding decisions.", "Reduce missed treatments and admin gaps.", "Give farmers a modern but practical farm control system."],
    bestFor: ["Stud farms", "Cattle farmers", "Mixed farms", "Game farms", "Breeders", "Agricultural managers"]
  },
  {
    slug: "recruit",
    name: "VYRON RECRUIT",
    kicker: "Workforce acquisition command centre",
    accent: "from-teal-300 via-cyan-500 to-blue-500",
    headline: "Find, manage, compare and move candidates through hiring pipelines without losing control to expensive recruitment chaos.",
    intro: "VYRON RECRUIT is built to help companies reduce recruitment cost, improve hiring speed and create a structured candidate intelligence system. It gives teams a way to manage roles, candidates, outreach, screening and hiring progress in one place.",
    problem: ["Recruitment agencies are expensive and often own the candidate relationship.", "Hiring pipelines are scattered across emails, LinkedIn, spreadsheets and manager notes.", "Good candidates are lost because follow-up is inconsistent.", "Managers lack a clear view of which roles are stuck and why."],
    features: ["Role and vacancy management.", "Candidate pipeline stages and status tracking.", "Candidate profiles, notes, documents and communication history.", "Shortlist comparison and scoring workflows.", "Outreach message planning and follow-up tracking.", "Interview scheduling visibility and manager feedback.", "Hiring dashboards for open roles and bottlenecks.", "Talent pool database for future hiring."],
    ai: ["Summarise candidate strengths and risks.", "Generate outreach and follow-up messages.", "Match candidates to role requirements more clearly.", "Flag stalled roles, weak pipelines and missing feedback."],
    outcomes: ["Reduce recruitment agency dependency.", "Speed up hiring decisions.", "Build an owned candidate database.", "Give leadership a clearer view of hiring performance."],
    bestFor: ["Medium businesses", "Large employers", "HR teams", "Specialised industries", "Agriculture", "Operations-heavy companies"]
  }
];

function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050715] text-white">
      <section className="relative overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
        <div className={`pointer-events-none absolute right-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full bg-gradient-to-br ${product.accent} opacity-30 blur-[120px]`} />
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] px-5 py-4 shadow-2xl backdrop-blur-xl">
            <Link href="/" className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">← Back to Home</Link>
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">VYRON Software</p>
              <p className="text-sm text-white/70">info@vyronsoft.co.za · 072 080 4844</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
            <div className="rounded-[36px] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-xl sm:p-10">
              <div className={`mb-6 inline-flex rounded-full bg-gradient-to-r ${product.accent} px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-xl`}>
                {product.kicker}
              </div>
              <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{product.name}</h1>
              <h2 className="mt-6 max-w-4xl text-2xl font-semibold leading-tight text-white/92 sm:text-3xl">{product.headline}</h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">{product.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:info@vyronsoft.co.za" className={`rounded-full bg-gradient-to-r ${product.accent} px-6 py-3 text-sm font-bold text-white shadow-2xl transition hover:scale-[1.02]`}>Book a demo</a>
                <Link href="/software" className="rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-white">View all products</Link>
              </div>
            </div>

            <div className="rounded-[36px] border border-white/10 bg-[#0B1026]/90 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/40">Live command centre</p>
                  <h3 className="mt-2 text-2xl font-black">Product intelligence</h3>
                </div>
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${product.accent} shadow-2xl`} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {product.outcomes.map((item) => (
                  <div key={item} className="min-h-[130px] rounded-[26px] border border-white/10 bg-white/[0.055] p-5">
                    <div className={`mb-4 h-2 w-20 rounded-full bg-gradient-to-r ${product.accent}`} />
                    <p className="text-sm font-semibold leading-6 text-white/82">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[28px] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">Built for</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.bestFor.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white/70">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="mt-10 grid gap-6 lg:grid-cols-3">
            <InfoBlock title="The operational problems it solves" items={product.problem} accent={product.accent} />
            <InfoBlock title="What the software does" items={product.features} accent={product.accent} />
            <InfoBlock title="AI and intelligence layer" items={product.ai} accent={product.accent} />
          </section>

          <section className="mt-10 rounded-[36px] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-xl sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">Why companies want it</p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">Designed to make the value obvious.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {product.outcomes.concat(["Stronger management control", "Cleaner data for better decisions"]).slice(0, 6).map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/10 bg-[#050715]/60 p-5">
                    <p className="text-base font-bold text-white">{item}</p>
                    <p className="mt-3 text-sm leading-6 text-white/60">Built to reduce admin friction, expose hidden risk and give leadership a clear operational advantage.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function InfoBlock({ title, items, accent }: { title: string; items: string[]; accent: string }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl">
      <div className={`mb-5 h-2 w-24 rounded-full bg-gradient-to-r ${accent}`} />
      <h3 className="text-2xl font-black tracking-[-0.03em]">{title}</h3>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item} className="rounded-[22px] border border-white/10 bg-black/20 p-4">
            <p className="text-sm leading-6 text-white/72">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
