import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resourcePages,resourceSlugs } from "@/lib/content";
export const dynamicParams=false;
export function generateStaticParams(){return resourceSlugs.map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const page=resourcePages[slug];if(!page)return{};return{title:page.title,description:page.description,alternates:{canonical:`/${slug}/`}};}
export default async function ResourcePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=resourcePages[slug];if(!page)notFound();return <section className="section"><div className="container narrow"><span className="eyebrow">Commercial credit guide</span><h1>{page.h1}</h1><p className="lead">{page.intro}</p><div className="stack">{page.sections.map(s=><article className="panel" key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p></article>)}</div><div className="panel resource-panel"><h2>Continue your research</h2><div className="resource-links">{page.links.map(l=><Link key={l.href} href={l.href} data-track={l.href==="/check-options/"?"cta_click":undefined}>{l.label}</Link>)}</div></div></div></section>}