export type ProductSlug = "core" | "reach" | "maint" | "cost" | "build" | "farm" | "recruit";

export type ProductContent = {
  slug: ProductSlug;
  name: string;
  shortName: string;
  kicker: string;
  accentClass: string;
  headline: string;
  intro: string;
  problemsTitle: string;
  problems: string[];
  featuresTitle: string;
  features: string[];
  intelligenceTitle: string;
  intelligence: string[];
  dashboardTitle: string;
  dashboard: string[];
  roiTitle: string;
  roi: string[];
  reportingTitle: string;
  reporting: string[];
  whoTitle: string;
  who: string[];
};

export const products: Record<ProductSlug, ProductContent> = {
  core: {
    slug: "core",
    name: "VYRON CORE",
    shortName: "CORE",
    kicker: "Workforce Control • HR Operations • Payroll-Readiness",
    accentClass: "product-core",
    headline: "Control staff, shifts, clocking, HR exceptions and payroll-readiness before payroll mistakes become expensive.",
    intro: "VYRON CORE is the workforce control layer that sits before payroll. It is not a payroll system. It gives managers one command centre for employee records, clocking, rosters, attendance exceptions, leave, HR cases, compliance guidance and payroll-readiness. The goal is simple: only clean, approved, resolved workforce data should reach payroll.",
    problemsTitle: "The problems VYRON CORE solves",
    problems: [
      "Missing clock-ins, late arrivals, early exits and unapproved overtime are often found too late.",
      "Managers waste hours every week chasing staff, checking WhatsApp messages and fixing spreadsheets.",
      "Payroll teams receive messy information and are forced to process pay with unresolved exceptions.",
      "HR warnings, leave records, disciplinary actions and staff movement between branches are scattered.",
      "Owners cannot see workforce risk across multiple stores, sites or departments in real time."
    ],
    featuresTitle: "What the software does",
    features: [
      "Employee profile and workforce record management.",
      "Clocking control with attendance exceptions and approval workflows.",
      "Roster planning by store, department, site and employee.",
      "Leave and availability tracking with manager approvals.",
      "HR case, warning and disciplinary record visibility.",
      "Payroll-readiness dashboard that blocks export until issues are resolved.",
      "Multi-location workforce visibility for owners and senior managers.",
      "Exception history for late arrivals, missed clock-outs, overtime and manual changes."
    ],
    intelligenceTitle: "AI and intelligence features",
    intelligence: [
      "Flags unusual attendance patterns before they become payroll leakage.",
      "Highlights repeat late arrivals, unresolved exceptions and high-risk employees.",
      "Suggests roster improvements based on historical patterns and location pressure.",
      "Supports HR decision-making with clearer compliance and case context."
    ],
    dashboardTitle: "Management dashboard value",
    dashboard: [
      "See open exceptions, unresolved payroll blockers and risk areas instantly.",
      "Track which managers are approving or delaying workforce actions.",
      "View staff pressure by location, shift, department and exception type.",
      "Give leadership a live command centre instead of waiting for month-end reports."
    ],
    roiTitle: "Operational savings and ROI",
    roi: [
      "Reduces payroll leakage from unauthorised overtime and unresolved attendance issues.",
      "Saves admin time for managers, HR teams and payroll processors.",
      "Prevents costly payroll mistakes by forcing clean data before export.",
      "Improves accountability across branches and departments."
    ],
    reportingTitle: "Reporting and control benefits",
    reporting: [
      "Payroll-readiness reports.",
      "Exception reports by store, employee and period.",
      "Leave, HR and disciplinary record summaries.",
      "Management control reports for workforce risk and operational performance."
    ],
    whoTitle: "Who VYRON CORE is for",
    who: ["Retail groups", "Restaurants", "Warehouses", "Security companies", "Multi-branch businesses", "Field teams", "HR departments", "Operations managers"]
  },
  reach: {
    slug: "reach",
    name: "VYRON REACH",
    shortName: "REACH",
    kicker: "AI Marketing • Campaigns • Leads • Growth",
    accentClass: "product-reach",
    headline: "Turn marketing from random activity into a controlled, measurable growth command centre.",
    intro: "VYRON REACH helps companies plan campaigns, generate content, organise outreach, track leads, manage sales pipelines and understand marketing performance from one intelligent workspace. It is built for businesses that want consistent marketing execution without scattered spreadsheets, disconnected ad ideas and missed follow-ups.",
    problemsTitle: "The problems VYRON REACH solves",
    problems: [
      "Businesses post inconsistently and lose momentum because nobody controls the full marketing workflow.",
      "Ad spend is often guessed instead of planned around goals, channels and expected return.",
      "Leads, campaigns, content ideas and sales follow-ups live in different places.",
      "Owners cannot clearly see what marketing is running, what is working and what needs attention.",
      "Small teams need agency-level output without paying for every small marketing task."
    ],
    featuresTitle: "What the software does",
    features: [
      "Campaign planning for Google, Facebook, email, social media and outreach.",
      "AI-assisted ad copy, social posts, campaign angles and sales messages.",
      "Lead pipeline tracking from first contact to opportunity.",
      "Content calendar and campaign execution board.",
      "Audience, offer and channel planning for different business types.",
      "Marketing task management and follow-up visibility.",
      "Brand message library for consistent communication.",
      "Management view of campaign progress and growth activity."
    ],
    intelligenceTitle: "AI and intelligence features",
    intelligence: [
      "Suggests campaign angles based on the business, target market and offer.",
      "Generates ads, posts, outreach messages and follow-up content.",
      "Highlights weak campaigns and missing sales follow-ups.",
      "Recommends focus areas for marketing effort based on business goals."
    ],
    dashboardTitle: "Management dashboard value",
    dashboard: [
      "See active campaigns, lead movement and follow-up gaps.",
      "Track content output and marketing consistency.",
      "Understand which channels deserve more attention.",
      "Give owners a growth command centre instead of random marketing updates."
    ],
    roiTitle: "Operational savings and ROI",
    roi: [
      "Reduces wasted time creating marketing from scratch.",
      "Improves lead follow-up and sales pipeline discipline.",
      "Reduces dependency on expensive outsourced work for every content task.",
      "Helps marketing become a repeatable system instead of guesswork."
    ],
    reportingTitle: "Reporting and control benefits",
    reporting: [
      "Campaign activity reports.",
      "Lead and pipeline summaries.",
      "Marketing output and follow-up reports.",
      "Executive growth visibility across campaigns and sales opportunities."
    ],
    whoTitle: "Who VYRON REACH is for",
    who: ["SMEs", "Agencies", "Dealerships", "Service businesses", "Property businesses", "Franchise groups", "Sales teams", "Marketing managers"]
  },
  maint: {
    slug: "maint",
    name: "VYRON MAINT",
    shortName: "MAINT",
    kicker: "Maintenance • Properties • Tickets • SLA Control",
    accentClass: "product-maint",
    headline: "Control maintenance tickets, technicians, evidence, repeat issues and SLA risk from one operational command centre.",
    intro: "VYRON MAINT gives property managers and operations teams a structured system for maintenance from the first reported issue to final completion evidence. It replaces scattered WhatsApp messages, lost emails and manual spreadsheets with clear tickets, accountability, history and risk visibility.",
    problemsTitle: "The problems VYRON MAINT solves",
    problems: [
      "Maintenance issues are reported in WhatsApp, calls and emails, then disappear.",
      "Managers struggle to prove what was done, when it was done and who completed it.",
      "Repeat faults keep costing money because nobody sees the pattern early enough.",
      "Contractors are difficult to compare without structured history and evidence.",
      "Owners only hear about issues when tenants complain or costs have already escalated."
    ],
    featuresTitle: "What the software does",
    features: [
      "Property, unit and asset-based maintenance ticket management.",
      "Issue categories, priorities, SLA timers and status tracking.",
      "Technician and contractor assignment.",
      "Before and after photo evidence.",
      "Maintenance history per property, unit and asset.",
      "Repeat issue detection and risk visibility.",
      "Open, overdue, completed and high-risk work dashboards.",
      "Contractor notes, cost tracking and completion records."
    ],
    intelligenceTitle: "AI and intelligence features",
    intelligence: [
      "Suggests issue category, priority and risk level.",
      "Detects repeat problems across units, buildings and assets.",
      "Flags SLA risk before jobs become complaints.",
      "Highlights contractors or properties causing repeated maintenance cost."
    ],
    dashboardTitle: "Management dashboard value",
    dashboard: [
      "See every open, overdue and high-risk ticket.",
      "Track contractor response and completion performance.",
      "View repeat issue trends before they become expensive.",
      "Give owners clear maintenance visibility across a portfolio."
    ],
    roiTitle: "Operational savings and ROI",
    roi: [
      "Reduces lost maintenance requests and repeated admin follow-ups.",
      "Improves contractor accountability and job completion proof.",
      "Protects property value through better maintenance history.",
      "Helps management act before small issues become large costs."
    ],
    reportingTitle: "Reporting and control benefits",
    reporting: [
      "Ticket status reports.",
      "SLA and overdue work reports.",
      "Property and unit maintenance history.",
      "Contractor performance and repeat issue reports."
    ],
    whoTitle: "Who VYRON MAINT is for",
    who: ["Property managers", "Body corporates", "Rental portfolios", "Facilities teams", "Hotels", "Construction aftercare teams", "Operations managers", "Contractor networks"]
  },
  cost: {
    slug: "cost",
    name: "VYRON COST",
    shortName: "COST",
    kicker: "Cost Control • Invoices • Margin Protection",
    accentClass: "product-cost",
    headline: "Find invoice errors, supplier increases and hidden cost leakage before they damage profit.",
    intro: "VYRON COST helps companies control supplier invoices, category spend, food cost, packaging, distribution, cleaning and operating expenses. It turns manual invoice checking into structured cost intelligence so owners and managers can see where profit is leaking.",
    problemsTitle: "The problems VYRON COST solves",
    problems: [
      "Invoice errors, VAT issues and category mistakes quietly reduce margin.",
      "Supplier price increases are often noticed too late.",
      "Management cannot easily compare costs by store, branch, month or category.",
      "Manual checking is slow, inconsistent and dependent on one person.",
      "Owners do not always see cost leakage until profits are already under pressure."
    ],
    featuresTitle: "What the software does",
    features: [
      "Supplier invoice analysis and category breakdowns.",
      "Food cost, packaging, cleaning and distribution visibility.",
      "VAT and invoice total check workflows.",
      "Store, branch and month-based spend summaries.",
      "Supplier comparison and price movement tracking.",
      "Margin pressure alerts and unusual spend detection.",
      "Export-ready finance and management reports.",
      "Operational cost dashboards for decision-makers."
    ],
    intelligenceTitle: "AI and intelligence features",
    intelligence: [
      "Identifies unusual invoice movements and possible overcharges.",
      "Flags category shifts that may hide margin leakage.",
      "Suggests where management should investigate supplier cost increases.",
      "Creates executive summaries from detailed invoice data."
    ],
    dashboardTitle: "Management dashboard value",
    dashboard: [
      "View spend by supplier, store, month and category.",
      "See margin pressure areas before they become serious.",
      "Compare operational cost trends across branches.",
      "Give finance and operations one shared control view."
    ],
    roiTitle: "Operational savings and ROI",
    roi: [
      "Recovers hidden margin by catching invoice and category issues.",
      "Reduces manual checking time for finance teams.",
      "Improves supplier control and pricing visibility.",
      "Helps owners protect profit in high-pressure cost environments."
    ],
    reportingTitle: "Reporting and control benefits",
    reporting: [
      "Supplier cost reports.",
      "Food, packaging, cleaning and distribution analysis.",
      "VAT and invoice accuracy checks.",
      "Executive cost leakage and margin protection summaries."
    ],
    whoTitle: "Who VYRON COST is for",
    who: ["Restaurants", "Retail groups", "Franchises", "Hospitality", "Food production", "Multi-branch businesses", "Finance teams", "Operations managers"]
  },
  build: {
    slug: "build",
    name: "VYRON BUILD",
    shortName: "BUILD",
    kicker: "Construction • Projects • Site Control • Handover",
    accentClass: "product-build",
    headline: "Track construction projects, contractors, progress, site issues and handover readiness from one build command centre.",
    intro: "VYRON BUILD is built for developers, builders and project teams that need clear visibility across construction phases, units, subcontractors, photos, defects, delays and handover readiness. It replaces scattered site messages with structured operational control.",
    problemsTitle: "The problems VYRON BUILD solves",
    problems: [
      "Progress updates are scattered across calls, WhatsApp photos and site notes.",
      "Developers struggle to see which units, tasks or phases are behind.",
      "Snag lists and defects are often discovered too late.",
      "Contractor accountability is weak without structured evidence.",
      "Handover readiness is difficult to prove when information is fragmented."
    ],
    featuresTitle: "What the software does",
    features: [
      "Project, phase, block and unit tracking.",
      "Task management for subcontractors and site teams.",
      "Progress tracking with photo evidence and notes.",
      "Site issue, defect and snag list management.",
      "Delay and risk visibility across projects.",
      "Handover readiness dashboards.",
      "Owner and developer progress reports.",
      "Mobile-friendly site update workflows."
    ],
    intelligenceTitle: "AI and intelligence features",
    intelligence: [
      "Flags delayed units, phases and risky project areas.",
      "Summarises progress from site updates and notes.",
      "Highlights repeat contractor issues.",
      "Suggests priority actions before handover deadlines are missed."
    ],
    dashboardTitle: "Management dashboard value",
    dashboard: [
      "See project progress by phase, unit and contractor.",
      "Track defects, delays and handover blockers.",
      "Compare subcontractor performance and accountability.",
      "Give developers one control view across the build."
    ],
    roiTitle: "Operational savings and ROI",
    roi: [
      "Reduces delays caused by poor communication.",
      "Improves contractor accountability with structured evidence.",
      "Prevents late handover surprises.",
      "Saves management time by centralising site visibility."
    ],
    reportingTitle: "Reporting and control benefits",
    reporting: [
      "Project progress reports.",
      "Defect and snag list reports.",
      "Contractor accountability reports.",
      "Handover readiness summaries."
    ],
    whoTitle: "Who VYRON BUILD is for",
    who: ["Developers", "Builders", "Project managers", "Estate developments", "Construction teams", "Renovation companies", "Site managers", "Subcontractor teams"]
  },
  farm: {
    slug: "farm",
    name: "VYRON FARM",
    shortName: "FARM",
    kicker: "Farm Operations • Livestock • Lineage • Herd Intelligence",
    accentClass: "product-farm",
    headline: "Manage animals, lineage, breeding, treatments, weights, camps and farm performance from one practical farm system.",
    intro: "VYRON FARM gives farmers a structured way to manage livestock records, breeding lines, health events, treatments, farm tasks and operational visibility. It starts with serious cattle and stud management and expands into broader farm control.",
    problemsTitle: "The problems VYRON FARM solves",
    problems: [
      "Animal records are often kept in books, spreadsheets or memory.",
      "Lineage and breeding history becomes hard to search as the herd grows.",
      "Treatments, vaccinations, weights and health notes can be missed.",
      "Farm owners need better visibility without complicated corporate software.",
      "Important herd performance information is often not connected to daily decisions."
    ],
    featuresTitle: "What the software does",
    features: [
      "Searchable animal catalogue by tag number.",
      "Father, mother, birth year, breed and lineage tracking.",
      "Treatment, vaccination, weight and health history.",
      "Breeding records, calf history and stud performance.",
      "Camp, herd movement and farm operational notes.",
      "Farm tasks, reminders and production records.",
      "Performance dashboards for herd and farm decisions.",
      "Mobile-friendly field usage for quick updates."
    ],
    intelligenceTitle: "AI and intelligence features",
    intelligence: [
      "Suggests animals to monitor based on health or breeding history.",
      "Highlights missing treatment, vaccination or weight records.",
      "Summarises lineage and performance notes.",
      "Supports stronger breeding and management decisions."
    ],
    dashboardTitle: "Management dashboard value",
    dashboard: [
      "See herd performance and animal record completeness.",
      "Track breeding, treatment and movement activity.",
      "View risk areas across health, camps and production.",
      "Give farmers a practical operational control centre."
    ],
    roiTitle: "Operational savings and ROI",
    roi: [
      "Protects valuable livestock and lineage records.",
      "Reduces missed treatments and admin gaps.",
      "Improves breeding decisions with better information.",
      "Saves time searching through paper records and spreadsheets."
    ],
    reportingTitle: "Reporting and control benefits",
    reporting: [
      "Animal profile reports.",
      "Lineage and breeding summaries.",
      "Treatment, health and weight history.",
      "Herd performance and farm activity reports."
    ],
    whoTitle: "Who VYRON FARM is for",
    who: ["Stud farms", "Cattle farmers", "Mixed farms", "Game farms", "Breeders", "Agricultural managers", "Farm owners", "Livestock operations"]
  },
  recruit: {
    slug: "recruit",
    name: "VYRON RECRUIT",
    shortName: "RECRUIT",
    kicker: "Recruitment • Candidate Pipelines • Hiring Control",
    accentClass: "product-recruit",
    headline: "Own your hiring pipeline, reduce recruitment cost and move candidates faster from source to appointment.",
    intro: "VYRON RECRUIT helps companies reduce recruitment agency dependency by creating a structured command centre for vacancies, candidate sourcing, screening, pipelines, interviews, follow-ups and talent pools. It gives HR and managers control over hiring progress and candidate intelligence.",
    problemsTitle: "The problems VYRON RECRUIT solves",
    problems: [
      "Recruitment agencies are expensive and often own the candidate relationship.",
      "Hiring pipelines are scattered across email, LinkedIn, spreadsheets and manager notes.",
      "Good candidates are lost because follow-up is inconsistent.",
      "Managers do not always give feedback quickly enough.",
      "Leadership lacks a clear view of which roles are stuck and why."
    ],
    featuresTitle: "What the software does",
    features: [
      "Vacancy and role management.",
      "Candidate pipeline stages and status tracking.",
      "Candidate profiles, notes, documents and communication history.",
      "Shortlist comparison and scoring workflows.",
      "Outreach message planning and follow-up tracking.",
      "Interview scheduling visibility and manager feedback.",
      "Hiring dashboards for open roles and bottlenecks.",
      "Talent pool database for future recruitment."
    ],
    intelligenceTitle: "AI and intelligence features",
    intelligence: [
      "Summarises candidate strengths, concerns and fit.",
      "Generates outreach and follow-up messages.",
      "Matches candidates to role requirements more clearly.",
      "Flags stalled roles, weak pipelines and missing feedback."
    ],
    dashboardTitle: "Management dashboard value",
    dashboard: [
      "See every vacancy, candidate stage and hiring bottleneck.",
      "Track manager feedback and interview progress.",
      "Build an owned candidate database over time.",
      "Give leadership clear hiring performance visibility."
    ],
    roiTitle: "Operational savings and ROI",
    roi: [
      "Reduces recruitment agency dependency and placement cost.",
      "Speeds up hiring decisions through better pipeline control.",
      "Prevents candidate loss from poor follow-up.",
      "Turns recruitment into an owned business asset."
    ],
    reportingTitle: "Reporting and control benefits",
    reporting: [
      "Open vacancy reports.",
      "Candidate pipeline summaries.",
      "Interview and feedback reports.",
      "Hiring cost and recruitment performance visibility."
    ],
    whoTitle: "Who VYRON RECRUIT is for",
    who: ["Medium businesses", "Large employers", "HR teams", "Operations-heavy companies", "Agriculture", "Specialised industries", "Recruitment managers", "Business owners"]
  }
};

export const productOrder: ProductSlug[] = ["core", "reach", "maint", "cost", "build", "farm", "recruit"];
