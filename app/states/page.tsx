import type { Metadata } from "next";
import Link from "next/link";
import { statePages } from "@/lib/states";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Commercial Line of Credit by State",
  description: "State-specific guides to commercial lines of credit for U.S. businesses — eligibility, lenders, and local business environment by state.",
  alternates: { canonical: "/states/" },
};

const regions: { name: string; slugs: string[] }[] = [
  {
    name: "Northeast",
    slugs: ["connecticut", "delaware", "maine", "maryland", "massachusetts", "new-hampshire", "new-jersey", "new-york", "pennsylvania", "rhode-island", "vermont", "district-of-columbia"],
  },
  {
    name: "Southeast",
    slugs: ["alabama", "arkansas", "florida", "georgia", "kentucky", "louisiana", "mississippi", "north-carolina", "south-carolina", "tennessee", "virginia", "west-virginia"],
  },
  {
    name: "Midwest",
    slugs: ["illinois", "indiana", "iowa", "kansas", "michigan", "minnesota", "missouri", "nebraska", "north-dakota", "ohio", "south-dakota", "wisconsin"],
  },
  {
    name: "Southwest",
    slugs: ["arizona", "new-mexico", "oklahoma", "texas"],
  },
  {
    name: "West",
    slugs: ["alaska", "california", "colorado", "hawaii", "idaho", "montana", "nevada", "oregon", "utah", "washington", "wyoming"],
  },
];

export default function StatesIndex() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: "States" }]} />

        <span className="eyebrow">CLOC · By State</span>
        <h1>Commercial Line of Credit by State</h1>
        <p className="lead">
          Each U.S. state has its own business environment, tax structure, and lending landscape.
          Select your state to learn how commercial lines of credit work for businesses in your area.
        </p>

        {regions.map((region) => (
          <div key={region.name} style={{ marginTop: "2.5rem" }}>
            <h2>{region.name}</h2>
            <div className="cards" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px", marginTop: "16px" }}>
              {region.slugs.map((slug) => {
                const page = statePages[slug];
                if (!page) return null;
                return (
                  <Link
                    key={slug}
                    href={`/states/${slug}/`}
                    className="card"
                    style={{ display: "block", textDecoration: "none" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--blue)", fontFamily: "monospace", minWidth: "28px" }}>{page.abbr}</span>
                      <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--navy)" }}>{page.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        <div className="panel" style={{ marginTop: "3rem" }}>
          <h2>Not sure where to start?</h2>
          <p>Answer a few questions about your business and we&apos;ll match you with appropriate financing options.</p>
          <Link className="button primary" href="/check-options/" data-track="cta_click">
            Check Your Options
          </Link>
        </div>
      </div>
    </section>
  );
}
