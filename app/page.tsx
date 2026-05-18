import { Bell, ChevronDown, ChevronRight, Cpu, ShieldCheck, Rocket, TrendingUp, Megaphone, Database, Wrench, Leaf, HardHat, Users, Sparkles, Building2, ShoppingCart, Truck, Briefcase, HeartPulse, GraduationCap, Factory, Lock, Clock, Cloud, Search, UserCircle, Settings, FileText, BarChart3, CircleDollarSign, Home, CheckCircle2, Phone, Mail, MapPin, Bot, AlertCircle } from 'lucide-react';

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/software' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const products = [
  { title: 'VYRON CORE', icon: ShieldCheck, color: 'blue', desc: 'Workforce control, HR, payroll readiness and compliance management.', items: ['HR & Employee Management', 'Clocking, Rostering & Leave', 'Warnings & Disciplinary Records', 'Payroll Readiness & Compliance', 'Reporting & AI Workforce Insights'] },
  { title: 'VYRON REACH', icon: Megaphone, color: 'purple', desc: 'Marketing command centre for campaigns, leads and growth.', items: ['Campaign Management', 'Lead Generation & Outreach', 'Content Planning & Scheduling', 'Pipeline Tracking', 'Business Growth Visibility'] },
  { title: 'VYRON COST', icon: Database, color: 'green', desc: 'Costing and operational finance intelligence platform.', items: ['Invoices & Supplier Costs', 'Food Costing & Margin Control', 'VAT-Aware Reporting', 'Cost Leakage Detection', 'Management Visibility'] },
  { title: 'VYRON MAINT', icon: Wrench, color: 'orange', desc: 'Maintenance management for properties, units and assets.', items: ['Maintenance Tickets & SLA', 'Technicians & Task Management', 'Before/After Photos', 'Repeat Issues & Risk Tracking', 'Management Performance'] },
  { title: 'VYRON FARM', icon: Leaf, color: 'lime', desc: 'Farm and livestock management for agricultural operations.', items: ['Livestock & Cattle Records', 'Lineage & Breeding Management', 'Health & Treatment Records', 'Stock & Inventory Management', 'Farm Tasks & Operations'] },
  { title: 'VYRON BUILD', icon: HardHat, color: 'amber', desc: 'Construction and build-phase project management.', items: ['Projects & Unit Management', 'Contractors & Site Teams', 'Progress Tracking', 'Snag Lists & Inspections', 'Documents & Site Visibility'] },
  { title: 'VYRON RECRUIT', icon: Users, color: 'violet', desc: 'Recruitment command centre for hiring and talent acquisition.', items: ['Job Posting & Sourcing', 'Applicant Tracking System', 'Hiring Workflows', 'Candidate Pipelines', 'Workforce Acquisition Insights'] },
  { title: 'VYRON AI', icon: Sparkles, color: 'cyan', desc: 'AI-powered intelligence across all VYRON platforms.', items: ['AI Insights & Predictions', 'Smart Recommendations', 'Automated Reporting', 'Anomaly Detection', 'Future-Ready Automation'] },
];

const colorMap: Record<string, string> = {
  blue: 'card-blue', purple: 'card-purple', green: 'card-green', orange: 'card-orange', lime: 'card-lime', amber: 'card-amber', violet: 'card-violet', cyan: 'card-cyan'
};

const productSlugs: Record<string,string> = {
  'VYRON CORE':'core', 'VYRON REACH':'reach', 'VYRON COST':'cost', 'VYRON MAINT':'maint',
  'VYRON FARM':'farm', 'VYRON BUILD':'build', 'VYRON RECRUIT':'recruit', 'VYRON AI':'software'
};

function Logo({ large = false }: { large?: boolean }) {
  return <a href="/" className="brand-link"><div className="logo-wrap"><div className={large ? 'logo-mark logo-large' : 'logo-mark'}><span>V</span></div><div><div className={large ? 'logo-title big' : 'logo-title'}>VYRON</div><div className="logo-sub">SOFTWARE</div></div></div></a>;
}

