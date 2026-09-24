import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: Props) {
  const all = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://commerciallineofcredit.com${item.href}` } : {}),
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        {all.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {i > 0 && <span className="breadcrumb-sep" aria-hidden="true">›</span>}
            {item.href && i < all.length - 1 ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current={i === all.length - 1 ? "page" : undefined}>{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
