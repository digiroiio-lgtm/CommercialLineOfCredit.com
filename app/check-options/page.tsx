import type { Metadata } from "next";
import Link from "next/link";
import QualificationForm from "@/components/QualificationForm";

export const metadata:Metadata={
  title:"Check Commercial Credit Options",
  description:"Provide basic business information to organize your commercial line of credit needs. No SSN, EIN, bank credentials or financial documents required.",
  alternates:{canonical:"/check-options/"}
};

export default function Page(){
  return <section className="section"><div className="container narrow">
    <span className="eyebrow">CLOC · Business financing options</span>
    <h1>Check Your Commercial Credit Options</h1>
    <p className="lead">Tell us about your business and intended funding need. CLOC / CommercialLineOfCredit.com is not a lender, and submitting this form does not guarantee approval or funding.</p>
    <QualificationForm/>
    <div className="panel resource-panel"><h2>Before submitting</h2><p>Review common qualification factors and understand how a commercial line of credit works.</p><div className="resource-links"><Link href="/requirements/">Requirements</Link><Link href="/how-it-works/">How it works</Link><Link href="/privacy/">Privacy</Link></div></div>
  </div></section>
}