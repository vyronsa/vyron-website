export type VyronProduct = {
  slug: string;
  name: string;
  shortName: string;
  accent: string;
  accentSoft: string;
  glow: string;
  intro: string;
  headline: string;
  problems: string[];
  features: string[];
  ai: string[];
  dashboard: string[];
  roi: string[];
  reports: string[];
  forWho: string[];
};

export const products: VyronProduct[] = [
  {
    slug: "core",
    name: "VYRON CORE",
    shortName: "CORE",
    accent: "#1c8cff",
    accentSoft: "rgba(28, 140, 255, 0.17)",
    glow: "rgba(28, 140, 255, 0.38)",
    headline: "Workforce control, HR, clocking, rostering, attendance exceptions and payroll-readiness in one command centre.",
    intro: "VYRON CORE is not a payroll system. It is the control layer before payroll: the platform that makes sure rosters, hours, attendance, leave, overtime, exceptions and approvals are clean before payroll receives the final data.",
    problems: ["Payroll teams lose hours chasing missing clock-ins and unclear shift changes.", "Unauthorised overtime and late approvals create hidden payroll leakage.", "Managers rely on WhatsApp, spreadsheets and paper files for staff control.", "Multi-branch staff movement is difficult to manage without live visibility."],
    features: ["Clocking visibility", "Rostering", "Leave control", "Attendance exceptions", "HR cases", "Warning records", "Payroll-readiness checks", "Manager approvals"],
    ai: ["Flags repeated lateness and unresolved exceptions.", "Highlights risky overtime patterns.", "Suggests roster pressure areas.", "Supports cleaner compliance decisions."],
    dashboard: ["Open exceptions", "Payroll blockers", "Leave status", "Overtime risk", "Branch attendance"],
    roi: ["Reduces payroll leakage.", "Saves manager admin time.", "Blocks dirty payroll data.", "Improves workforce accountability."],
    reports: ["Attendance reports", "Exception reports", "Payroll-readiness summaries", "HR case visibility"],
    forWho: ["Retail groups", "Restaurants", "Warehouses", "Security teams", "Field teams", "Multi-branch businesses"],
  },
  {
    slug: "reach",
    name: "VYRON REACH",
    shortName: "REACH",
    accent: "#a855f7",
    accentSoft: "rgba(168, 85, 247, 0.17)",
    glow: "rgba(168, 85, 247, 0.40)",
    headline: "AI marketing command centre for campaigns, content, lead pipelines, outreach and sales growth.",
    intro: "VYRON REACH gives companies a structured marketing workspace where campaigns, ideas, ads, content, outreach, leads and performance can be planned and managed from one place.",
    problems: ["Marketing is often inconsistent and reactive.", "Ad spend is guessed instead of planned.", "Leads and follow-ups get lost between systems.", "Small teams need agency-level output without agency-level cost."],
    features: ["Campaign planning", "Ad ideas", "Content calendar", "Lead pipeline", "Outreach tracking", "Performance view", "Brand messaging", "Follow-up planning"],
    ai: ["Generates campaign angles and ad copy.", "Suggests channel priorities.", "Highlights weak campaigns.", "Creates outreach and follow-up messaging."],
    dashboard: ["Campaign status", "Lead movement", "Ad performance", "Content output", "Growth opportunities"],
    roi: ["Improves campaign consistency.", "Reduces wasted marketing effort.", "Turns marketing into a repeatable system.", "Creates clearer growth visibility."],
    reports: ["Campaign reports", "Lead reports", "Content plans", "Performance summaries"],
    forWho: ["SMEs", "Agencies", "Dealerships", "Service businesses", "Property groups", "Franchises"],
  },
  {
    slug: "maint",
    name: "VYRON MAINT",
    shortName: "MAINT",
    accent: "#f59e0b",
    accentSoft: "rgba(245, 158, 11, 0.18)",
    glow: "rgba(245, 158, 11, 0.40)",
    headline: "Maintenance and property issue management for tickets, units, technicians, SLA control and evidence.",
    intro: "VYRON MAINT helps property and operations teams control maintenance from the first reported issue to final completion evidence, with clear accountability and history.",
    problems: ["Maintenance tickets get lost in WhatsApp and email.", "Managers cannot easily prove what was done.", "Repeat faults cost money because patterns are missed.", "Contractor accountability is weak without history."],
    features: ["Ticket management", "Property records", "Unit history", "Technician assignment", "SLA tracking", "Before/after photos", "Repeat issue detection", "Contractor notes"],
    ai: ["Suggests priority and category.", "Flags repeat issues.", "Highlights SLA risk.", "Finds expensive maintenance patterns."],
    dashboard: ["Open tickets", "Overdue work", "Repeat issues", "Property risk", "Technician performance"],
    roi: ["Reduces lost jobs.", "Improves contractor accountability.", "Protects property value.", "Cuts repeat maintenance waste."],
    reports: ["Ticket reports", "SLA reports", "Property history", "Contractor performance"],
    forWho: ["Property managers", "Body corporates", "Rental portfolios", "Facilities teams", "Hotels", "Developers"],
  },
  {
    slug: "cost",
    name: "VYRON COST",
    shortName: "COST",
    accent: "#22c55e",
    accentSoft: "rgba(34, 197, 94, 0.17)",
    glow: "rgba(34, 197, 94, 0.38)",
    headline: "Cost control and invoice intelligence for supplier spend, leakage detection and margin protection.",
    intro: "VYRON COST turns invoice checking, supplier cost control and category analysis into a structured intelligence system that protects margin and exposes hidden leakage.",
    problems: ["Invoice errors quietly damage margins.", "Supplier increases are noticed too late.", "Branch/category leakage is difficult to see.", "Manual checking is slow and inconsistent."],
    features: ["Supplier invoices", "Category tracking", "VAT checks", "Food cost", "Packaging cost", "Distribution cost", "Leakage detection", "Executive reporting"],
    ai: ["Flags unusual invoice movement.", "Highlights category shifts.", "Suggests supplier investigations.", "Creates executive summaries."],
    dashboard: ["Supplier trends", "Cost categories", "Margin pressure", "Branch spend", "Leakage alerts"],
    roi: ["Recovers hidden margin.", "Improves supplier control.", "Reduces finance admin time.", "Protects profitability."],
    reports: ["Invoice summaries", "Supplier reports", "Category reports", "Executive cost packs"],
    forWho: ["Restaurants", "Retail groups", "Hospitality", "Franchises", "Food production", "Multi-branch businesses"],
  },
  {
    slug: "build",
    name: "VYRON BUILD",
    shortName: "BUILD",
    accent: "#fb923c",
    accentSoft: "rgba(251, 146, 60, 0.18)",
    glow: "rgba(251, 146, 60, 0.38)",
    headline: "Construction project command centre for phases, contractors, progress, site issues, evidence and handover readiness.",
    intro: "VYRON BUILD gives builders and developers a live project control layer for tracking work, evidence, progress, defects and handover readiness across sites and units.",
    problems: ["Progress updates are scattered across calls and photos.", "Delays are noticed too late.", "Defects and snag lists become messy.", "Contractor accountability is difficult without evidence."],
    features: ["Project tracking", "Unit progress", "Contractor tasks", "Photo evidence", "Snag lists", "Delay tracking", "Cost visibility", "Handover readiness"],
    ai: ["Flags delayed units.", "Summarises site updates.", "Highlights contractor risks.", "Suggests priority actions before handover."],
    dashboard: ["Progress status", "Site issues", "Contractor actions", "Delay risk", "Handover readiness"],
    roi: ["Reduces handover chaos.", "Improves project visibility.", "Strengthens contractor accountability.", "Reduces costly missed defects."],
    reports: ["Progress reports", "Snag reports", "Contractor reports", "Handover packs"],
    forWho: ["Developers", "Builders", "Project managers", "Construction teams", "Estate developments", "Renovation companies"],
  },
  {
    slug: "farm",
    name: "VYRON FARM",
    shortName: "FARM",
    accent: "#84cc16",
    accentSoft: "rgba(132, 204, 22, 0.17)",
    glow: "rgba(132, 204, 22, 0.38)",
    headline: "Farm and livestock management for animal records, lineage, breeding, health, treatments and herd performance.",
    intro: "VYRON FARM gives farmers a practical farm command centre for searchable animal records, breeding lines, health events, treatments, reminders and operational visibility.",
    problems: ["Animal records are kept in books or spreadsheets.", "Lineage becomes hard to search as herds grow.", "Treatments and vaccinations can be missed.", "Farm owners need visibility without complicated software."],
    features: ["Animal catalogue", "Lineage tracking", "Breeding records", "Health history", "Treatment records", "Weights", "Camps", "Farm tasks"],
    ai: ["Suggests animals to monitor.", "Highlights missing records.", "Summarises lineage notes.", "Supports stronger breeding decisions."],
    dashboard: ["Herd performance", "Health records", "Breeding status", "Treatment gaps", "Farm tasks"],
    roi: ["Protects livestock records.", "Reduces missed treatments.", "Improves breeding decisions.", "Saves time searching records."],
    reports: ["Animal profiles", "Lineage reports", "Treatment history", "Herd performance"],
    forWho: ["Stud farms", "Cattle farmers", "Mixed farms", "Game farms", "Breeders", "Agricultural managers"],
  },
  {
    slug: "recruit",
    name: "VYRON RECRUIT",
    shortName: "RECRUIT",
    accent: "#06b6d4",
    accentSoft: "rgba(6, 182, 212, 0.17)",
    glow: "rgba(6, 182, 212, 0.38)",
    headline: "Recruitment and workforce acquisition command centre for hiring pipelines, sourcing, screening and talent control.",
    intro: "VYRON RECRUIT helps companies reduce recruitment cost, control candidate relationships and manage hiring from role creation to appointment in one structured system.",
    problems: ["Hiring pipelines are scattered across emails and spreadsheets.", "Recruitment agencies are expensive.", "Good candidates are lost through poor follow-up.", "Managers lack visibility over stuck roles."],
    features: ["Vacancy management", "Candidate pipeline", "Candidate profiles", "Shortlist scoring", "Outreach tracking", "Interview tracking", "Manager feedback", "Talent pool"],
    ai: ["Summarises candidate strengths.", "Generates outreach messages.", "Matches candidates to role needs.", "Flags stalled roles and missing feedback."],
    dashboard: ["Open roles", "Pipeline health", "Interview status", "Hiring bottlenecks", "Talent pool strength"],
    roi: ["Reduces agency dependency.", "Speeds up hiring decisions.", "Builds owned candidate data.", "Improves hiring control."],
    reports: ["Role pipeline reports", "Candidate summaries", "Hiring progress", "Talent pool reports"],
    forWho: ["Medium businesses", "Large employers", "HR teams", "Specialised industries", "Agriculture", "Operations-heavy companies"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
