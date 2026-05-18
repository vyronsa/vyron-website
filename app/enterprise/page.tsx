import BackSection from '../BackSection';
import { ChevronRight, CheckCircle2, ShieldCheck, Sparkles, Rocket, Cpu, Building2, Lock, Cloud, BarChart3, Users, Phone, Mail, MapPin } from 'lucide-react';

function Header({ active }: { active?: string }) {
  const nav = [
    ['Home', '/'], ['Products', '/products'], ['Solutions', '/industries'], ['Pricing', '/pricing'], ['About Us', '/about'], ['Contact', '/contact']
  ];
  return <header className="nav"><a className="brand-link" href="/"><div className="logo-wrap"><div className="logo-mark logo-large"><span>V</span></div><div><div className="logo-title big">VYRON</div><div className="logo-sub">SOFTWARE</div></div></div></a><nav>{nav.map(([label, href]) => <a key={href} className={active === label ? 'active' : ''} href={href}>{label}</a>)}</nav><a className="nav-button" href="/demo">Book a Demo</a></header>;
}

export default function Page(){
  return <main className="site inner-page"><div className="glow hero-glow"/><div className="glow top-glow"/>
    <Header active="Resources" />
    <BackSection href="/" label="Back to Home" context="Enterprise section" />
    <section className="drill-hero"><div className="pill">ENTERPRISE</div><h1>Enterprise Software.<br/><span>One VYRON Ecosystem.</span></h1><p>For companies that need serious operational control, multi-product visibility, security, integrations and scalable SaaS architecture.</p><div className="hero-buttons"><a href="/demo"><button>Book a Demo <ChevronRight size={20}/></button></a><a href="/contact"><button className="ghost">Contact VYRON <ChevronRight size={18}/></button></a></div></section>
    <section className="drill-grid"><div className="info-card"><h3>Multi-Product Control</h3><p>Run workforce, maintenance, costing, recruitment and marketing software under one VYRON brand.</p></div><div className="info-card"><h3>AI Command Centre</h3><p>Surface risks, opportunities and next-best actions across the business.</p></div><div className="info-card"><h3>Executive Visibility</h3><p>Give management a single view of performance, compliance and growth.</p></div><div className="info-card wide"><h3>Contact Details</h3><div className="module-list"><span><Mail size={15}/>info@vyronsoft</span><span><Phone size={15}/>072 080 4844</span><span><MapPin size={15}/>South Africa</span></div></div></section>
  </main>
}
