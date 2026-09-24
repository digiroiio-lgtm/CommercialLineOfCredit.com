"use client";
import { useState, useEffect } from "react";
import { pushEvent } from "./AnalyticsHooks";
import { captureAttribution, getAttribution } from "@/lib/attribution";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming","Washington DC",
];

const STEP_LABELS = ["Funding", "Business", "Credit", "Contact", "Review"];

type FormData = Record<string, string>;

export default function QualificationStepper() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    captureAttribution();
  }, []);

  function update(field: string, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function sel(name: string, label: string, options: string[], req = true) {
    return (
      <label key={name}>
        {label}
        <select
          name={name}
          value={data[name] ?? ""}
          onChange={(e) => update(name, e.target.value)}
          required={req}
        >
          <option value="" disabled>Select</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
    );
  }

  function txt(name: string, label: string, type = "text", autoComplete?: string) {
    return (
      <label key={name}>
        {label}
        <input
          name={name}
          type={type}
          autoComplete={autoComplete}
          value={data[name] ?? ""}
          onChange={(e) => update(name, e.target.value)}
          required
        />
      </label>
    );
  }

  function advance(e: React.FormEvent) {
    e.preventDefault();
    if (step === 1) pushEvent("qualification_step_1");
    if (step === 2) pushEvent("qualification_step_2");
    if (step === 3) pushEvent("qualification_step_3");
    if (step === 4) pushEvent("qualification_step_4");
    setStep((s) => s + 1);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const attr = getAttribution();
    const payload = { ...data, ...attr };
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error();
      pushEvent("qualification_complete");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const stepContent: Record<number, React.ReactNode> = {
    1: (
      <>
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>Funding need</h2>
        <div className="form-grid">
          {sel("fundingAmount", "How much are you looking to access?", [
            "Under $25K","$25K–$49K","$50K–$99K","$100K–$249K","$250K–$499K","$500K–$1M","$1M+",
          ])}
          {sel("fundingUse", "Intended use", [
            "Working capital","Inventory","Equipment","Business expansion","Seasonal needs","Other",
          ])}
          {sel("urgency", "Funding timeline", [
            "Immediately","Within 7 days","Within 30 days","Researching options",
          ])}
        </div>
      </>
    ),
    2: (
      <>
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>Business profile</h2>
        <div className="form-grid">
          {sel("timeInBusiness", "How long has your business been operating?", [
            "Under 6 months","6-12 months","1-2 years","2-5 years","5+ years",
          ])}
          {sel("monthlyRevenue", "Approximate monthly business revenue", [
            "Under $25K","$25K-$49K","$50K-$99K","$100K-$249K","$250K+",
          ])}
          {sel("industry", "Industry", [
            "Retail","Manufacturing","Professional services","Construction","Healthcare",
            "Food & beverage","Transportation","Technology","Real estate","Other",
          ])}
          {sel("state", "State", US_STATES)}
        </div>
      </>
    ),
    3: (
      <>
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>Credit profile</h2>
        <div className="form-grid">
          {sel("creditRange", "Approximate personal credit score range", [
            "Below 600","600-649","650-699","700-749","750+","Not sure",
          ])}
        </div>
        <p className="fine-print" style={{ marginTop: 12 }}>
          Do not submit your SSN, EIN, bank credentials or financial documents.
        </p>
      </>
    ),
    4: (
      <>
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>Your contact information</h2>
        <div className="two-col">
          {txt("firstName", "First name", "text", "given-name")}
          {txt("lastName", "Last name", "text", "family-name")}
          {txt("businessName", "Business name")}
          {txt("email", "Business email", "email", "email")}
          {txt("phone", "Phone", "tel", "tel")}
        </div>
      </>
    ),
    5: (
      <>
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>Review and submit</h2>
        <div className="panel" style={{ marginBottom: 20, fontSize: 15 }}>
          <strong>Summary</strong>
          <ul style={{ margin: "12px 0 0 18px", lineHeight: 1.8 }}>
            <li>Funding need: {data.fundingAmount} · {data.fundingUse}</li>
            <li>Business: {data.timeInBusiness} operating · {data.monthlyRevenue}/mo revenue</li>
            <li>Industry: {data.industry} · {data.state}</li>
            <li>Credit range: {data.creditRange}</li>
          </ul>
        </div>
        <div className="disclosure-box">
          <strong>Important:</strong> CLOC / CommercialLineOfCredit.com is not a bank or direct
          lender. Submitting this form does not guarantee approval, an offer, a specific rate, a
          credit limit or funding. Do not submit your SSN, EIN, bank credentials or financial
          statements. By submitting you consent to CLOC contacting you about your inquiry.
        </div>
        {status === "error" && (
          <p className="error">We could not submit your inquiry. Please try again.</p>
        )}
        {status === "success" && (
          <p className="success" style={{ fontSize: 18, fontWeight: 700 }}>
            Thank you — your inquiry was received. We will be in touch.
          </p>
        )}
      </>
    ),
  };

  if (status === "success") {
    return (
      <div className="panel" style={{ textAlign: "center", padding: 40 }}>
        <p className="success" style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
          Inquiry received.
        </p>
        <p>
          Your business profile and funding need have been recorded. Someone will follow up
          if a relevant financing path is available.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="stepper-nav" role="list">
        {STEP_LABELS.map((label, i) => {
          const n = i + 1;
          const cls = n < step ? "done" : n === step ? "active" : "";
          return (
            <div key={n} role="listitem" className={`step-label${n === step ? " active" : ""}`}>
              <div className={`step-dot ${cls}`}>{n < step ? "✓" : n}</div>
              <span>{label}</span>
            </div>
          );
        })}
      </div>

      {step < 5 ? (
        <form className="panel form-grid" onSubmit={advance}
          onFocus={() => { if (step === 1 && !data.fundingAmount) pushEvent("qualification_start"); }}>
          {stepContent[step]}
          <div className="stepper-footer">
            {step > 1 && (
              <button type="button" className="btn-back" onClick={() => setStep((s) => s - 1)}>
                Back
              </button>
            )}
            <button className="button primary" type="submit">
              {step === 4 ? "Review" : "Continue"}
            </button>
          </div>
        </form>
      ) : (
        <form className="panel form-grid" onSubmit={submit}>
          {stepContent[5]}
          <div className="stepper-footer">
            <button type="button" className="btn-back" onClick={() => setStep(4)}>
              Back
            </button>
            <button className="button primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Submitting…" : "Submit inquiry"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
