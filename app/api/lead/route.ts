import { NextResponse } from "next/server";

const fields=["fundingAmount","timeInBusiness","monthlyRevenue","creditRange","industry","state","urgency","firstName","lastName","businessName","email","phone"] as const;

export async function POST(request:Request){
  try{
    const body=await request.json();
    if(!body||typeof body!=="object") return NextResponse.json({ok:false},{status:400});
    const record=body as Record<string,unknown>;
    const missing=fields.some(f=>typeof record[f]!=="string"||!(record[f] as string).trim());
    if(missing) return NextResponse.json({ok:false,error:"Missing required fields."},{status:400});

    const webhook=process.env.LEAD_WEBHOOK_URL;
    if(!webhook){
      console.error("LEAD_WEBHOOK_URL is not configured");
      return NextResponse.json({ok:false,error:"Lead intake is not configured."},{status:503});
    }

    const payload={
      leadId:crypto.randomUUID(),
      createdAt:new Date().toISOString(),
      landingPage:"/check-options/",
      ...Object.fromEntries(fields.map(f=>[f,(record[f] as string).trim()])),
      qualificationStatus:"new"
    };

    const forwarded=await fetch(webhook,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(payload),
      cache:"no-store"
    });
    if(!forwarded.ok) return NextResponse.json({ok:false,error:"Lead delivery failed."},{status:502});
    return NextResponse.json({ok:true});
  }catch{
    return NextResponse.json({ok:false},{status:400});
  }
}