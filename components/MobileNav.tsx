"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Rates & Costs", href: "/interest-rates/" },
  { label: "Requirements", href: "/requirements/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Guides", href: "/guides/" },
  { label: "Calculator", href: "/calculator/" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        className="hamburger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M2 2L18 18M18 2L2 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
            <rect y="0" width="22" height="2.5" rx="1.25" fill="white"/>
            <rect y="6.75" width="22" height="2.5" rx="1.25" fill="white"/>
            <rect y="13.5" width="22" height="2.5" rx="1.25" fill="white"/>
          </svg>
        )}
      </button>

      {open && (
        <div className="mobile-overlay" role="dialog" aria-label="Navigation menu">
          <nav className="mobile-nav">
            {NAV.map(({ label, href }) => (
              <Link key={href} href={href} className="mobile-nav-item">
                {label}
              </Link>
            ))}
            <div className="mobile-nav-divider" />
            <Link href="/check-options/" className="mobile-nav-cta" data-track="cta_click">
              Check Your Options
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
