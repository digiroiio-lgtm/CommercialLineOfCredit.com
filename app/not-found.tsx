import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow" style={{ textAlign: "center", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <span className="eyebrow">404 · Not Found</span>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>Page Not Found</h1>
        <p className="lead" style={{ marginBottom: "2rem" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="button primary" href="/">
            Go to Homepage
          </Link>
          <Link className="button" href="/check-options/" data-track="cta_click">
            Check Your Options
          </Link>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "1rem" }}>Popular pages:</p>
          <nav className="resource-links" style={{ justifyContent: "center" }}>
            <Link href="/interest-rates/">Interest Rates</Link>
            <Link href="/requirements/">Requirements</Link>
            <Link href="/how-it-works/">How It Works</Link>
            <Link href="/calculator/">Calculator</Link>
            <Link href="/guides/">Guides</Link>
            <Link href="/states/">By State</Link>
            <Link href="/industries/">By Industry</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