function Dashboard() {
  const menu = ['Command Centre', 'Clients', 'AI Strategy', 'Campaigns', 'Ad Performance', 'Revenue', 'Reports', 'Reminders', 'Settings'];
  const icons = [Home, Users, Megaphone, Megaphone, BarChart3, CircleDollarSign, FileText, Bell, Settings];
  return <div className="dash-shell">
    <aside className="dash-side"><Logo />
      <div className="dash-menu">{menu.map((m,i)=>{ const I=icons[i]; return <div key={m} className={i===0?'dash-menu-item active':'dash-menu-item'}><I size={16}/><span>{m}</span></div>})}</div>
    </aside>
    <main className="dash-main">
      <div className="dash-top"><div><h2>Command Centre</h2><p>Welcome back, VYRON Operator</p></div><div className="dash-actions"><Search size={17}/><Bell size={17}/><UserCircle size={19}/><button>May 12 – Jun 12, 2025 <ChevronDown size={13}/></button></div></div>
      <div className="stat-grid">{[['Total Revenue','R1,247,850','+ 18.6%'],['Ad Spend','R285,420','+ 12.4%'],['Leads Generated','1,846','+ 23.7%'],['Avg. Conversion','12.6%','+ 6.5%']].map(s=><div className="stat" key={s[0]}><span>{s[0]}</span><b>{s[1]}</b><small>{s[2]} vs last month</small><UserCircle className="stat-icon" size={18}/></div>)}</div>
      <div className="dash-mid"><div className="chart-card"><div className="card-head"><b>Performance Overview</b><button>Last 30 Days <ChevronDown size={11}/></button></div><div className="legend"><i className="pink"/>Revenue <i className="blue"/>Ad Spend</div><div className="chart"><svg viewBox="0 0 620 220" preserveAspectRatio="none"><defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b733ff" stopOpacity=".42"/><stop offset="1" stopColor="#b733ff" stopOpacity="0"/></linearGradient></defs><g className="grid">{[40,85,130,175].map(y=><line key={y} x1="30" x2="600" y1={y} y2={y}/>)}{[80,180,280,380,480].map(x=><line key={x} y1="30" y2="190" x1={x} x2={x}/>)}</g><path d="M35 160 L90 120 L145 121 L200 113 L255 85 L310 102 L365 62 L420 78 L475 42 L530 60 L590 28" fill="none" stroke="#bd35ff" strokeWidth="5"/><path d="M35 184 L90 162 L145 164 L200 142 L255 153 L310 128 L365 118 L420 98 L475 108 L530 82 L590 101" fill="none" stroke="#079cff" strokeWidth="5"/><path d="M35 160 L90 120 L145 121 L200 113 L255 85 L310 102 L365 62 L420 78 L475 42 L530 60 L590 28 L590 190 L35 190 Z" fill="url(#g1)"/></svg></div></div>
      <div className="campaign-card"><b>Top Performing Campaigns</b>{[['RapidTow Google Search','R426,250','+32.4%'],['Cape Law Facebook Ads','R312,420','+21.7%'],['FitLife IG Campaign','R218,650','+18.3%'],['PlumbQuick Local Ads','R163,230','+15.9%'],['Foodie Spot Retargeting','R127,300','+12.1%']].map(x=><p key={x[0]}><span>{x[0]}</span><em>{x[1]}</em><strong>{x[2]}</strong></p>)}</div></div>
      <div className="dash-low"><div><b><Bot size={15}/> AI Recommendations</b><p><span>A</span> Increase Google Search budget for RapidTow</p><small>High intent keywords are converting 23% above average.</small><button>View Strategy</button></div><div><b>Alerts</b><p><AlertCircle size={15}/>3 campaigns need attention <ChevronRight size={14}/></p><p><AlertCircle size={15}/>2 reports ready to send <ChevronRight size={14}/></p></div><div><b>SEO Maturity</b><p>RapidTow Somerset West <strong>68%</strong></p><div className="progress"><i/></div><small>Growing steadily</small></div></div>
    </main>
  </div>
}

