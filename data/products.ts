export type ProductSlug = 'core' | 'reach' | 'cost' | 'maint' | 'farm' | 'build' | 'recruit' | 'ai';

export type Product = {
  slug: ProductSlug;
  name: string;
  shortName: string;
  accent: string;
  glow: string;
  title: string;
  subtitle: string;
  description: string;
  stats: { value: string; label: string }[];
  painPoints: { title: string; text: string }[];
  features: { title: string; text: string }[];
  intelligence: { title: string; text: string }[];
  industries: string[];
  integrations: string[];
};

export const contact = {
  email: 'info@vyronsoft.co.za',
  phone: '072 080 4844',
};

export const products: Product[] = [
  {
    slug: 'core',
    name: 'VYRON CORE',
    shortName: 'CORE',
    accent: '#8b3dff',
    glow: 'rgba(139,61,255,.42)',
    title: 'Workforce Intelligence Command Centre',
    subtitle: 'Workforce control, clocking, rosters, HR records, compliance and payroll-readiness — without becoming a payroll system.',
    description: 'VYRON CORE gives business owners, HR teams and operations managers live control over people, shifts, attendance, leave, exceptions, disciplinary records and payroll preparation. It is built to stop operational leakages before they reach payroll, reduce manual HR admin, and give management one clean command centre for every location, branch and team.',
    stats: [
      { value: '500+', label: 'Enterprise teams' },
      { value: '98%', label: 'Attendance visibility' },
      { value: '40%', label: 'Less payroll admin' },
      { value: '100%', label: 'Exception control' },
    ],
    painPoints: [
      { title: 'Stop Operational Leakages', text: 'Prevent time theft, buddy punching, unauthorized overtime, missed clockings and hidden attendance problems before they affect payroll.' },
      { title: 'Control Every Location', text: 'See who is working, who is absent, who moved stores, who clocked late and which exceptions still need approval.' },
      { title: 'Payroll-Ready Control', text: 'VYRON CORE does not process payroll. It prepares verified, approved, export-ready payroll information with clean audit trails.' },
      { title: 'Compliance Confidence', text: 'Keep leave history, warnings, HR cases, approvals, documents and supporting notes structured and ready for review.' },
      { title: 'Empower Managers', text: 'Give managers fast approvals, alerts, visibility, staff records and workforce dashboards without spreadsheet chaos.' },
    ],
    features: [
      { title: 'Smart Clocking', text: 'Mobile, kiosk and web clocking with location rules, attendance validation, anti-abuse checks and manager visibility.' },
      { title: 'Rostering & Scheduling', text: 'Build weekly rosters by branch, store or department, track coverage and manage future staff movement instructions.' },
      { title: 'Leave & Absence', text: 'Manage leave requests, approvals, balances, sick leave, off-duty planning and absence impact in one controlled flow.' },
      { title: 'Overtime & Rules Engine', text: 'Flag overtime, late arrivals, early exits, missed clockings and payroll-impacting exceptions before export preparation.' },
      { title: 'Exception Management', text: 'Turn daily problems into controlled approvals so payroll only receives verified, manager-approved information.' },
      { title: 'HR Employee Self-Service', text: 'Employees can update details, apply for leave, view payslips or notices, and access approved company documents.' },
      { title: 'Document Management', text: 'Store contracts, IDs, certificates, medical notes, warnings, company policies and signed acknowledgements.' },
      { title: 'Analytics & Reporting', text: 'Give owners and managers live dashboards showing workforce risk, attendance performance, payroll blockers and trends.' },
      { title: 'Workflow Automation', text: 'Automate approvals, reminders, missing information checks and management notifications.' },
    ],
    intelligence: [
      { title: 'Anomaly Detection', text: 'Detects unusual attendance patterns, repeated lateness, buddy-punching risk, excessive overtime and suspicious exceptions.' },
      { title: 'Predictive Insights', text: 'Forecasts labour pressure, overtime exposure, absence risk and roster gaps before they damage operations.' },
      { title: 'Smart Recommendations', text: 'Suggests roster adjustments, approval priorities and risk actions to reduce cost and improve productivity.' },
      { title: 'Risk & Compliance Alerts', text: 'Warns management about unresolved exceptions, expired documents, pending cases and compliance gaps.' },
    ],
    industries: ['Retail', 'Hospitality', 'Manufacturing', 'Healthcare', 'Construction', 'Logistics', 'Agriculture', 'Security'],
    integrations: ['Sage', 'SAP', 'Oracle', 'Microsoft 365', 'Workday', 'Xero', 'Payfast', 'Banks & EFT'],
  },
  {
    slug: 'reach', name: 'VYRON REACH', shortName: 'REACH', accent: '#a855f7', glow: 'rgba(168,85,247,.42)',
    title: 'Marketing Growth Command Centre', subtitle: 'Campaign planning, lead generation, ad performance, content scheduling and AI marketing intelligence.',
    description: 'VYRON REACH helps companies plan, launch, monitor and improve marketing activity from one command centre. It is designed for businesses that want more leads, clearer marketing spend visibility and smarter campaign decisions without relying on disconnected spreadsheets, agencies and guesswork.',
    stats: [{value:'360°',label:'Campaign view'},{value:'24/7',label:'Lead visibility'},{value:'AI',label:'Strategy insights'},{value:'ROI',label:'Spend tracking'}],
    painPoints: [
      {title:'Stop Blind Ad Spend', text:'Track campaign spend, lead results, conversion rates and weak channels before budget is wasted.'},
      {title:'Centralise Campaigns', text:'Manage Google, Meta, content, lead pipelines and follow-ups from one organised marketing cockpit.'},
      {title:'Turn Leads Into Action', text:'Keep sales and marketing aligned with lead status, ownership, follow-ups and pipeline visibility.'},
      {title:'Know What Works', text:'Measure which campaigns generate attention, leads and real opportunities instead of vanity metrics.'},
    ],
    features: [
      {title:'Campaign Management', text:'Plan campaigns, audiences, objectives, budgets, timelines and launch readiness in one place.'},
      {title:'Lead Generation & Outreach', text:'Capture prospects, manage follow-ups, track pipeline status and see which campaigns create real opportunities.'},
      {title:'Content Planning', text:'Organise content calendars, captions, creative ideas, post schedules and campaign messaging.'},
      {title:'Ad Performance', text:'Monitor spend, clicks, conversions, cost per lead and channel performance with clear visibility.'},
      {title:'AI Strategy', text:'Generate campaign ideas, budget suggestions, audience angles and improvement actions.'},
      {title:'Business Growth Visibility', text:'Show owners exactly where marketing is working and where money is leaking.'},
    ],
    intelligence: [
      {title:'AI Budget Guidance', text:'Suggests where to increase, reduce or pause spend based on campaign performance.'},
      {title:'Campaign Diagnostics', text:'Highlights weak messaging, poor conversion points and underperforming channels.'},
      {title:'Lead Quality Insights', text:'Shows which sources bring stronger prospects and which bring noise.'},
    ],
    industries:['Professional Services','Property','Automotive','Healthcare','Retail','Construction','Hospitality','Education'], integrations:['Google Ads','Meta','LinkedIn','WhatsApp','Email','CRM','Analytics','Forms']
  },
  {
    slug: 'cost', name: 'VYRON COST', shortName: 'COST', accent: '#22c55e', glow: 'rgba(34,197,94,.36)',
    title: 'Cost Intelligence & Margin Control', subtitle: 'Invoices, supplier costs, food costing, VAT-aware reporting, leakage detection and operational finance visibility.',
    description: 'VYRON COST gives businesses the power to see where money is leaking through supplier pricing, invoice mistakes, margin pressure, category spend and operational waste. It turns cost control into a live management system instead of a month-end guessing exercise.',
    stats:[{value:'100%',label:'Cost visibility'},{value:'VAT',label:'Aware checks'},{value:'Live',label:'Supplier tracking'},{value:'ROI',label:'Leakage reduction'}],
    painPoints:[
      {title:'Find Hidden Cost Leaks', text:'Identify supplier increases, category overspend, invoice errors and margin pressure before they become permanent losses.'},
      {title:'Control Supplier Spend', text:'Compare suppliers, stores, invoices and product categories with clear management visibility.'},
      {title:'Protect Margins', text:'Track food cost, packaging, cleaning, distribution and other operating costs against sales and budgets.'},
      {title:'Audit-Ready Cost Records', text:'Keep invoice calculations, VAT totals and reporting structured for review and management decisions.'},
    ],
    features:[
      {title:'Invoice Intelligence', text:'Capture supplier invoice data, category totals, VAT checks and store-level spend breakdowns.'},
      {title:'Supplier Cost Tracking', text:'Monitor price changes, recurring purchases, supplier dependency and cost movement.'},
      {title:'Food Cost & Margin Control', text:'Track ingredient, food, packaging and distribution costs to protect profitability.'},
      {title:'VAT-Aware Reporting', text:'Separate VAT-inclusive, VAT-exclusive, zero-rated and standard-rated costs for cleaner reporting.'},
      {title:'Cost Leakage Detection', text:'Flag unusual increases, suspicious totals, duplicate charges and category spikes.'},
      {title:'Management Dashboards', text:'Give owners clear visibility of where money is going by supplier, store, product and month.'},
    ],
    intelligence:[
      {title:'Price Spike Alerts', text:'Detects unusual supplier price movements and category increases.'},
      {title:'Margin Pressure Insights', text:'Highlights products or stores where cost increases are eating profit.'},
      {title:'Invoice Error Detection', text:'Flags mismatched totals, VAT inconsistencies and suspicious charge patterns.'},
    ],
    industries:['Restaurants','Retail','Hospitality','Manufacturing','Food Production','Franchise Groups','Wholesale','Catering'], integrations:['Xero','Sage','Excel','Supplier PDFs','POS','Accounting exports','Bank files','Email']
  },
  {
    slug: 'maint', name: 'VYRON MAINT', shortName: 'MAINT', accent: '#f97316', glow: 'rgba(249,115,22,.38)',
    title: 'Maintenance Operations Command Centre', subtitle: 'Tickets, properties, units, contractors, before/after photos, SLA tracking and maintenance risk intelligence.',
    description: 'VYRON MAINT gives property managers, landlords, facilities teams and operations businesses full control over maintenance requests, technician accountability and property risk. It is built to stop lost tickets, repeat issues, SLA failures and uncontrolled contractor costs.',
    stats:[{value:'Live',label:'Ticket control'},{value:'SLA',label:'Risk tracking'},{value:'360°',label:'Property history'},{value:'Proof',label:'Photo evidence'}],
    painPoints:[
      {title:'Stop Lost Maintenance Requests', text:'Every issue becomes a tracked ticket with priority, status, owner, technician and history.'},
      {title:'Hold Contractors Accountable', text:'Track assignments, response times, photos, completion notes and repeat issue patterns.'},
      {title:'Protect Properties', text:'See unit histories, recurring defects, high-risk areas and maintenance performance over time.'},
      {title:'Prevent SLA Failures', text:'Use dashboards and alerts to see which tickets are overdue, urgent or at risk.'},
    ],
    features:[
      {title:'Ticket Management', text:'Create, assign, prioritise, track and close maintenance tickets with complete visibility.'},
      {title:'Property & Unit Records', text:'Manage properties, units, locations, asset details and maintenance histories.'},
      {title:'Technician Assignment', text:'Assign internal teams or contractors and track progress from request to completion.'},
      {title:'Before/After Photos', text:'Capture visual proof of defects, work progress and completed repairs.'},
      {title:'SLA Tracking', text:'Monitor response targets, overdue work, high-risk tickets and service performance.'},
      {title:'Repeat Issue Detection', text:'Identify recurring problems by property, unit, asset, contractor or category.'},
    ],
    intelligence:[
      {title:'Risk Scoring', text:'Highlights properties, units or tickets with elevated maintenance risk.'},
      {title:'Repeat Fault Intelligence', text:'Finds patterns in recurring issues so root causes can be fixed.'},
      {title:'Contractor Performance', text:'Shows completion speed, quality notes, repeat jobs and SLA reliability.'},
    ],
    industries:['Property Management','Facilities','Student Housing','Retail Sites','Construction','Body Corporates','Hotels','Industrial Parks'], integrations:['WhatsApp','Email','Xero','PayProp','Google Maps','Photo storage','PDF reports','Contractor portals']
  },
  {
    slug:'farm', name:'VYRON FARM', shortName:'FARM', accent:'#52d32f', glow:'rgba(82,211,47,.35)',
    title:'Farm & Livestock Management Command Centre', subtitle:'Livestock records, breeding, health, stock, tasks and agricultural operational visibility.',
    description:'VYRON FARM helps farmers run livestock and farm operations with structured records, searchable animals, lineage, breeding, health treatments, stock and task management. It turns farm knowledge into a controlled digital operating system that can scale from one herd to multiple farm divisions.',
    stats:[{value:'Lineage',label:'Animal history'},{value:'Health',label:'Treatment records'},{value:'Tasks',label:'Farm control'},{value:'Stock',label:'Inventory visibility'}],
    painPoints:[
      {title:'Know Every Animal', text:'Search animals by tag number and see parentage, birth year, breed, health, breeding and production history.'},
      {title:'Protect Breeding Value', text:'Track lineage, father, mother, calf records and stud development decisions.'},
      {title:'Reduce Paper Chaos', text:'Move health, treatment, stock, task and herd records into one organised system.'},
      {title:'Make Better Farm Decisions', text:'Give owners visibility of animal performance, stock needs, tasks and operational risks.'},
    ],
    features:[
      {title:'Livestock Catalogue', text:'Searchable animal records with tag numbers, lineage, birth year, breed, notes and history.'},
      {title:'Breeding Management', text:'Track fathers, mothers, calves, breeding outcomes and future stud planning.'},
      {title:'Health Records', text:'Capture treatments, vaccinations, illnesses, vet notes and medicine history.'},
      {title:'Stock & Inventory', text:'Track feed, medicine, supplies, equipment and stock movement.'},
      {title:'Farm Tasks', text:'Assign farm tasks, reminders, inspections and recurring operational duties.'},
      {title:'Reporting', text:'View herd growth, treatment trends, breeding outcomes and stock visibility.'},
    ],
    intelligence:[
      {title:'Breeding Insights', text:'Highlights lineage, performance and breeding patterns.'},
      {title:'Health Alerts', text:'Flags treatment reminders, overdue checks and animal risk notes.'},
      {title:'Operational Planning', text:'Suggests tasks, stock checks and farm follow-ups.'},
    ],
    industries:['Cattle','Sheep','Goats','Game Farms','Crop Farms','Stud Breeders','Mixed Farms','Agricultural Co-ops'], integrations:['Mobile app','Offline records','Vet reports','Excel','QR tags','Photo records','Stock exports','Task calendars']
  },
  {
    slug:'build', name:'VYRON BUILD', shortName:'BUILD', accent:'#ff5a1f', glow:'rgba(255,90,31,.36)',
    title:'Construction Project Command Centre', subtitle:'Projects, units, contractors, progress, snag lists, inspections, documents and site visibility.',
    description:'VYRON BUILD gives builders, developers and project managers control over construction progress, unit-level work, contractor activity and site documentation. It is designed to reduce delays, improve accountability and give management a clear view of what is happening across every site.',
    stats:[{value:'Sites',label:'Live visibility'},{value:'Units',label:'Progress tracking'},{value:'Snags',label:'Issue control'},{value:'Docs',label:'Site records'}],
    painPoints:[
      {title:'Stop Site Blind Spots', text:'See project progress, contractor status, unit readiness and inspection issues in one command centre.'},
      {title:'Control Contractors', text:'Track work allocations, progress notes, completion evidence and outstanding responsibilities.'},
      {title:'Reduce Delays', text:'Identify blocked work, incomplete tasks, inspection failures and slow-moving units.'},
      {title:'Protect Project Records', text:'Keep drawings, documents, photos, snag lists and inspection notes organised by project and unit.'},
    ],
    features:[
      {title:'Project Management', text:'Manage developments, sites, phases, units, milestones and project timelines.'},
      {title:'Unit Progress Tracking', text:'Track each house, flat, section or build stage from foundation to handover.'},
      {title:'Contractor Management', text:'Assign work, track responsibilities and monitor contractor completion.'},
      {title:'Snag Lists & Inspections', text:'Capture issues, photos, inspection results, fixes and handover readiness.'},
      {title:'Document Control', text:'Store drawings, approvals, certificates, supplier documents and site records.'},
      {title:'Executive Dashboards', text:'Give owners live visibility of project performance, delays and risk.'},
    ],
    intelligence:[
      {title:'Delay Risk Alerts', text:'Flags slow-moving units, overdue tasks and contractor bottlenecks.'},
      {title:'Progress Intelligence', text:'Shows which phases are on track and which need management attention.'},
      {title:'Quality Pattern Detection', text:'Highlights repeated snags, inspection failures and quality issues.'},
    ],
    industries:['Residential Development','Commercial Builds','Renovations','Contractors','Property Developers','Facilities Projects','Civil Work','Estate Builds'], integrations:['Photos','PDF reports','Google Maps','Contractor portals','Document storage','Excel exports','Email','Project reports']
  },
  {
    slug:'recruit', name:'VYRON RECRUIT', shortName:'RECRUIT', accent:'#b268ff', glow:'rgba(178,104,255,.38)',
    title:'Recruitment Acquisition Command Centre', subtitle:'Job posting, sourcing, applicant tracking, hiring workflows, candidate pipelines and talent intelligence.',
    description:'VYRON RECRUIT is built for companies that want to reduce recruitment agency dependency, control hiring pipelines and find better candidates faster. It gives hiring teams a command centre for jobs, applicants, screening, interviews, candidate communication and workforce acquisition insights.',
    stats:[{value:'ATS',label:'Pipeline control'},{value:'AI',label:'Candidate matching'},{value:'Cost',label:'Agency reduction'},{value:'Speed',label:'Hiring visibility'}],
    painPoints:[
      {title:'Reduce Agency Costs', text:'Build internal hiring control and candidate pipelines instead of paying high recurring recruitment fees.'},
      {title:'See Every Candidate', text:'Track applications, screening results, interviews, notes and hiring status in one system.'},
      {title:'Hire Faster', text:'Automate shortlisting, follow-ups, interview flows and candidate communication.'},
      {title:'Improve Hiring Quality', text:'Use structured criteria, scoring, notes and AI insights to compare candidates fairly.'},
    ],
    features:[
      {title:'Job Posting & Sourcing', text:'Create roles, publish job details, manage channels and capture applicants.'},
      {title:'Applicant Tracking', text:'Track every candidate from application to interview, offer or rejection.'},
      {title:'Hiring Workflows', text:'Build stages for screening, interviews, assessments, decisions and approvals.'},
      {title:'Candidate Pipelines', text:'Keep high-quality candidates warm for future opportunities.'},
      {title:'Recruitment Analytics', text:'Measure time-to-hire, source quality, pipeline health and hiring bottlenecks.'},
      {title:'Team Collaboration', text:'Share notes, ratings, interview feedback and decision history.'},
    ],
    intelligence:[
      {title:'Candidate Matching', text:'Scores candidates against job requirements, experience and fit indicators.'},
      {title:'Pipeline Risk Alerts', text:'Flags roles with weak pipelines, slow screening or delayed decisions.'},
      {title:'Source Quality Insights', text:'Shows where the strongest candidates come from.'},
    ],
    industries:['Corporate','Agriculture','Retail','Manufacturing','Healthcare','Construction','Hospitality','Professional Services'], integrations:['LinkedIn','Email','Job boards','Calendars','CV parser','WhatsApp','HR exports','Assessment tools']
  },
  {
    slug:'ai', name:'VYRON AI', shortName:'AI', accent:'#0ea5e9', glow:'rgba(14,165,233,.38)',
    title:'AI Intelligence Layer Across VYRON', subtitle:'Insights, predictions, recommendations, anomaly detection and automation across every VYRON platform.',
    description:'VYRON AI is the intelligence layer that makes the VYRON ecosystem smarter. It helps managers see risks earlier, understand patterns faster, automate repetitive decisions and turn operational data into recommended actions across workforce, marketing, maintenance, cost, farm, build and recruitment operations.',
    stats:[{value:'AI',label:'Insights'},{value:'Live',label:'Recommendations'},{value:'Risk',label:'Detection'},{value:'Auto',label:'Reporting'}],
    painPoints:[
      {title:'Turn Data Into Action', text:'Managers do not need more dashboards. They need clear answers, alerts and recommended next steps.'},
      {title:'See Problems Earlier', text:'Detect risk patterns before they become cost, compliance, maintenance or operational failures.'},
      {title:'Automate Repetitive Thinking', text:'Reduce manual checking, follow-ups, comparisons and reporting work.'},
      {title:'Create a Smarter Ecosystem', text:'Let every VYRON product become more valuable as data flows through the suite.'},
    ],
    features:[
      {title:'AI Insights', text:'Surface important patterns, risks, opportunities and decision points automatically.'},
      {title:'Smart Recommendations', text:'Suggest actions for managers based on operational data and business rules.'},
      {title:'Automated Reporting', text:'Create summaries, risk notes, executive updates and management reports.'},
      {title:'Anomaly Detection', text:'Detect unusual activity in attendance, spend, maintenance, campaigns, projects and hiring.'},
      {title:'Predictive Monitoring', text:'Forecast risks, pressure points and likely bottlenecks.'},
      {title:'Cross-Product Intelligence', text:'Connect insights across VYRON products for a broader operational picture.'},
    ],
    intelligence:[
      {title:'Pattern Recognition', text:'Finds repeated behaviours, cost leaks and operational risks.'},
      {title:'Decision Support', text:'Turns data into suggested actions for managers.'},
      {title:'Executive Summaries', text:'Creates simple leadership-level explanations from complex operational data.'},
    ],
    industries:['All VYRON products','Enterprise Operations','Finance','HR','Property','Agriculture','Construction','Marketing'], integrations:['VYRON CORE','VYRON REACH','VYRON COST','VYRON MAINT','VYRON FARM','VYRON BUILD','VYRON RECRUIT','External APIs']
  }
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
