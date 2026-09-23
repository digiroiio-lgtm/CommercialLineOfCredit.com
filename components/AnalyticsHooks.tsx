"use client";
import { useEffect } from "react";
declare global { interface Window { dataLayer?: Array<Record<string, unknown>>; } }
export function pushEvent(event:string){ if(typeof window==="undefined")return; window.dataLayer=window.dataLayer||[]; window.dataLayer.push({event}); }
export default function AnalyticsHooks(){ useEffect(()=>{ const f=(e:MouseEvent)=>{ const t=e.target as HTMLElement|null; const el=t?.closest<HTMLElement>("[data-track]"); if(el?.dataset.track) pushEvent(el.dataset.track); }; document.addEventListener("click",f); return()=>document.removeEventListener("click",f); },[]); return null; }