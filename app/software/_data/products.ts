export type VyronProduct = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  accent: string;
  accentSoft: string;
  gradient: string;
  headline: string;
  intro: string;
  problems: string[];
  features: string[];
  intelligence: string[];
  dashboard: string[];
  reports: string[];
  roi: string[];
  forWho: string[];
};

export const products: Record<string, VyronProduct> = {
  core: {
    slug: "core",
    name: "VYRON CORE",
    shortName: "CORE",
    eyebrow: "Workforce • HR • Clocking • Rostering • Payroll-readiness",
    accent: "#1d8cff",
    accentSoft: "rgba(29, 140, 255, 0.18)",
    gradient: "linear-gradient(135deg, #12d7ff 0%, #1d8cff 48%, #7c3cff 100%)",
    headline: "Workforce command centre for attendance control, HR visibility, rostering and payroll-readiness.",
    intro: "VYRON CORE gives companies one control layer before payroll. It manages clocking, rosters, attendance exceptions, leave, HR cases and approval readiness so payroll receives cleaner, approved data. It is not a payroll system. It protects payroll by making sure problems are found and resolved before payroll export.",
    problems: ["Missing clock-ins and manual timesheet corrections delay payroll.", "Unauthorised overtime and late approvals create payroll leakage.", "Rosters, leave, HR records and attendance exceptions are often disconnected.", "Managers only see problems after they already became expensive."],
    features: ["Clocking visibility across branches, stores and sites", "Rosters, shift planning and staff movement control", "Late arrivals, missed clock-outs and overtime exceptions", "Leave and availability approval workflows", "HR cases, warnings and compliance notes", "Payroll-readiness checks before export", "Manager approvals and exception resolution", "Employee history and attendance patterns"],
    intelligence: ["Flags repeated late arrivals and risky attendance patterns", "Highlights unresolved items blocking payroll readiness", "Suggests where managers must act first", "Turns workforce activity into live management intelligence"],
    dashboard: ["Open exceptions by branch", "Payroll readiness status", "Overtime exposure", "Leave and absence pressure", "HR risk visibility"],
    reports: ["Attendance exception reports", "Payroll-readiness summaries", "Leave and absence reports", "HR case summaries", "Branch workforce control reports"],
    roi: ["Reduces payroll leakage", "Saves manager admin time", "Improves payroll input quality", "Creates control across multi-site teams"],
    forWho: ["Retail groups", "Restaurants", "Warehouses", "Security teams", "Field staff businesses", "Multi-branch operations"]
  },
  reach: {
    slug: "reach",
    name: "VYRON REACH",
    shortName: "REACH",
    eyebrow: "AI Marketing • Campaigns • Leads • Pipeline • Growth",
    accent: "#a855f7",
    accentSoft: "rgba(168, 85, 247, 0.18)",
    gradient: "linear-gradient(135deg, #ff4fd8 0%, #a855f7 50%, #4f46e5 100%)",
    headline: "AI marketing command centre for campaigns, content, leads, outreach and growth visibility.",
    intro: "VYRON REACH helps businesses plan campaigns, create marketing content, manage leads, track outreach and understand what is working. It gives owners and teams one intelligent place to run marketing instead of relying on scattered documents, random ideas and disconnected follow-ups.",
    problems: ["Marketing activity is inconsistent and difficult to manage.", "Ad ideas, content, leads and sales follow-ups are disconnected.", "Businesses spend money without a clear campaign control system.", "Small teams need stronger output without expensive agency dependency."],
    features: ["Campaign planning for Google, Facebook, social and email", "AI-assisted ad copy and content ideas", "Lead pipeline and outreach tracking", "Content calendar and campaign schedule", "Brand message library", "Sales follow-up workflows", "Performance overview", "Growth activity command centre"],
    intelligence: ["Generates campaign angles and ad ideas", "Highlights weak follow-up and missing activity", "Suggests content based on business goals", "Summarises campaign progress for management"],
    dashboard: ["Campaigns running", "Lead flow", "Pipeline progress", "Content activity", "Marketing performance"],
    reports: ["Campaign summaries", "Lead pipeline reports", "Content activity reports", "Outreach reports", "Management growth reports"],
    roi: ["Improves marketing consistency", "Reduces agency dependency", "Turns marketing into a repeatable system", "Improves sales follow-up visibility"],
    forWho: ["SMEs", "Agencies", "Dealerships", "Service businesses", "Franchise groups", "Property businesses"]
  },
  maint: {
    slug: "maint",
    name: "VYRON MAINT",
    shortName: "MAINT",
    eyebrow: "Maintenance • Tickets • Technicians • SLA • Property Control",
    accent: "#f59e0b",
    accentSoft: "rgba(245, 158, 11, 0.18)",
    gradient: "linear-gradient(135deg, #ffb703 0%, #f97316 48%, #ef4444 100%)",
    headline: "Maintenance command centre for properties, units, tickets, technicians, SLA risk and evidence.",
    intro: "VYRON MAINT gives property managers and operations teams full control from the first reported issue to completion evidence. It replaces WhatsApp chaos and lost tickets with structured maintenance history, contractor accountability and live risk visibility.",
    problems: ["Maintenance issues get lost in WhatsApp, calls and emails.", "Managers cannot always prove what was done, when and by whom.", "Repeat problems become expensive because patterns are hidden.", "Contractor performance is difficult to measure without evidence."],
    features: ["Property and unit-based ticket management", "Issue priority, categories and SLA timers", "Technician and contractor assignment", "Before and after photo evidence", "Repeat issue detection", "Maintenance history per unit", "Overdue and high-risk job visibility", "Completion notes and accountability records"],
    intelligence: ["Suggests issue priority and risk", "Flags repeat problems", "Highlights SLA danger before complaints", "Shows contractor and property risk patterns"],
    dashboard: ["Open tickets", "Overdue work", "Repeat issues", "SLA exposure", "Contractor performance"],
    reports: ["Maintenance history", "SLA reports", "Contractor reports", "Property risk reports", "Completion evidence reports"],
    roi: ["Reduces lost maintenance communication", "Improves contractor accountability", "Protects property value", "Cuts repeated maintenance waste"],
    forWho: ["Property managers", "Body corporates", "Rental portfolios", "Facilities teams", "Hotels", "Construction aftercare teams"]
  },
  cost: {
    slug: "cost",
    name: "VYRON COST",
    shortName: "COST",
    eyebrow: "Invoice Intelligence • Cost Leakage • Supplier Control • Margin Protection",
    accent: "#10b981",
    accentSoft: "rgba(16, 185, 129, 0.18)",
    gradient: "linear-gradient(135deg, #34d399 0%, #10b981 48%, #059669 100%)",
    headline: "Cost control and invoice intelligence system for supplier spend, leakage detection and margin protection.",
    intro: "VYRON COST helps companies find hidden cost leakage in supplier invoices, categories, branches and operating expenses. It gives management a clearer view of food cost, packaging, distribution, cleaning, supplier increases and margin pressure.",
    problems: ["Invoice errors quietly reduce profit.", "Supplier increases are noticed too late.", "Branch and category leakage is hard to see manually.", "Management relies on slow spreadsheet checking."],
    features: ["Supplier invoice analysis", "Food, packaging, cleaning and distribution categories", "VAT and total check workflows", "Branch and monthly summaries", "Supplier price movement tracking", "Margin pressure alerts", "Cost leakage dashboard", "Management-ready reports"],
    intelligence: ["Finds unusual invoice movements", "Flags possible overcharges", "Highlights category shifts", "Creates executive cost summaries"],
    dashboard: ["Supplier spend", "Cost by category", "Branch leakage", "Invoice exceptions", "Margin pressure"],
    reports: ["Supplier reports", "Category reports", "Store spend summaries", "VAT check summaries", "Executive cost reports"],
    roi: ["Protects margins", "Improves supplier control", "Reduces manual finance checking", "Finds hidden leakage earlier"],
    forWho: ["Restaurants", "Retail groups", "Food production", "Hospitality", "Franchises", "Multi-branch businesses"]
  },
  build: {
    slug: "build",
    name: "VYRON BUILD",
    shortName: "BUILD",
    eyebrow: "Construction • Projects • Contractors • Progress • Handover",
    accent: "#38bdf8",
    accentSoft: "rgba(56, 189, 248, 0.18)",
    gradient: "linear-gradient(135deg, #e2e8f0 0%, #38bdf8 48%, #2563eb 100%)",
    headline: "Construction project command centre for progress, contractors, site evidence, defects and handover readiness.",
    intro: "VYRON BUILD helps developers, builders and project managers control projects, phases, subcontractors, progress, site issues and handover readiness. It gives leadership one live view instead of relying on scattered photos, calls and site notes.",
    problems: ["Site updates are scattered and hard to verify.", "Developers cannot always see which units are behind.", "Defects and snags appear too late.", "Contractor accountability is weak without structured evidence."],
    features: ["Project, phase and unit tracking", "Contractor assignment", "Progress evidence and photos", "Snag list and defect management", "Delay and risk visibility", "Handover readiness dashboard", "Site notes and task history", "Owner and manager reports"],
    intelligence: ["Flags delayed units", "Summarises site updates", "Highlights repeat contractor issues", "Suggests priority actions before handover"],
    dashboard: ["Project progress", "Delayed work", "Defects", "Contractor performance", "Handover readiness"],
    reports: ["Progress reports", "Defect reports", "Contractor reports", "Handover summaries", "Site evidence packs"],
    roi: ["Reduces handover chaos", "Improves contractor accountability", "Protects project timelines", "Creates better owner visibility"],
    forWho: ["Developers", "Builders", "Project managers", "Construction teams", "Estate developments", "Renovation companies"]
  },
  farm: {
    slug: "farm",
    name: "VYRON FARM",
    shortName: "FARM",
    eyebrow: "Farm Operations • Livestock • Lineage • Herd Intelligence",
    accent: "#22c55e",
    accentSoft: "rgba(34, 197, 94, 0.18)",
    gradient: "linear-gradient(135deg, #a3e635 0%, #22c55e 48%, #16a34a 100%)",
    headline: "Farm and livestock management system for animal records, lineage, breeding, treatments and farm visibility.",
    intro: "VYRON FARM gives farmers a structured way to manage livestock records, breeding lines, health events, treatments, farm tasks and operational visibility. It starts with serious cattle and stud management and expands into broader farm control.",
    problems: ["Animal records are often kept in books or memory.", "Lineage and breeding history becomes hard to search.", "Treatments and vaccinations can be missed.", "Farm owners need better visibility without complicated software."],
    features: ["Searchable animal catalogue by tag number", "Father, mother, birth year and lineage tracking", "Treatment, vaccination and weight history", "Breeding records and calf history", "Camp, herd movement and farm notes", "Farm tasks and reminders", "Production and performance records", "Mobile field updates"],
    intelligence: ["Suggests animals to monitor", "Highlights missing treatment records", "Summarises lineage and performance", "Supports stronger breeding decisions"],
    dashboard: ["Herd performance", "Treatment status", "Breeding activity", "Camp visibility", "Farm tasks"],
    reports: ["Animal profile reports", "Lineage reports", "Treatment history", "Breeding summaries", "Farm activity reports"],
    roi: ["Protects valuable livestock records", "Reduces missed treatments", "Improves breeding decisions", "Saves time searching through paper records"],
    forWho: ["Stud farms", "Cattle farmers", "Mixed farms", "Game farms", "Breeders", "Agricultural managers"]
  },
  recruit: {
    slug: "recruit",
    name: "VYRON RECRUIT",
    shortName: "RECRUIT",
    eyebrow: "Recruitment • Candidates • Pipelines • Talent Pools • Hiring Control",
    accent: "#06b6d4",
    accentSoft: "rgba(6, 182, 212, 0.18)",
    gradient: "linear-gradient(135deg, #2dd4bf 0%, #06b6d4 48%, #2563eb 100%)",
    headline: "Recruitment command centre for candidate sourcing, screening, shortlists, interviews and hiring pipelines.",
    intro: "VYRON RECRUIT gives companies a workforce acquisition command centre for roles, candidates, sourcing, screening, shortlists, interviews, talent pools and hiring progress. It helps reduce recruitment agency dependency and gives companies more control over candidate relationships.",
    problems: ["Hiring pipelines are scattered across emails, LinkedIn and spreadsheets.", "Recruitment agencies are expensive and often control the candidate relationship.", "Good candidates are lost because follow-up is inconsistent.", "Managers lack visibility on stuck roles and weak pipelines."],
    features: ["Role and vacancy management", "Candidate pipeline stages", "Candidate profiles and notes", "Shortlist scoring", "Outreach and follow-up planning", "Interview tracking", "Manager feedback", "Talent pool database"],
    intelligence: ["Summarises candidate strengths", "Generates outreach messages", "Matches candidates to role needs", "Flags stalled hiring pipelines"],
    dashboard: ["Open roles", "Candidate pipeline health", "Interview status", "Hiring bottlenecks", "Talent pool strength"],
    reports: ["Role pipeline reports", "Candidate shortlist summaries", "Hiring progress dashboards", "Talent pool reports", "Recruitment cost visibility"],
    roi: ["Reduces recruitment agency dependency", "Speeds up hiring decisions", "Builds an owned candidate database", "Improves hiring control"],
    forWho: ["HR teams", "Medium businesses", "Large employers", "Specialised industries", "Operations-heavy companies", "Agriculture"]
  }
};

export const productList = Object.values(products);
