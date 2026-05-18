import { ChevronLeft } from 'lucide-react';

export default function BackSection({ href='/', label='Back', context='' }: { href?: string; label?: string; context?: string }) {
  return <div className="back-section"><a className="back-chip" href={href}><span className="back-icon"><ChevronLeft size={18}/></span>{label}</a>{context && <span className="back-context">{context}</span>}</div>
}
