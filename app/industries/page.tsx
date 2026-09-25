import type { Metadata } from "next";
import Link from "next/link";
import { industryPages } from "@/lib/industries";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Commercial Line of Credit by Industry",
  description: "Industry-specific guides to commercial lines of credit — how each sector uses revolving credit, what lenders look for, and typical qualification factors.",
  alternates: { canonical: "/industries/" },
};

export default function IndustriesIndex() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: "Industries" }]} />

        <span className="eyebrow">CLOC · By Industry</span>
        <h1>Commercial Line of Credit by Industry</h1>
        <p className="lead">
          Different industries have distinct cash flow patterns, inventory cycles, and lender
          evaluation criteria. Select your industry to understand how commercial lines of credit
          work in your specific business context.
        </p>

        <div className="guides-grid" style={{ marginTop: "2.5rem" }}>
          {Object.entries(industryPages).map(([slug, page]) => (
            <article key={slug} className="guide-card">
              <h3>
                <Link href={`/industries/${slug}/`}>{page.name}</Link>
              </h3>
              <p>{page.intro.slice(0, 140)}{page.intro.length > 140 ? "…" : ""}</p>
              <Link href={`/industries/${slug}/`} className="guide-read-more">
                Read industry guide →
              </Link>
            </article>
          ))}
        </div>

        <div className="panel" style={{ marginTop: "3rem" }}>
          <h2>Ready to explore your options?</h2>
          <p>Answer a short questionnaire about your business. No SSN or bank credentials required.</p>
          <Link className="button primary" href="/check-options/" data-track="cta_click">
            Check Your Options
          </Link>
        </div>
      </div>
    </section>
  );
}
