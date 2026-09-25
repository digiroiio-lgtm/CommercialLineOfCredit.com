import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AnalyticsHooks from "@/components/AnalyticsHooks";
import SchemaOrg from "@/components/SchemaOrg";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://commerciallineofcredit.com"),
  title: { default: "CLOC | Commercial Line of Credit", template: "%s | CLOC" },
  description: "CLOC helps U.S. businesses understand commercial lines of credit, rates, requirements and financing options.",
  openGraph: {
    siteName: "CLOC — CommercialLineOfCredit.com",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SchemaOrg type="organization" />
      </head>
      <body>
        <AnalyticsHooks />
        <header className="site-header">
          <div className="container header-inner">
            <MobileNav />
            <Link className="brand" href="/">
              <strong>CLOC</strong>
              <span>Commercial Line of Credit</span>
            </Link>
            <nav>
              <Link href="/interest-rates/">Rates</Link>
              <Link href="/requirements/">Requirements</Link>
              <Link href="/how-it-works/">How It Works</Link>
              <Link href="/guides/">Guides</Link>
              <Link href="/calculator/">Calculator</Link>
              <Link href="/states/">States</Link>
              <Link href="/industries/">Industries</Link>
              <Link className="nav-cta" href="/check-options/" data-track="cta_click">
                Check Options
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container">
            <div className="footer-brand">
              <strong>CLOC</strong>
              <span>CommercialLineOfCredit.com</span>
            </div>
            <p className="footer-disclosure">
              CLOC / CommercialLineOfCredit.com is not a lender. Information is provided for
              educational purposes only. Financing availability, rates and terms depend on
              third-party providers and borrower eligibility.
            </p>
            <nav className="footer-links">
              <Link href="/states/">States</Link>
              <Link href="/industries/">Industries</Link>
              <Link href="/about/">About</Link>
              <Link href="/methodology/">Methodology</Link>
              <Link href="/editorial-policy/">Editorial Policy</Link>
              <Link href="/how-we-make-money/">How We Make Money</Link>
              <Link href="/sources/">Sources</Link>
              <Link href="/disclosures/">Disclosures</Link>
              <Link href="/privacy/">Privacy</Link>
              <Link href="/terms/">Terms</Link>
            </nav>
            <p className="footer-copy">© {new Date().getFullYear()} CommercialLineOfCredit.com. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
