import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const us = "US";

export default function middleware(req: NextRequest) {
  const country = req.geo?.country;

  if (country === us) {
    return NextResponse.redirect("./us");
  }
}
