import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industryPages, industrySlugs } from "@/lib/industries";
import Breadcrumbs from "@/components/Breadcrumbs";

export const dynamicParams = false;

export function generateStaticParams() {
  return industrySlugs.map((industry) => ({ industry }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const page = industryPages[industry];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/industries/${industry}/` },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const page = industryPages[industry];
  if (!page) notFound();

  return (
    <>
      <section className="section">
        <div className="container narrow">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries/" }, { label: page.name }]} />

          <span className="eyebrow">Industry Guide · {page.name}</span>
          <h1>{page.h1}</h1>

          <div className="answer-block">
            <p>{page.intro}</p>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <h2>Common Uses of a LOC in {page.name}</h2>
            <ul className="rich-body">
              {page.useCases.map((uc, i) => (
                <li key={i}>{uc}</li>
              ))}
            </ul>

            <h2 style={{ marginTop: "2rem" }}>Cash Flow Patterns</h2>
            <div className="rich-body">
              <p>{page.cashFlowPattern}</p>
            </div>

            <h2 style={{ marginTop: "2rem" }}>What Lenders Evaluate</h2>
            <div className="rich-body">
              <p>{page.lenderCriteria}</p>
            </div>

            <h2 style={{ marginTop: "2rem" }}>Frequently Asked Questions</h2>
            <div className="faq">
              {page.faq.map(({ q, a }, i) => (
                <div key={i} className="faq-item">
                  <p className="faq-q">{q}</p>
                  <p className="faq-a">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel" style={{ marginTop: "3rem" }}>
            <h2>Ready to explore your options?</h2>
            <p>
              Answer a short questionnaire about your {page.name.toLowerCase()} business and funding need.
              No SSN or bank credentials required.
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
              <Link href="/industries/">All Industries</Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
