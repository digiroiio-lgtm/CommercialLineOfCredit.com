import type { Metadata } from "next";
import Link from "next/link";
import { guidePages } from "@/lib/guides";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Commercial Line of Credit Guides",
  description: "In-depth guides on commercial lines of credit for U.S. business owners — how to qualify, how lenders evaluate applications, and how to use a line effectively.",
  alternates: { canonical: "/guides/" },
};

const categoryOrder = ["Fundamentals", "Qualifying", "Underwriting", "Use Cases"];

export default function GuidesIndex() {
  const byCategory: Record<string, { slug: string; title: string; intro: string }[]> = {};

  for (const [slug, page] of Object.entries(guidePages)) {
    const cat = page.category;
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push({ slug, title: page.title, intro: page.intro });
  }

  const categories = categoryOrder.filter((c) => byCategory[c]);

  return (
    <section className="section">
      <div className="container narrow">
        <Breadcrumbs items={[{ label: "Guides" }]} />

        <span className="eyebrow">CLOC · In-depth guides</span>
        <h1>Commercial Line of Credit Guides</h1>
        <p className="lead">
          Plain-language explanations of commercial credit concepts — how facilities work, what lenders look for,
          and how businesses use lines of credit to manage cash flow and growth.
        </p>

        {categories.map((cat) => (
          <div key={cat} style={{ marginTop: "2.5rem" }}>
            <h2>{cat}</h2>
            <div className="guides-grid">
              {byCategory[cat].map(({ slug, title, intro }) => (
                <article key={slug} className="guide-card">
                  <h3><Link href={`/guides/${slug}/`}>{title}</Link></h3>
                  <p>{intro.slice(0, 160)}{intro.length > 160 ? "…" : ""}</p>
                  <Link href={`/guides/${slug}/`} className="guide-read-more">Read guide →</Link>
                </article>
              ))}
            </div>
          </div>
        ))}

        <div className="panel resource-panel" style={{ marginTop: "3rem" }}>
          <h2>Ready to explore your options?</h2>
          <p>Answer a short questionnaire about your business and funding need. No SSN or bank credentials required.</p>
          <Link className="button primary" href="/check-options/" data-track="cta_click">
            Check Your Options
          </Link>
        </div>
      </div>
    </section>
  );
}