function ProductCard({p}: any){ const Icon=p.icon; const slug=productSlugs[p.title]; return <div className={`product-card ${colorMap[p.color]}`}><div className="prod-title"><Icon size={25}/><h3>{p.title}</h3></div><p className="prod-desc">{p.desc}</p><ul>{p.items.map((it:string)=><li key={it}><CheckCircle2 size={12}/>{it}</li>)}</ul><a className="product-action" href={slug === 'software' ? '/software' : `/software/${slug}`}><button>Explore {p.title.replace('VYRON ','')} <ChevronRight size={16}/></button></a></div> }

export default function HomePage(){ return <main className="site">
  <div className="bg-arc a1"/><div className="bg-arc a2"/><div className="glow hero-glow"/><div className="glow top-glow"/>
  <header className="nav"><Logo large/><nav>{nav.map((n,i)=><a href={n.href} className={i===0?'active':''} key={n.label}>{n.label}</a>)}</nav><a href="mailto:info@vyronsoft.co.za" className="nav-button">Book a Demo</a></header>
  <section className="hero"><div className="hero-copy"><div className="pill">AI-POWERED&nbsp;&nbsp;•&nbsp;&nbsp;FUTURE-READY&nbsp;&nbsp;•&nbsp;&nbsp;RESULTS-DRIVEN</div><h1>Intelligent Software.<br/><span>Powerful Results.</span></h1><p>VYRON builds next-generation software solutions that automate, optimize and accelerate your business growth.</p><div className="hero-buttons"><a href="/software" className="nav-button">Explore Our Products <ChevronRight size={20}/></a><a href="/contact" className="nav-button ghost">Contact Us <ChevronRight size={18}/></a></div><div className="feature-row">{[[Cpu,'AI Intelligence','Smarter automation for better decisions'],[TrendingUp,'Real Results','Measurable growth across every metric'],[ShieldCheck,'Secure & Reliable','Enterprise-grade security you trust'],[Rocket,'Future Ready','Scalable solutions built for tomorrow']].map(([I,t,d]:any)=><div className="feature" key={t}><div><I size={31}/></div><b>{t}</b><p>{d}</p></div>)}</div></div><Dashboard /></section>
  <section className="suite"><h2>The Complete VYRON Product Suite</h2><p>Powerful software solutions for every area of your business operation.</p><div className="products">{products.map(p=><ProductCard key={p.title} p={p}/>)}</div></section>
  <section className="lower"><div className="info-card industries"><h3>Industries We Serve</h3><p>VYRON Software supports a wide range of industries with specialized software solutions.</p><div className="industry-grid">{[[Building2,'Construction'],[ShoppingCart,'Retail & Wholesale'],[Truck,'Logistics & Transport'],[Briefcase,'Property Management'],[Briefcase,'Professional Services'],[GraduationCap,'Education'],[Leaf,'Agriculture'],[HeartPulse,'Healthcare'],[Factory,'Manufacturing']].map(([I,t]:any)=><span key={t}><I size={15}/>{t}</span>)}</div></div><div className="info-card secure"><h3>Trusted, Secure & Compliant</h3><p>Enterprise-grade security and compliance built into every VYRON solution.</p><div className="trust-row">{[[ShieldCheck,'ISO 27001','Aligned'],[Lock,'POPIA','Compliant'],[Lock,'Encrypted','Data'],[Cloud,'Regular','Backups'],[Clock,'99.9%','Uptime']].map(([I,a,b]:any)=><span key={a}><I size={20}/><b>{a}</b><small>{b}</small></span>)}</div></div><div className="info-card cta"><h3>Ready to Transform Your Business?</h3><p>Let's build the right solution for your unique challenges.</p><div><a href="mailto:info@vyronsoft.co.za" className="nav-button">Book a Demo</a><a href="/contact" className="nav-button ghost">Contact Us</a></div><footer><span><Mail size={15}/>info@vyronsoft.co.za</span><span><Phone size={15}/>072 080 4844</span><span><MapPin size={15}/>South Africa</span></footer></div></section>
  </main> }
