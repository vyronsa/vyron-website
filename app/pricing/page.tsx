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
    <Header active="Pricing" />
    <BackSection href="/" label="Back to Home" context="Pricing section" />
    <section className="drill-hero"><div className="pill">VYRON PRICING</div><h1>Flexible SaaS Packages.<br/><span>Built for Growth.</span></h1><p>Pricing will be structured around product modules, company size, number of users and enterprise requirements. The page is now active and ready for final package detail.</p><div className="hero-buttons"><a href="/demo"><button>Book a Demo <ChevronRight size={20}/></button></a><a href="/contact"><button className="ghost">Contact VYRON <ChevronRight size={18}/></button></a></div></section>
    <section className="drill-grid"><div className="info-card"><h3>Starter</h3><p>For small teams that need one focused VYRON module.</p></div><div className="info-card"><h3>Business</h3><p>For companies that need stronger reporting, users and operational workflows.</p></div><div className="info-card"><h3>Enterprise</h3><p>For larger companies needing multiple products, integrations and custom deployment.</p></div><div className="info-card wide"><h3>Contact Details</h3><div className="module-list"><span><Mail size={15}/>info@vyronsoft</span><span><Phone size={15}/>072 080 4844</span><span><MapPin size={15}/>South Africa</span></div></div></section>
  </main>
}
