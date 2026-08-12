import { useEffect, useState } from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function PageShell({ children, active }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.querySelectorAll('[data-reveal]').forEach(node => node.classList.add('is-visible')); }, []);
  return <div className="app-shell"><SiteHeader active={active} open={open} setOpen={setOpen} /><main>{children}</main><SiteFooter /></div>;
}
