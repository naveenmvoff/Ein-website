import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET() {
  try {
    const timestamp = Math.floor(Date.now() / 1000);
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!apiSecret) {
      return NextResponse.json(
        { error: "Cloudinary API secret not configured" },
        { status: 500 }
      );
    }

    // Create the signature string
    const signatureString = `timestamp=${timestamp}${apiSecret}`;
    const signature = crypto
      .createHash("sha1")
      .update(signatureString)
      .digest("hex");

    return NextResponse.json({
      signature,
      timestamp,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to generate signature" },
      { status: 500 }
    );
  }
}
