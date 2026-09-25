import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { statePages, stateSlugs } from "@/lib/states";
import Breadcrumbs from "@/components/Breadcrumbs";

export const dynamicParams = false;

export function generateStaticParams() {
  return stateSlugs.map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const page = statePages[state];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/states/${state}/` },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const page = statePages[state];
  if (!page) notFound();

  return (
    <>
      <section className="section">
        <div className="container narrow">
          <Breadcrumbs items={[{ label: "States", href: "/states/" }, { label: page.name }]} />

          <span className="eyebrow">Commercial Line of Credit · {page.abbr}</span>
          <h1>{page.h1}</h1>

          <div className="answer-block">
            <p>{page.intro}</p>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <h2>How Commercial Lines of Credit Work in {page.name}</h2>
            <div className="rich-body">
              <p>
                A commercial line of credit is a revolving credit facility that gives your business
                access to a set amount of funds. You draw what you need, repay it (with interest on
                the outstanding balance), and the credit becomes available again. Unlike a term loan,
                you are not required to use the full amount — you only pay interest on what you
                actually draw.
              </p>
              <p>
                For {page.name} businesses, the qualification process typically involves submitting
                business bank statements (3–12 months), a government-issued ID, and proof of business
                formation. Most lenders require at least 12 months in operation and $10,000 or more in
                monthly revenue.
              </p>
            </div>

            <h2 style={{ marginTop: "2rem" }}>{page.name} Business Environment</h2>
            <ul className="rich-body">
              {page.keyFacts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
            </ul>

            <h2 style={{ marginTop: "2rem" }}>Top Industries in {page.name}</h2>
            <p>
              The leading industries in {page.name} that commonly use commercial lines of credit
              include{" "}
              {page.topIndustries.map((ind, i) => (
                <span key={i}>
                  {i > 0 && i < page.topIndustries.length - 1 ? ", " : ""}
                  {i === page.topIndustries.length - 1 && i > 0 ? ", and " : ""}
                  <strong>{ind}</strong>
                </span>
              ))}
              . Each has distinct cash flow patterns and working capital needs that a revolving
              credit line can address.
            </p>

            <h2 style={{ marginTop: "2rem" }}>General Qualification Requirements</h2>
            <div className="rich-body">
              <p>
                Regardless of state, most commercial LOC lenders evaluate the following factors:
              </p>
              <ul>
                <li><strong>Time in business:</strong> Minimum 12 months; 24+ months preferred</li>
                <li><strong>Monthly revenue:</strong> Typically $10,000–$25,000 minimum</li>
                <li><strong>Personal credit score:</strong> 620+ for most conventional lenders</li>
                <li><strong>Business bank account:</strong> Active business checking account required</li>
                <li><strong>Good standing:</strong> Entity must be registered and in good standing in {page.name}</li>
              </ul>
            </div>
          </div>

          <div className="panel" style={{ marginTop: "3rem" }}>
            <h2>Ready to explore your options?</h2>
            <p>
              Answer a short questionnaire about your {page.name} business. No SSN or bank
              credentials required.
            </p>
            <Link className="button primary" href="/check-options/" data-track="cta_click">
              Check Your Options
            </Link>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <h2>Related Resources</h2>
            <nav className="resource-links">
              {page.relatedLinks.map(({ href, label }) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
              <Link href="/states/">All States</Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
