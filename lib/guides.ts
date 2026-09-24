import type { RichPage } from "@/lib/pages";

export type GuidePage = RichPage & {
  category: string;
  breadcrumb: { href: string; label: string }[];
};

export const guidePages: Record<string, GuidePage> = {
  "how-much-line-of-credit-can-my-business-get": {
    title: "How Much Line of Credit Can My Business Get?",
    description: "Learn how lenders determine commercial line of credit limits and which business factors most influence the approved amount.",
    h1: "How Much Line of Credit Can My Business Get?",
    intro: "The credit limit a lender will approve depends on several interconnected factors: your business revenue, time in operation, credit profile, existing obligations, and the collateral or guarantees you can provide. Most lenders set limits as a multiple of monthly revenue or as a percentage of eligible receivables.",
    category: "Qualifying",
    breadcrumb: [
      { href: "/guides/", label: "Guides" },
      { href: "/guides/how-much-line-of-credit-can-my-business-get/", label: "How Much Can My Business Get?" },
    ],
    sections: [
      {
        heading: "Revenue-based sizing",
        body: "Many lenders benchmark credit limits to monthly gross revenue. Common formulas range from one to six times monthly revenue, though the exact multiple depends on the lender, the industry, and overall risk profile. A business with $100,000 in monthly revenue might qualify for a line between $100,000 and $300,000 with a typical lender — though qualification is never guaranteed.",
        note: "Revenue-based multiples vary widely by lender and program. The figures above are illustrative ranges, not guarantees.",
      },
      {
        heading: "Time in business",
        body: "Lenders use operating history as a proxy for stability. Businesses with two or more years of history generally have access to a broader range of programs. Newer businesses — under one year — often face stricter limits or higher pricing if they qualify at all.",
        list: [
          "Under 6 months: Very limited options; most lenders decline",
          "6–12 months: Some alternative lenders may consider; stricter terms typical",
          "1–2 years: Broader access; still restricted from some bank programs",
          "2+ years: Access to most standard programs",
        ],
      },
      {
        heading: "Credit profile",
        body: "Personal credit score (for personally-guaranteed facilities) and business credit history both affect the limit. A score above 700 typically unlocks the widest range of programs. Scores below 600 significantly narrow options and may require collateral to compensate.",
      },
      {
        heading: "Existing obligations",
        body: "Lenders review total debt service: outstanding loans, other lines of credit, equipment financing, and similar obligations. High existing debt relative to revenue reduces the limit a lender will approve — and may cause a decline even when other factors are strong.",
      },
      {
        heading: "Collateral and personal guarantees",
        body: "Secured facilities backed by business receivables, inventory, or equipment can often support higher limits than unsecured structures. Personal guarantees can also unlock larger amounts, since they extend the lender's recourse to the owner's personal assets.",
        note: "A personal guarantee means your personal assets may be at risk if the business cannot repay.",
      },
      {
        heading: "Industry risk",
        body: "Some industries carry higher perceived risk — construction, restaurants, retail, and seasonal businesses often see more conservative limits or stricter underwriting. Professional services, healthcare, and B2B businesses are generally viewed more favorably.",
      },
      {
        heading: "Worked example",
        body: "The following is an illustrative scenario combining multiple qualification factors.",
        example: "A landscaping company with 3 years in business, $80,000 in monthly revenue, and a 680 personal credit score might receive offers ranging from $50,000 to $150,000 depending on the lender, whether a personal guarantee is required, and whether the facility is secured. These are illustrative figures — actual terms depend on the provider.",
      },
    ],
    faq: [
      {
        q: "Can I get a line of credit without a personal guarantee?",
        a: "Some lenders offer no-personal-guarantee programs, but they typically require strong revenue, long operating history, and good business credit. They are less common and may carry higher rates.",
      },
      {
        q: "Does applying for a line of credit hurt my credit score?",
        a: "Pre-qualification checks are typically soft pulls that do not affect credit. Formal applications generally involve a hard pull that may have a small, temporary effect on personal credit.",
      },
      {
        q: "How long does it take to increase an approved limit?",
        a: "Many lenders review limits after 6–12 months of on-time draws and repayments. Demonstrating consistent usage and repayment is the most reliable path to a higher limit.",
      },
    ],
    relatedLinks: [
      { href: "/requirements/", label: "Qualification requirements" },
      { href: "/credit-score/", label: "Credit score requirements" },
      { href: "/revenue-requirements/", label: "Revenue requirements" },
      { href: "/check-options/", label: "Check your options" },
    ],
    ctaText: "Check Your Options",
  },

  "how-lenders-evaluate-businesses": {
    title: "How Lenders Evaluate Businesses for a Line of Credit",
    description: "Understand the underwriting criteria lenders use when reviewing a commercial line of credit application.",
    h1: "How Lenders Evaluate Businesses for a Commercial Line of Credit",
    intro: "Lenders assess businesses through a combination of financial metrics, business characteristics, and risk factors. Understanding how they evaluate applications helps you prepare stronger documentation and set realistic expectations before you apply.",
    category: "Underwriting",
    breadcrumb: [
      { href: "/guides/", label: "Guides" },
      { href: "/guides/how-lenders-evaluate-businesses/", label: "How Lenders Evaluate Businesses" },
    ],
    sections: [
      {
        heading: "The five Cs of credit",
        body: "Traditional underwriting frameworks organize risk around five factors: capacity (ability to repay), capital (business equity and reserves), character (credit history and management), collateral (assets securing the facility), and conditions (economic environment and intended use). Not every lender applies all five equally, but these concepts underlie most evaluation processes.",
      },
      {
        heading: "Financial documentation reviewed",
        body: "Most lenders request bank statements covering 3–12 months, business tax returns for 1–2 years, a profit and loss statement, and sometimes a balance sheet. They use these to verify revenue, assess cash flow trends, and identify existing obligations.",
        list: [
          "3–12 months of business bank statements",
          "1–2 years of business tax returns",
          "Profit and loss statement (year-to-date)",
          "Balance sheet (sometimes required for larger amounts)",
          "Accounts receivable aging (for asset-based facilities)",
        ],
      },
      {
        heading: "Revenue and cash flow analysis",
        body: "Lenders look for consistent revenue and positive average daily balances. Irregular deposits, large unexplained withdrawals, or frequent overdrafts can raise concerns. Many lenders use bank statement cash flow rather than tax-return income as their primary sizing metric.",
      },
      {
        heading: "Credit evaluation",
        body: "For personally-guaranteed facilities, the owner's personal credit score is typically pulled. Many lenders have minimum score thresholds — commonly 600–650 for alternative lenders and 680+ for traditional banks. Business credit reports from Dun & Bradstreet, Experian Business, or Equifax Business may also be reviewed.",
      },
      {
        heading: "Debt service coverage",
        body: "Lenders calculate whether the business generates enough cash flow to service all existing debt obligations plus the proposed new facility. A debt service coverage ratio (DSCR) below 1.0 means the business cannot cover its obligations from operating income — most lenders require 1.2 or higher.",
        example: "A business with $20,000 in monthly net operating income and $15,000 in existing monthly debt payments has a DSCR of 1.33 — above most lenders' minimums. Adding a new facility with a $2,000 monthly payment would bring it to 1.18, which may push below some lenders' thresholds.",
      },
      {
        heading: "Industry and use of funds",
        body: "Lenders may restrict certain industries — cannabis, gambling, adult entertainment, and some construction categories are often excluded by conventional lenders. The stated purpose of funds (working capital, inventory, seasonal bridge) can also affect approval and terms.",
      },
    ],
    faq: [
      {
        q: "What is the minimum credit score for a commercial line of credit?",
        a: "Requirements vary by lender. Alternative lenders often accept scores as low as 600–625. Traditional banks typically require 680 or higher. Better scores generally mean better pricing and higher limits.",
      },
      {
        q: "Do lenders check personal credit for a business line of credit?",
        a: "Yes, for most small business facilities that require a personal guarantee. Larger, established businesses may qualify for facilities without personal credit review, but this is less common.",
      },
      {
        q: "How far back do lenders look at bank statements?",
        a: "Most lenders request 3–6 months of statements. Larger facilities and traditional bank programs may require 12 months or more.",
      },
    ],
    relatedLinks: [
      { href: "/credit-score/", label: "Credit score requirements" },
      { href: "/documents-needed/", label: "Documents needed to apply" },
      { href: "/approval-time/", label: "How long approval takes" },
      { href: "/check-options/", label: "Check your options" },
    ],
    ctaText: "Check Your Options",
  },

  "what-is-a-revolving-line-of-credit": {
    title: "What Is a Revolving Line of Credit for Business?",
    description: "Understand how a revolving line of credit works, how it differs from a term loan, and when it makes sense for a business.",
    h1: "What Is a Revolving Business Line of Credit?",
    intro: "A revolving line of credit is a flexible financing structure that lets a business draw funds, repay the balance, and draw again — up to an approved limit. Unlike a term loan, the credit replenishes as it is repaid, making it suited for ongoing or cyclical funding needs rather than one-time purchases.",
    category: "Fundamentals",
    breadcrumb: [
      { href: "/guides/", label: "Guides" },
      { href: "/guides/what-is-a-revolving-line-of-credit/", label: "What Is a Revolving Line of Credit?" },
    ],
    sections: [
      {
        heading: "How revolving credit works",
        body: "When a lender approves a $200,000 revolving line, the business has access to up to $200,000. If it draws $50,000, available credit drops to $150,000. As the $50,000 is repaid, available credit returns to $200,000. The business can repeat this cycle indefinitely (subject to the lender's terms and the facility remaining in good standing).",
      },
      {
        heading: "Draw period and repayment",
        body: "Most revolving lines have an active draw period — typically one to five years. During this period, the business can draw and repay freely. Some facilities convert to a term loan at the end of the draw period; others renew annually subject to lender review.",
      },
      {
        heading: "Interest and fees",
        body: "Interest accrues only on the outstanding balance, not the full credit limit. This makes a revolving line potentially more cost-efficient than a term loan when the business does not need the full amount continuously. Fees may include an origination fee, draw fee (charged each time funds are accessed), annual maintenance fee, or unused line fee.",
        note: "An unused line fee charges a small percentage on the undrawn portion of the credit limit. Read the agreement carefully to understand all cost components.",
      },
      {
        heading: "Revolving vs. non-revolving",
        body: "A non-revolving line or installment line can also provide multiple draws, but available credit does not replenish after repayment. Once drawn, those funds are gone from the facility. Revolving credit is the more flexible structure and is more commonly used for ongoing working capital.",
      },
      {
        heading: "When revolving credit fits well",
        body: "Revolving lines work best for businesses with variable, ongoing needs: managing cash flow gaps between receivables and payables, funding seasonal inventory builds, bridging payroll during slow periods, or covering operating costs during a growth phase.",
        list: [
          "Cash flow timing gaps",
          "Seasonal inventory and staffing ramp-up",
          "Unexpected operating expenses",
          "Short-term bridge between project invoice and payment",
        ],
      },
    ],
    faq: [
      {
        q: "Is a business credit card a revolving line of credit?",
        a: "Functionally, yes — a business credit card operates on revolving principles. But credit cards carry very different terms, interest structures, and fee profiles compared to a commercial line of credit.",
      },
      {
        q: "Does unused revolving credit hurt my business credit?",
        a: "Unused revolving credit does not directly hurt business credit scores, and high available credit relative to utilization can benefit scores. However, carrying a high unused line on your books may affect how other lenders calculate your total debt capacity.",
      },
      {
        q: "Can a lender reduce or close my revolving line?",
        a: "Yes. Lenders can reduce limits, freeze draws, or close a facility — especially during an annual review if business performance has declined or credit has deteriorated. Facilities are typically not permanent commitments.",
      },
    ],
    relatedLinks: [
      { href: "/how-it-works/", label: "How it works" },
      { href: "/commercial-line-of-credit-vs-business-loan/", label: "Line vs. term loan" },
      { href: "/working-capital/", label: "Working capital financing" },
      { href: "/check-options/", label: "Check your options" },
    ],
    ctaText: "Check Your Options",
  },

  "business-line-of-credit-underwriting": {
    title: "Business Line of Credit Underwriting: What Lenders Look For",
    description: "A practical overview of the underwriting process for a business line of credit, including what documents are reviewed and how decisions are made.",
    h1: "Business Line of Credit Underwriting Explained",
    intro: "Underwriting is the process by which a lender assesses the risk of extending credit to your business. It involves reviewing financial statements, credit history, business profile, and proposed use of funds to determine whether to approve a facility and on what terms.",
    category: "Underwriting",
    breadcrumb: [
      { href: "/guides/", label: "Guides" },
      { href: "/guides/business-line-of-credit-underwriting/", label: "Business Line of Credit Underwriting" },
    ],
    sections: [
      {
        heading: "Automated vs. manual underwriting",
        body: "Most alternative and online lenders use automated underwriting for smaller facilities — algorithms score applications based on bank statement data, credit scores, and application inputs and return decisions in minutes or hours. Traditional banks and larger facilities more commonly use manual underwriting with a loan officer reviewing the full file, a process that takes days to weeks.",
      },
      {
        heading: "Bank statement analysis",
        body: "Bank statement review is central to most underwriting processes. Underwriters calculate average daily balance, monthly deposits (as a proxy for revenue), deposit consistency, and negative day patterns. A business with volatile or declining deposits may face stricter terms even if the average looks acceptable.",
        list: [
          "Average daily balance (liquidity cushion)",
          "Monthly deposit volume (revenue verification)",
          "Deposit consistency month-to-month",
          "Number of negative or near-zero days",
          "Evidence of existing loan or MCA payments",
        ],
      },
      {
        heading: "Tax return review",
        body: "For larger facilities or traditional bank programs, tax returns provide a longer historical view of revenue and profitability. Significant discrepancies between tax returns and bank statement deposits may prompt additional questions or documentation requests.",
      },
      {
        heading: "Stacking and existing obligations",
        body: "Lenders look for evidence of existing merchant cash advances (MCAs) or multiple simultaneous loan payments — sometimes called 'stacking.' Multiple simultaneous fundings are viewed as a high-risk signal, and many lenders will decline or reduce limits when they detect existing daily or weekly automatic payments.",
      },
      {
        heading: "Underwriting conditions and stipulations",
        body: "Approval often comes with conditions: a requirement to provide additional documentation, pay down existing debt, or pledge specific collateral before funding. These are listed in a commitment letter or term sheet.",
        example: "An approval letter might state: 'Approved for $75,000 subject to: (1) evidence that the existing $30,000 MCA is paid off at closing, and (2) personal guarantee from the primary owner.' This is an illustrative example — actual conditions vary by lender.",
      },
    ],
    faq: [
      {
        q: "How long does underwriting take for a business line of credit?",
        a: "Online and alternative lenders often complete underwriting in 24–72 hours. Traditional bank programs typically take 1–4 weeks depending on the size of the facility and completeness of the application file.",
      },
      {
        q: "Can I speed up the underwriting process?",
        a: "Yes. Having all required documents ready before applying — bank statements, tax returns, P&L, and business formation documents — significantly reduces back-and-forth and shortens the process.",
      },
      {
        q: "What causes an underwriting decline?",
        a: "Common decline reasons include insufficient revenue, low credit score, too-short time in business, high existing debt load, negative bank statement patterns, or industry restrictions. Most lenders will provide a reason code on decline.",
      },
    ],
    relatedLinks: [
      { href: "/documents-needed/", label: "Documents needed to apply" },
      { href: "/how-to-apply/", label: "How to apply" },
      { href: "/approval-time/", label: "How long approval takes" },
      { href: "/check-options/", label: "Check your options" },
    ],
    ctaText: "Check Your Options",
  },

  "line-of-credit-for-cash-flow": {
    title: "Using a Line of Credit for Business Cash Flow",
    description: "How a commercial line of credit can help manage cash flow gaps, timing mismatches, and short-term operating needs.",
    h1: "Using a Business Line of Credit for Cash Flow Management",
    intro: "Cash flow gaps — the space between when expenses are due and when revenue arrives — are one of the most common reasons businesses seek a line of credit. A revolving line can provide a buffer that lets you meet obligations on time without disrupting operations.",
    category: "Use Cases",
    breadcrumb: [
      { href: "/guides/", label: "Guides" },
      { href: "/guides/line-of-credit-for-cash-flow/", label: "Line of Credit for Cash Flow" },
    ],
    sections: [
      {
        heading: "The cash flow timing problem",
        body: "Many businesses operate profitably on paper but struggle with timing: invoices go out, but payment arrives 30, 60, or 90 days later. Meanwhile, payroll, rent, and supplier payments are due now. A line of credit bridges that gap — the business draws what it needs, then repays when receivables come in.",
      },
      {
        heading: "How a line functions as a cash flow tool",
        body: "Unlike a term loan (which provides a lump sum with fixed monthly payments), a line of credit lets you borrow only what you need and repay as soon as revenue arrives. This can keep interest costs lower during months when the gap is small and provide more capacity when it widens.",
        example: "A staffing company invoices clients net-60 but pays its contractors weekly. In a strong month, the company might draw $40,000 in mid-month and repay it when client payments arrive 6 weeks later. If the line carries a 12% annual rate, the interest on a $40,000 draw for 45 days is approximately $600 — an illustrative estimate, not a quote.",
      },
      {
        heading: "Better uses vs. poor uses",
        body: "A line of credit works well as a short-term bridge for predictable cash flow timing mismatches. It works less well as a substitute for long-term capital — using a revolving line to fund permanent equipment, expansion, or chronic operating losses typically leads to a maxed-out facility and difficulty repaying.",
        list: [
          "Better: Bridge between invoice issuance and payment receipt",
          "Better: Seasonal inventory pre-purchase ahead of peak revenue",
          "Better: Short-term payroll coverage during slow months",
          "Caution: Long-term capital investment (use a term loan instead)",
          "Caution: Covering sustained operating losses (address the underlying issue)",
        ],
      },
      {
        heading: "Keeping a line available vs. drawing it",
        body: "Many businesses keep a line in reserve and use it only when needed. This can make sense: the option has value even unused. But facilities with annual renewal requirements or usage minimums may require at least occasional draws to remain in good standing.",
        note: "Review the facility agreement for any minimum draw requirements, annual review conditions, or inactive facility fees.",
      },
    ],
    faq: [
      {
        q: "Is a line of credit better than invoice factoring for cash flow?",
        a: "Both solve the receivables timing problem, but differently. Factoring sells specific invoices at a discount for immediate cash; a line of credit is a general-purpose facility. Factoring can be faster for businesses that don't qualify for a line, but the effective cost is often higher.",
      },
      {
        q: "How quickly can I draw on a line of credit once it's approved?",
        a: "Draw timing varies by lender. Some online lenders can fund a draw in 24 hours or less. Traditional bank facilities may require 2–5 business days for each draw.",
      },
      {
        q: "What happens if I can't repay a draw on time?",
        a: "Late or missed payments can trigger late fees, default interest rates, facility suspension, and negative credit reporting. Review the default terms in your agreement before drawing.",
      },
    ],
    relatedLinks: [
      { href: "/working-capital/", label: "Working capital financing" },
      { href: "/how-it-works/", label: "How it works" },
      { href: "/calculator/", label: "Estimate your cost" },
      { href: "/check-options/", label: "Check your options" },
    ],
    ctaText: "Check Your Options",
  },

  "line-of-credit-for-inventory": {
    title: "Using a Business Line of Credit for Inventory Financing",
    description: "How businesses use a commercial line of credit to fund inventory purchases, manage seasonal stock, and bridge supplier payment terms.",
    h1: "Using a Business Line of Credit to Fund Inventory",
    intro: "Inventory purchases often require payment upfront or on short terms while revenue from selling that inventory arrives weeks or months later. A line of credit can fund the purchase, then be repaid as inventory converts to sales.",
    category: "Use Cases",
    breadcrumb: [
      { href: "/guides/", label: "Guides" },
      { href: "/guides/line-of-credit-for-inventory/", label: "Line of Credit for Inventory" },
    ],
    sections: [
      {
        heading: "The inventory funding cycle",
        body: "The cycle works in three stages: purchase inventory on credit, sell the inventory to generate revenue, repay the line. The faster inventory turns, the more cost-efficient the financing — a product that sells in 30 days carries far less interest cost than one sitting in a warehouse for 6 months.",
        example: "A wholesale distributor purchases $80,000 of product on net-30 supplier terms. It draws from its line to fund the purchase, sells the inventory over the next 45 days, collects payment, and repays the draw. At 15% annual rate, a $80,000 draw for 45 days carries roughly $1,479 in interest — an illustrative estimate only.",
      },
      {
        heading: "Inventory turns and cost efficiency",
        body: "Before using a line for inventory, model the carrying cost against the expected margin. If inventory turns in 30 days and the line costs 1% per month, the cost of funding each cycle is manageable. If inventory turns in 120 days and the margin is thin, the interest cost may significantly erode profit.",
      },
      {
        heading: "Seasonal inventory pre-buys",
        body: "Seasonal businesses often need to build inventory 60–90 days before peak revenue. A line can fund the build, then be repaid when the season's sales arrive. This is a common and appropriate use case, but it requires enough credit limit to absorb the full pre-buy.",
        list: [
          "Retail: Q4 holiday inventory built in September–October",
          "Landscaping/outdoor: Spring equipment and supply stock",
          "Agriculture: Seed and fertilizer before planting season",
          "Tourism: Staffing and supply build-up before peak travel season",
        ],
      },
      {
        heading: "Supplier negotiation leverage",
        body: "Access to a credit line can also enable early payment discounts from suppliers. A supplier offering 2% off net-30 invoices for payment within 10 days effectively offers a 36% annualized return on that early payment. Funding that early payment from a 15% line still yields a net gain.",
      },
    ],
    faq: [
      {
        q: "Can I use a line of credit for any type of inventory?",
        a: "Most commercial lines are general-purpose and can be used for inventory. Some asset-based lines specifically use eligible inventory as collateral and may restrict what qualifies. Review the facility agreement for any use restrictions.",
      },
      {
        q: "What if the inventory doesn't sell as fast as expected?",
        a: "Slower-than-expected inventory turns mean the draw stays outstanding longer and interest costs rise. Plan for realistic sell-through timelines, not optimistic ones, when sizing a draw.",
      },
      {
        q: "Is a line of credit better than a purchase order loan for inventory?",
        a: "PO financing is typically more expensive but can cover larger, specific purchase orders without requiring an established credit facility. A line of credit offers more flexibility for ongoing inventory needs once approved.",
      },
    ],
    relatedLinks: [
      { href: "/working-capital/", label: "Working capital financing" },
      { href: "/line-of-credit-for-cash-flow/", label: "Line of credit for cash flow" },
      { href: "/calculator/", label: "Estimate your cost" },
      { href: "/check-options/", label: "Check your options" },
    ],
    ctaText: "Check Your Options",
  },

  "line-of-credit-for-seasonal-business": {
    title: "Line of Credit for Seasonal Businesses",
    description: "How seasonal businesses can use a commercial line of credit to manage off-peak cash flow and fund pre-season preparation.",
    h1: "How Seasonal Businesses Use a Line of Credit",
    intro: "Seasonal businesses face an amplified version of the cash flow challenge: months of high revenue followed by months of minimal income, with fixed costs continuing year-round. A line of credit can smooth that cycle — funding off-season operations and pre-season preparation, then being repaid from peak-season revenue.",
    category: "Use Cases",
    breadcrumb: [
      { href: "/guides/", label: "Guides" },
      { href: "/guides/line-of-credit-for-seasonal-business/", label: "Line of Credit for Seasonal Business" },
    ],
    sections: [
      {
        heading: "The seasonal cash flow problem",
        body: "A ski resort generates most of its revenue in winter but pays rent, insurance, and maintenance year-round. A beach resort faces the reverse. A landscaping company earns heavily April–October and nearly nothing in winter. For each, the problem is the same: revenue arrives in lumps while expenses are continuous.",
      },
      {
        heading: "Pre-season draw and post-season repayment",
        body: "The most common seasonal pattern is drawing during the ramp-up period (buying inventory, hiring staff, marketing before the season), then repaying out of peak-season cash flow. This requires careful sizing: the draw needs to cover the full pre-season need, and peak revenue needs to be large enough to repay it comfortably.",
        example: "A pumpkin-patch operator draws $35,000 in August to purchase produce, supplies, and staff 3 part-time employees. September and October revenue totals $120,000. After covering variable costs, the operator repays the line draw in November. The interest at 18% for 90 days on $35,000 is approximately $1,575 — illustrative only.",
      },
      {
        heading: "Off-season operating expense coverage",
        body: "Some businesses draw during the off-season simply to cover fixed costs: rent, insurance, year-round staff retention, and utilities. This is a higher-risk use case — it creates ongoing reliance on the line and requires that seasonal revenue is reliably sufficient to repay accumulated draws each year.",
        note: "Using a line to cover chronic operating losses — rather than timing mismatches — often signals that the business model needs restructuring, not more credit.",
      },
      {
        heading: "Lender perspective on seasonal businesses",
        body: "Lenders that work with seasonal businesses generally understand the pattern, but they want to see evidence that peak revenue reliably exceeds peak draw. Bank statements showing two or three complete seasonal cycles are often required. First-year seasonal businesses face the most skepticism.",
      },
      {
        heading: "Sizing the line correctly",
        body: "Under-sizing is a common mistake: a line that covers only part of the pre-season need leaves the business in a bind at the worst moment. Over-sizing carries annual fees and the temptation to over-borrow. Model the full worst-case pre-season need and plan for the line to cover it.",
        list: [
          "Map the cash flow calendar month by month for a full year",
          "Identify the maximum cumulative deficit (the peak draw need)",
          "Add a 20–30% buffer for unexpected costs",
          "Confirm that expected peak-season revenue exceeds total projected draws",
        ],
      },
    ],
    faq: [
      {
        q: "Can I get a line of credit if my business is only open part of the year?",
        a: "Yes, seasonal businesses can qualify for lines of credit. Lenders typically want to see at least two full seasonal cycles of bank statements and clear evidence of repeatable peak-season revenue.",
      },
      {
        q: "Do lenders charge fees during the off-season when I'm not drawing?",
        a: "Some facilities carry an unused line fee or annual maintenance fee. Review the agreement carefully — these fees continue regardless of draw activity.",
      },
      {
        q: "What if peak season is below expectations and I can't repay?",
        a: "Communication with the lender before a missed payment is important. Some lenders offer seasonal modifications or payment deferrals. Missing payments without notice typically triggers default, late fees, and negative credit impacts.",
      },
    ],
    relatedLinks: [
      { href: "/line-of-credit-for-cash-flow/", label: "Line of credit for cash flow" },
      { href: "/line-of-credit-for-inventory/", label: "Line of credit for inventory" },
      { href: "/working-capital/", label: "Working capital financing" },
      { href: "/check-options/", label: "Check your options" },
    ],
    ctaText: "Check Your Options",
  },
};

export const guideSlugs = Object.keys(guidePages);
