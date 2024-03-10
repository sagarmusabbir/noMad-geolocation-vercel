import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const us = "US";
const bd = "BD";
const gb = "GB";
const ae = "AE";

export default function middleware(req: NextRequest) {
  const country = req.geo?.country;

  if (req.nextUrl.pathname === "/bd") {
    return NextResponse.next();
  }

  if (country === us) {
    return NextResponse.redirect("/us");
  }

  if (country === bd) {
    return NextResponse.redirect("/bd");
  }

  if (country === ae) {
    return NextResponse.redirect("/ae");
  }

  if (country === gb) {
    return NextResponse.redirect("/gb");
  }
}
