import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";

export const metadata:Metadata={
  title:"Commercial Line of Credit Calculator",
  description:"Estimate simple interest on a hypothetical commercial line of credit draw using amount, annual interest rate and months outstanding.",
  alternates:{canonical:"/calculator/"}
};

export default function Page(){
  return <section className="section"><div className="container narrow">
    <span className="eyebrow">CLOC · Illustrative tool</span>
    <h1>Commercial Line of Credit Interest Calculator</h1>
    <p className="lead">Estimate simple interest on a hypothetical outstanding balance. This is not a quote or financing offer.</p>
    <Calculator/>
    <div className="panel resource-panel"><h2>What to review next</h2><div className="resource-links"><Link href="/rates/">Rates and costs</Link><Link href="/100k-line-of-credit/">$100K example</Link><Link href="/check-options/" data-track="cta_click">Check your options</Link></div></div>
  </div></section>
}