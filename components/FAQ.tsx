import SchemaOrg from "./SchemaOrg";

interface Props {
  items: { q: string; a: string }[];
  includeSchema?: boolean;
}

export default function FAQ({ items, includeSchema = true }: Props) {
  return (
    <>
      {includeSchema && <SchemaOrg type="faq" items={items} />}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <dl>
          {items.map((item, i) => (
            <div className="faq-item" key={i}>
              <dt className="faq-q">{item.q}</dt>
              <dd className="faq-a">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
