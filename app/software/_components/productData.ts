export type ProductSlug = "core" | "reach" | "maint" | "cost" | "build" | "farm" | "recruit";

export type Product = {
  slug: ProductSlug;
  name: string;
  short: string;
  tagline: string;
  description: string;
  color: string;
  color2: string;
  glow: string;
  icon: string;
  problems: string[];
  features: string[];
  intelligence: string[];
  dashboard: string[];
  roi: string[];
  reports: string[];
  audience: string[];
};

export const products: Product[] = [
  {
    slug: "core",
    name: "VYRON CORE",
    short: "Workforce control, HR, clocking, rostering, attendance exceptions and payroll-readiness.",
    tagline: "Workforce control without payroll chaos.",
    description: "VYRON CORE gives businesses one command centre to control staff, rosters, clocking, leave, HR cases, exceptions and payroll-readiness. It is not a payroll system. It prepares clean, approved workforce data before payroll is processed, so managers stop paying for unresolved attendance problems, missing approvals, unauthorised overtime and manual HR gaps.",
    color: "#2f80ff",
    color2: "#38d5ff",
    glow: "rgba(47,128,255,0.34)",
    icon: "◈",
    problems: ["Missing clock-ins and late approvals delay payroll preparation.", "Unauthorised overtime quietly increases wage cost.", "Rosters, leave, HR warnings and exceptions are often separated across spreadsheets and messages.", "Payroll teams receive dirty data and are forced to fix operational issues too late."],
    features: ["Employee profiles and workforce records", "Clocking and attendance exception control", "Roster and shift planning", "Leave and availability workflows", "HR case and warning history", "Payroll-readiness blockers and approval checks", "Multi-site staff visibility", "Management action tracking"],
    intelligence: ["Flags repeated late arrivals and missing clocking patterns.", "Highlights payroll risk before export.", "Suggests roster and staff movement improvements.", "Identifies unresolved manager actions that block payroll-readiness."],
    dashboard: ["Open exceptions", "Payroll-readiness status", "Branch and site attendance risk", "Leave and HR case pressure", "Overtime and short-hours visibility"],
    roi: ["Reduces payroll leakage", "Saves weekly admin time", "Stops unresolved issues before payroll", "Improves workforce accountability"],
    reports: ["Attendance exception reports", "Leave and HR summaries", "Payroll-readiness reports", "Branch performance dashboards"],
    audience: ["Retail groups", "Restaurants", "Warehouses", "Security teams", "Field staff businesses", "Multi-branch operations"]
  },
  {
    slug: "reach",
    name: "VYRON REACH",
    short: "AI marketing command centre for campaigns, content, leads, outreach and growth.",
    tagline: "Marketing activity turned into a growth machine.",
    description: "VYRON REACH helps businesses plan, generate, manage and measure marketing activity from one intelligent workspace. It connects campaign planning, content, lead pipelines, outreach, performance thinking and sales follow-up so businesses stop guessing and start running marketing like a proper operating system.",
    color: "#a855f7",
    color2: "#ff4fd8",
    glow: "rgba(168,85,247,0.35)",
    icon: "✦",
    problems: ["Campaign ideas are scattered and inconsistent.", "Ad spend decisions are often guessed instead of planned.", "Leads and follow-ups are lost between sales and marketing.", "Small teams need strong marketing output without hiring a full agency."],
    features: ["Campaign planning", "AI content and ad copy support", "Lead pipeline tracking", "Outreach planning", "Content calendar", "Marketing task control", "Performance overview", "Sales growth visibility"],
    intelligence: ["Suggests campaign angles and channels.", "Creates ad copy and outreach messages.", "Flags weak follow-up and stale leads.", "Highlights where marketing effort should move next."],
    dashboard: ["Campaign status", "Lead movement", "Ad planning visibility", "Content pipeline", "Growth opportunities"],
    roi: ["Improves campaign consistency", "Reduces wasted marketing effort", "Creates repeatable sales activity", "Helps owners see what drives growth"],
    reports: ["Campaign reports", "Lead pipeline summaries", "Content activity views", "Performance recommendations"],
    audience: ["SMEs", "Agencies", "Franchise groups", "Dealerships", "Service businesses", "Sales teams"]
  },
  {
    slug: "maint",
    name: "VYRON MAINT",
    short: "Maintenance tickets, properties, units, technicians, SLA tracking and contractor accountability.",
    tagline: "Maintenance control from first issue to final proof.",
    description: "VYRON MAINT gives property and operations teams a proper command centre for maintenance. It controls tickets, units, technicians, contractors, SLA risk, before-and-after photos, repeat issues and maintenance history so nothing gets lost in WhatsApp, email or spreadsheets.",
    color: "#ff8a1f",
    color2: "#ffca3a",
    glow: "rgba(255,138,31,0.34)",
    icon: "◆",
    problems: ["Maintenance requests disappear in messages and calls.", "Owners cannot see what is overdue or repeated.", "Contractor work is hard to prove without photos and history.", "Repeat faults keep costing money because patterns are missed."],
    features: ["Property and unit ticket management", "Technician assignment", "SLA status and overdue control", "Before and after photos", "Repeat issue detection", "Maintenance history", "Contractor notes", "Risk dashboard"],
    intelligence: ["Detects repeat issues across properties or units.", "Flags SLA risk before complaints escalate.", "Suggests issue priority and category.", "Highlights high-cost properties and weak contractor performance."],
    dashboard: ["Open and overdue tickets", "SLA risk", "Repeat issues", "Contractor performance", "Property maintenance pressure"],
    roi: ["Reduces lost maintenance communication", "Improves contractor accountability", "Protects asset value", "Cuts repeat-cost leakage"],
    reports: ["Ticket status reports", "Property maintenance history", "SLA reports", "Contractor accountability summaries"],
    audience: ["Property managers", "Body corporates", "Rental portfolios", "Facilities teams", "Hotels", "Construction aftercare teams"]
  },
  {
    slug: "cost",
    name: "VYRON COST",
    short: "Invoice intelligence, cost leakage detection, category tracking and margin protection.",
    tagline: "Expose hidden leakage before it eats profit.",
    description: "VYRON COST helps companies control supplier invoices, food cost, packaging, cleaning, distribution, VAT checks, category movements and margin pressure. It turns invoice checking into a management intelligence system that finds cost leakage and shows owners where profit is being lost.",
    color: "#22c55e",
    color2: "#2dd4bf",
    glow: "rgba(34,197,94,0.32)",
    icon: "▣",
    problems: ["Supplier invoice errors quietly damage margin.", "Cost categories are hard to compare between stores or months.", "Manual invoice checking is slow and inconsistent.", "Management sees cost problems too late."],
    features: ["Supplier invoice capture", "VAT and total checking", "Category tracking", "Food cost and packaging visibility", "Distribution and cleaning cost analysis", "Store and branch summaries", "Cost leakage detection", "Executive reporting"],
    intelligence: ["Flags unusual invoice movements.", "Detects margin pressure and supplier increases.", "Highlights category shifts that need investigation.", "Creates executive summaries from detailed invoice data."],
    dashboard: ["Monthly cost movement", "Supplier pressure", "Category leakage", "Store comparisons", "Margin protection signals"],
    roi: ["Recovers hidden margin", "Reduces manual checking time", "Improves supplier control", "Protects food and operational cost percentages"],
    reports: ["Supplier reports", "VAT and invoice checks", "Category summaries", "Store cost dashboards"],
    audience: ["Restaurants", "Hospitality groups", "Retail groups", "Food producers", "Franchises", "Multi-branch companies"]
  },
  {
    slug: "build",
    name: "VYRON BUILD",
    short: "Construction projects, subcontractors, progress, site issues, costing visibility and handover readiness.",
    tagline: "Construction visibility from site progress to handover.",
    description: "VYRON BUILD gives construction teams, developers and project managers one command centre for projects, units, contractors, tasks, delays, photos, defects, progress evidence and handover readiness. It replaces scattered WhatsApp updates and disconnected site notes with controlled project visibility.",
    color: "#f97316",
    color2: "#fb7185",
    glow: "rgba(249,115,22,0.32)",
    icon: "▲",
    problems: ["Site progress is scattered across messages and photos.", "Contractor delays are noticed too late.", "Defects and snag lists are not controlled early enough.", "Developers lack a simple view of what is ready and what is stuck."],
    features: ["Project and unit tracking", "Task and phase management", "Subcontractor visibility", "Progress photos", "Site issue control", "Delay tracking", "Snag lists", "Handover readiness dashboard"],
    intelligence: ["Flags delayed phases and stuck units.", "Summarises progress from site updates.", "Highlights repeat contractor issues.", "Shows handover risk before deadlines are missed."],
    dashboard: ["Project progress", "Delayed tasks", "Contractor accountability", "Defect pressure", "Handover readiness"],
    roi: ["Reduces project confusion", "Improves contractor control", "Cuts late handover surprises", "Protects project margin and timeline"],
    reports: ["Progress reports", "Delay summaries", "Snag reports", "Handover readiness packs"],
    audience: ["Builders", "Developers", "Project managers", "Estate developments", "Renovation teams", "Construction companies"]
  },
  {
    slug: "farm",
    name: "VYRON FARM",
    short: "Farm, livestock, lineage, breeding, treatments, weights, camps and herd intelligence.",
    tagline: "Farm records turned into practical herd intelligence.",
    description: "VYRON FARM gives farmers a practical command centre for animal records, lineage, breeding, treatments, weights, camps, production records and herd performance. It starts with serious cattle and stud management and expands into broader farm operational visibility.",
    color: "#65d93b",
    color2: "#16a34a",
    glow: "rgba(101,217,59,0.32)",
    icon: "◇",
    problems: ["Animal records are kept in books, spreadsheets or memory.", "Lineage and breeding history becomes hard to search as the herd grows.", "Treatments and vaccinations can be missed.", "Farm owners need better visibility without complicated corporate software."],
    features: ["Animal catalogue by tag number", "Father, mother and lineage tracking", "Breeding and calf records", "Treatment and vaccination history", "Weight and production records", "Camp and movement notes", "Farm tasks and reminders", "Herd performance dashboards"],
    intelligence: ["Suggests animals to monitor.", "Highlights missing treatment records.", "Summarises lineage and performance notes.", "Supports stronger breeding decisions."],
    dashboard: ["Herd completeness", "Breeding history", "Treatment status", "Animal performance", "Farm task visibility"],
    roi: ["Protects valuable livestock records", "Reduces missed treatments", "Improves breeding decisions", "Saves time searching through paper records"],
    reports: ["Animal profile reports", "Lineage summaries", "Treatment history", "Herd performance reports"],
    audience: ["Stud farms", "Cattle farmers", "Mixed farms", "Game farms", "Breeders", "Agricultural managers"]
  },
  {
    slug: "recruit",
    name: "VYRON RECRUIT",
    short: "Recruitment pipelines, candidate sourcing, screening, interviews, talent pools and hiring control.",
    tagline: "Hiring pipelines without recruitment chaos.",
    description: "VYRON RECRUIT gives companies a workforce acquisition command centre for roles, candidates, sourcing, screening, shortlists, interviews, talent pools and hiring progress. It helps reduce recruitment agency dependency and gives companies more control over candidate relationships.",
    color: "#06b6d4",
    color2: "#8b5cf6",
    glow: "rgba(6,182,212,0.32)",
    icon: "◎",
    problems: ["Hiring pipelines are scattered across emails, LinkedIn and spreadsheets.", "Recruitment agencies are expensive and often control the candidate relationship.", "Good candidates are lost because follow-up is inconsistent.", "Managers lack visibility on stuck roles and weak pipelines."],
    features: ["Role and vacancy management", "Candidate pipeline stages", "Candidate profiles and notes", "Shortlist scoring", "Outreach and follow-up planning", "Interview tracking", "Manager feedback", "Talent pool database"],
    intelligence: ["Summarises candidate strengths and risks.", "Generates outreach and follow-up messages.", "Matches candidates to role requirements.", "Flags stalled roles and missing feedback."],
    dashboard: ["Open roles", "Candidate pipeline health", "Interview status", "Hiring bottlenecks", "Talent pool strength"],
    roi: ["Reduces recruitment agency dependency", "Speeds up hiring decisions", "Builds an owned candidate database", "Improves manager hiring visibility"],
    reports: ["Role pipeline reports", "Candidate shortlist summaries", "Hiring progress dashboards", "Talent pool reports"],
    audience: ["HR teams", "Medium businesses", "Large employers", "Specialised industries", "Agriculture", "Operations-heavy companies"]
  }
];

export const productMap = Object.fromEntries(products.map((product) => [product.slug, product])) as Record<ProductSlug, Product>;
