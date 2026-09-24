export type QualificationStatus = "qualified" | "review" | "unqualified" | "incomplete";

const RULES = {
  timeInBusiness: {
    unqualified: ["Under 6 months"],
    review: ["6-12 months"],
  },
  monthlyRevenue: {
    unqualified: ["Under $25K"],
    review: ["$25K-$49K"],
  },
  creditRange: {
    unqualified: ["Below 600"],
    review: ["600-649"],
  },
};

export function qualify(data: Record<string, string>): QualificationStatus {
  const required = ["timeInBusiness", "monthlyRevenue", "creditRange", "fundingAmount"];
  if (required.some((f) => !data[f])) return "incomplete";

  for (const [field, thresholds] of Object.entries(RULES)) {
    if (thresholds.unqualified.includes(data[field])) return "unqualified";
  }
  for (const [field, thresholds] of Object.entries(RULES)) {
    if (thresholds.review.includes(data[field])) return "review";
  }
  return "qualified";
}
