"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    console.error(error);
  }, [error]);

  return (
    <section className="section">
      <div className="container narrow" style={{ textAlign: "center", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <span className="eyebrow">Error</span>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "1rem" }}>
          Something went wrong
        </h1>
        <p className="lead" style={{ marginBottom: "2rem" }}>
          We&apos;re sorry — an unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="button primary" onClick={reset}>
            Try Again
          </button>
          <Link className="button" href="/">
            Go to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
