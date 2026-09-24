"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { pushEvent } from "./AnalyticsHooks";

export default function Calculator() {
  const started = useRef(false);
  const [result, setResult] = useState<{
    interest: number;
    fees: number;
    total: number;
    unused: number;
    utilization: number;
  } | null>(null);

  function handleChange() {
    if (!started.current) {
      started.current = true;
      pushEvent("calculator_start");
    }
  }

  function calc(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const limit = Number(f.get("limit")) || 0;
    const drawn = Number(f.get("drawn")) || 0;
    const rate = Number(f.get("rate")) || 0;
    const months = Number(f.get("months")) || 0;
    const drawFee = Number(f.get("drawFee")) || 0;
    const originationFee = Number(f.get("originationFee")) || 0;
    const monthlyFee = Number(f.get("monthlyFee")) || 0;

    if (drawn <= 0 || rate < 0 || months <= 0) return;

    const interest = drawn * (rate / 100) * (months / 12);
    const drawFeeAmt = drawn * (drawFee / 100);
    const fees = drawFeeAmt + originationFee + monthlyFee * months;
    const total = interest + fees;
    const unused = Math.max(0, limit - drawn);
    const utilization = limit > 0 ? (drawn / limit) * 100 : 0;

    setResult({ interest, fees, total, unused, utilization });
    pushEvent("calculator_complete");
  }

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <form className="panel form-grid" onSubmit={calc} onChange={handleChange}>
      <div className="two-col">
        <label>
          Credit limit
          <input name="limit" type="number" min="0" step="1000" defaultValue="100000" />
        </label>
        <label>
          Amount drawn
          <input name="drawn" type="number" min="1" step="1000" defaultValue="50000" required />
        </label>
        <label>
          Annual interest rate (%)
          <input name="rate" type="number" min="0" step="0.01" defaultValue="12" required />
        </label>
        <label>
          Months outstanding
          <input name="months" type="number" min="1" max="120" defaultValue="6" required />
        </label>
        <label>
          Draw fee (% of drawn, optional)
          <input name="drawFee" type="number" min="0" step="0.1" defaultValue="0" />
        </label>
        <label>
          Origination fee ($ one-time, optional)
          <input name="originationFee" type="number" min="0" step="100" defaultValue="0" />
        </label>
        <label>
          Monthly maintenance fee ($ per month, optional)
          <input name="monthlyFee" type="number" min="0" step="10" defaultValue="0" />
        </label>
      </div>
      <button className="button primary" type="submit">
        Estimate financing cost
      </button>

      {result && (
        <div>
          <div className="result-grid">
            <div className="result-tile">
              <div className="label">Est. Interest</div>
              <div className="value">{fmt(result.interest)}</div>
            </div>
            <div className="result-tile">
              <div className="label">Est. Fees</div>
              <div className="value">{fmt(result.fees)}</div>
            </div>
            <div className="result-tile">
              <div className="label">Total Financing Cost</div>
              <div className="value">{fmt(result.total)}</div>
            </div>
            <div className="result-tile">
              <div className="label">Unused Credit</div>
              <div className="value">{fmt(result.unused)}</div>
            </div>
            <div className="result-tile">
              <div className="label">Utilization</div>
              <div className="value">{result.utilization.toFixed(1)}%</div>
            </div>
          </div>
          <p className="fine-print">
            Illustrative estimate only. Not a quote or financing offer. Actual provider
            calculation methods, fees and rates may differ.
          </p>
          <div className="resource-links" style={{ marginTop: 12 }}>
            <Link href="/rates/" data-track="calculator_cta_click">Review rates &amp; costs</Link>
            <Link href="/fees/" data-track="calculator_cta_click">Fee guide</Link>
            <Link href="/requirements/" data-track="calculator_cta_click">Requirements</Link>
            <Link href="/check-options/" data-track="cta_click" onClick={() => pushEvent("calculator_cta_click")}>
              Check your options
            </Link>
          </div>
        </div>
      )}
    </form>
  );
}
