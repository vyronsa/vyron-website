import BackSection from '../BackSection';
import { ChevronRight, CheckCircle2, ShieldCheck, Sparkles, Rocket, Cpu, Building2, Lock, Cloud, BarChart3, Users, Phone, Mail, MapPin } from 'lucide-react';

function Header({ active }: { active?: string }) {
  const nav = [
    ['Home', '/'], ['Products', '/products'], ['Solutions', '/industries'], ['Pricing', '/pricing'], ['About Us', '/about'], ['Contact', '/contact']
  ];
  return <header className="nav"><a className="brand-link" href="/"><div className="logo-wrap"><div className="logo-mark logo-large"><span>V</span></div><div><div className="logo-title big">VYRON</div><div className="logo-sub">SOFTWARE</div></div></div></a><nav>{nav.map(([label, href]) => <a key={href} className={active === label ? 'active' : ''} href={href}>{label}</a>)}</nav><a className="nav-button" href="/demo">Book a Demo</a></header>;
}

export default function Page(){return <main className="site inner-page"><div className="glow hero-glow"/><div className="glow top-glow"/><Header active=""/><BackSection href="/" label="Back to Home" context="VYRON account access"/><section className="form-page"><div><div className="pill">LOGIN</div><h1>VYRON<br/><span>Secure Login.</span></h1><p>A future login gateway for the VYRON product ecosystem. For now this page is active as a front-end placeholder.</p><div className="contact-lines"><span><Mail/>info@vyronsoft</span><span><Phone/>072 080 4844</span></div></div><form className="lead-form page-form"><input placeholder="Email address"/><input placeholder="Password" type="password"/><button>Continue</button><a href="/contact">Need access? Contact VYRON</a></form></section></main>}
