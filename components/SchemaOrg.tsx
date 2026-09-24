interface OrgProps { type: "organization" }
interface WebsiteProps { type: "website" }
interface ArticleProps { type: "article"; title: string; url: string }
interface FaqProps { type: "faq"; items: { q: string; a: string }[] }

type Props = OrgProps | WebsiteProps | ArticleProps | FaqProps;

export default function SchemaOrg(props: Props) {
  let data: Record<string, unknown>;

  if (props.type === "organization") {
    data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "CLOC",
      alternateName: "CommercialLineOfCredit.com",
      url: "https://commerciallineofcredit.com",
      description:
        "CLOC is a commercial line of credit information and borrower acquisition platform for U.S. businesses.",
    };
  } else if (props.type === "website") {
    data = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "CLOC | Commercial Line of Credit",
      url: "https://commerciallineofcredit.com",
    };
  } else if (props.type === "article") {
    data = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: props.title,
      url: props.url,
      publisher: {
        "@type": "Organization",
        name: "CLOC",
        url: "https://commerciallineofcredit.com",
      },
    };
  } else {
    data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: props.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
