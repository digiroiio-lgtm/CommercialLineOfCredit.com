import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Commercial Line of Credit: Rates, Requirements & Financing Guides",
  description: "Understand commercial lines of credit — costs, qualification factors, how to apply, and common business financing structures. Free educational resource for U.S. businesses.",
  alternates: { canonical: "/" },
};

const layerALinks = [
  { href: "/cost/", label: "Total Cost" },
  { href: "/interest-rates/", label: "Interest Rates" },
  { href: "/fees/", label: "Fees" },
  { href: "/how-to-apply/", label: "How to Apply" },
  { href: "/documents-needed/", label: "Documents Needed" },
  { href: "/credit-score/", label: "Credit Score" },
  { href: "/revenue-requirements/", label: "Revenue Requirements" },
  { href: "/approval-time/", label: "Approval Time" },
];

const guideLinks = [
  { href: "/guides/how-much-line-of-credit-can-my-business-get/", label: "How much can my business get?" },
  { href: "/guides/how-lenders-evaluate-businesses/", label: "How lenders evaluate businesses" },
  { href: "/guides/what-is-a-revolving-line-of-credit/", label: "What is a revolving line of credit?" },
  { href: "/guides/line-of-credit-for-cash-flow/", label: "Using a line for cash flow" },
  { href: "/guides/line-of-credit-for-inventory/", label: "Using a line for inventory" },
  { href: "/guides/line-of-credit-for-seasonal-business/", label: "Seasonal business financing" },
];

export default function Home() {
  return (
    <>
      <SchemaOrg type="website" />
      <section className="hero">
        <div className="container narrow">
          <span className="eyebrow">CLOC · Commercial credit resource</span>
          <h1>Commercial Line of Credit: Rates, Requirements &amp; Funding Guides</h1>
          <p className="lead">
            A commercial line of credit gives your business revolving access to a credit limit — draw what you need,
            repay, and draw again. CLOC helps U.S. businesses understand how these facilities work, what they cost,
            and what lenders typically require.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/check-options/" data-track="cta_click">
              Check Your Options
            </Link>
            <Link className="button secondary" href="/calculator/">
              Estimate Your Cost
            </Link>
          </div>
          <p className="fine-print">CLOC / CommercialLineOfCredit.com is not a bank or direct lender.</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Key topics</h2>
          <div className="resource-links">
            {layerALinks.map(({ href, label }) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <h2>How a commercial line of credit works</h2>
          <div className="cards">
            <article className="card">
              <h3>What it is</h3>
              <p>
                A commercial line of credit is a revolving financing structure that can provide a business with
                access to an approved credit limit. You draw funds as needed, repay the balance, and can draw again —
                subject to provider terms.
              </p>
            </article>
            <article className="card">
              <h3>How cost is calculated</h3>
              <p>
                Interest typically accrues on the outstanding balance, not the full credit limit. Additional costs
                can include draw fees, origination fees, and annual maintenance fees. Use the calculator to model
                a hypothetical scenario.
              </p>
            </article>
            <article className="card">
              <h3>Common qualification factors</h3>
              <p>
                Lenders commonly review time in business, annual revenue, credit score, existing obligations, and
                industry. There is no single universal standard — each provider sets its own underwriting criteria.
              </p>
            </article>
            <article className="card">
              <h3>Secured vs. unsecured</h3>
              <p>
                A secured facility uses business assets or other collateral. Unsecured facilities typically rely
                more heavily on credit profile and cash flow — and may include a personal guarantee.
              </p>
            </article>
            <article className="card">
              <h3>Line vs. term loan</h3>
              <p>
                A revolving line is designed for repeated access to credit and suits variable, ongoing needs.
                A term loan provides a lump sum repaid on a fixed schedule — better suited for one-time investments.
              </p>
            </article>
            <article className="card">
              <h3>Size ranges</h3>
              <p>
                Lines of credit for business purposes commonly range from $25,000 to $1 million or more. The
                approved amount depends on the business&apos;s revenue, credit, and the lender&apos;s underwriting criteria.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>In-depth guides</h2>
          <p>Plain-language explanations of commercial credit concepts for business owners and finance managers.</p>
          <div className="resource-links">
            {guideLinks.map(({ href, label }) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </div>
          <Link href="/guides/" className="button secondary" style={{ marginTop: "1rem", display: "inline-block" }}>
            View all guides
          </Link>
        </div>
      </section>

      <section className="section soft">
        <div className="container narrow">
          <h2>Compare financing structures</h2>
          <div className="resource-links">
            <Link href="/commercial-line-of-credit-vs-business-loan/">Line vs. Term Loan</Link>
            <Link href="/commercial-line-of-credit-vs-business-credit-card/">Line vs. Business Credit Card</Link>
            <Link href="/commercial-line-of-credit-vs-heloc/">Line vs. HELOC</Link>
            <Link href="/secured/">Secured Lines</Link>
            <Link href="/unsecured/">Unsecured Lines</Link>
            <Link href="/no-personal-guarantee/">No Personal Guarantee</Link>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container narrow">
          <h2>Ready to explore your options?</h2>
          <p>
            Answer a short set of business questions to help organize your financing need. Submitting the form
            does not guarantee approval or funding. No SSN or bank credentials required.
          </p>
          <Link className="button primary" href="/check-options/" data-track="cta_click">
            Check Your Options
          </Link>
        </div>
      </section>

      <section className="section soft">
        <div className="container narrow">
          <h2>Trust &amp; transparency</h2>
          <div className="resource-links">
            <Link href="/about/">About CLOC</Link>
            <Link href="/methodology/">Editorial Methodology</Link>
            <Link href="/editorial-policy/">Editorial Policy</Link>
            <Link href="/how-we-make-money/">How We Make Money</Link>
            <Link href="/sources/">Sources &amp; Citations</Link>
            <Link href="/disclosures/">Disclosures</Link>
          </div>
        </div>
      </section>
    </>
  );
}
