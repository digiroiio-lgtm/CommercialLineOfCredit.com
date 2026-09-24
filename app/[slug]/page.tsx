import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resourcePages, resourceSlugs } from "@/lib/content";
import { richPages, richPageSlugs } from "@/lib/pages";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import SchemaOrg from "@/components/SchemaOrg";

export const dynamicParams = false;

export function generateStaticParams() {
  const allSlugs = [...new Set([...resourceSlugs, ...richPageSlugs])];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const rich = richPages[slug];
  if (rich) {
    return {
      title: rich.title,
      description: rich.description,
      alternates: { canonical: `/${slug}/` },
    };
  }
  const resource = resourcePages[slug];
  if (resource) {
    return {
      title: resource.title,
      description: resource.description,
      alternates: { canonical: `/${slug}/` },
    };
  }
  return {};
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Rich pages take priority
  const rich = richPages[slug];
  if (rich) {
    const breadcrumb = [{ href: `/${slug}/`, label: rich.h1 }];
    return (
      <article className="section">
        <div className="container narrow">
          <Breadcrumbs items={breadcrumb} />
          <SchemaOrg type="article" title={rich.title} url={`https://commerciallineofcredit.com/${slug}/`} />

          <span className="eyebrow">Commercial credit resource</span>
          <h1>{rich.h1}</h1>

          <div className="answer-block">
            <p className="lead">{rich.intro}</p>
          </div>

          <div className="rich-body">
            {rich.sections.map((section, i) => (
              <section key={i}>
                <h2>{section.heading}</h2>
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item, k) => <li key={k}>{item}</li>)}
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

          {rich.faq && rich.faq.length > 0 && <FAQ items={rich.faq} />}

          <div className="panel resource-panel">
            <h2>Related resources</h2>
            <div className="resource-links">
              {rich.relatedLinks.map((l) => (
                <Link key={l.href} href={l.href} data-track={l.href === "/check-options/" ? "cta_click" : undefined}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <Link className="button primary" href="/check-options/" data-track="cta_click">
              {rich.ctaText ?? "Check Your Options"}
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Fall back to simple resource pages
  const page = resourcePages[slug];
  if (!page) notFound();

  return (
    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">Commercial credit guide</span>
        <h1>{page.h1}</h1>
        <p className="lead">{page.intro}</p>
        <div className="stack">
          {page.sections.map((s) => (
            <article className="panel" key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
        <div className="panel resource-panel">
          <h2>Continue your research</h2>
          <div className="resource-links">
            {page.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-track={l.href === "/check-options/" ? "cta_click" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
