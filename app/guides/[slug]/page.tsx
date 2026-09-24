import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guidePages, guideSlugs } from "@/lib/guides";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import SchemaOrg from "@/components/SchemaOrg";

export const dynamicParams = false;

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = guidePages[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/guides/${slug}/` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = guidePages[slug];
  if (!page) notFound();

  return (
    <article className="section">
      <div className="container narrow">
        <Breadcrumbs items={page.breadcrumb} />

        <SchemaOrg type="article" title={page.title} url={`https://commerciallineofcredit.com/guides/${slug}/`} />

        <span className="eyebrow">CLOC · {page.category}</span>
        <h1>{page.h1}</h1>

        <div className="answer-block">
          <p className="lead">{page.intro}</p>
        </div>

        <div className="rich-body">
          {page.sections.map((section, i) => (
            <section key={i}>
              <h2>{section.heading}</h2>
              {section.body.split("\n\n").map((para, j) => (
                <p key={j}>{para}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="table-wrap">
                  <table className="comparison-table">
                    <thead>
                      <tr>{section.table.headers.map((h, k) => <th key={k}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, k) => (
                        <tr key={k}>{row.map((cell, l) => <td key={l}>{cell}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.example && (
                <div className="example-box">
                  <strong>Example</strong>
                  <p>{section.example}</p>
                </div>
              )}
              {section.note && (
                <div className="disclosure-box">
                  <p>{section.note}</p>
                </div>
              )}
            </section>
          ))}
        </div>

        {page.faq && page.faq.length > 0 && (
          <FAQ items={page.faq} />
        )}

        <div className="panel resource-panel">
          <h2>Related resources</h2>
          <div className="resource-links">
            {page.relatedLinks.map(({ href, label }) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </div>
        </div>

        <div className="panel resource-panel" style={{ marginTop: "1.5rem" }}>
          <p>
            <Link className="button primary" href="/check-options/" data-track="cta_click">
              {page.ctaText ?? "Check Your Options"}
            </Link>
          </p>
          <p className="fine-print">Not a lender. Submitting does not guarantee approval or funding.</p>
        </div>
      </div>
    </article>
  );
}
