"use client";
import { FormEvent,useRef,useState } from "react";
import { pushEvent } from "./AnalyticsHooks";

export default function QualificationForm(){
  const started=useRef(false);
  const [status,setStatus]=useState("idle");
  function mark(){if(!started.current){started.current=true;pushEvent("qualification_start");}}
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();setStatus("sending");
    const form=e.currentTarget;
    const data=Object.fromEntries(new FormData(form).entries());
    try{
      const r=await fetch("/api/lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
      if(!r.ok)throw new Error();
      pushEvent("qualification_complete");
      setStatus("success");form.reset();
    }catch{setStatus("error");}
  }
  const opts=(name:string,label:string,values:string[])=><label>{label}<select name={name} required defaultValue=""><option value="" disabled>Select</option>{values.map(v=><option key={v}>{v}</option>)}</select></label>;
  return <form className="panel form-grid" onSubmit={submit} onFocus={mark}>
    <div className="two-col">
      {opts("fundingAmount","Funding amount",["Under $25K","$25K-$49K","$50K-$99K","$100K-$249K","$250K-$499K","$500K-$1M","$1M+"])}
      {opts("timeInBusiness","Time in business",["Under 6 months","6-12 months","1-2 years","2-5 years","5+ years"])}
      {opts("monthlyRevenue","Monthly business revenue",["Under $25K","$25K-$49K","$50K-$99K","$100K+"])}
      {opts("creditRange","Approximate credit range",["Below 600","600-649","650-699","700-749","750+","Not sure"])}
      <label>Industry<input name="industry" required/></label><label>State<input name="state" required/></label>
      {opts("urgency","Funding urgency",["Immediately","Within 7 days","Within 30 days","Researching options"])}
      <label>First name<input name="firstName" autoComplete="given-name" required/></label>
      <label>Last name<input name="lastName" autoComplete="family-name" required/></label>
      <label>Business name<input name="businessName" required/></label>
      <label>Business email<input name="email" type="email" autoComplete="email" required/></label>
      <label>Phone<input name="phone" type="tel" autoComplete="tel" required/></label>
    </div>
    <p className="fine-print">Submitting this form does not guarantee approval or funding. Do not submit SSN, EIN, bank credentials, DOB or financial documents.</p>
    <button className="button primary" disabled={status==="sending"}>{status==="sending"?"Submitting...":"Check Your Options"}</button>
    {status==="success"&&<p className="success">Thank you. Your inquiry was received.</p>}
    {status==="error"&&<p className="error">We could not submit the form. Please try again.</p>}
  </form>
}