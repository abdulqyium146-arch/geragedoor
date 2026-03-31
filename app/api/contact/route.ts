import { NextRequest, NextResponse } from 'next/server'

/**
 * Contact / quote request handler.
 *
 * To connect a real email service, install Resend:
 *   npm install resend
 * Then uncomment the Resend block below and set RESEND_API_KEY in your
 * environment variables (Vercel dashboard → Settings → Environment Variables).
 *
 * Resend free tier: 100 emails/day, no credit card required.
 * Sign up at: https://resend.com
 */

// ─── Uncomment to enable Resend email delivery ────────────────────────────
// import { Resend } from 'resend'
// const resend = new Resend(process.env.RESEND_API_KEY)
// ──────────────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, service, propertyType, zip, message } = body

    // Basic server-side validation
    if (!name || !phone || !email || !service || !propertyType || !zip) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // ─── Uncomment to send email via Resend ─────────────────────────────
    // await resend.emails.send({
    //   from: 'quotes@garagedoorsolutionsofcf.com',
    //   to: ['info@garagedoorsolutionsofcf.com'],
    //   replyTo: email,
    //   subject: `New Quote Request — ${service} (${propertyType}) from ${name}`,
    //   text: [
    //     `Name: ${name}`,
    //     `Phone: ${phone}`,
    //     `Email: ${email}`,
    //     `Service: ${service}`,
    //     `Property Type: ${propertyType}`,
    //     `ZIP: ${zip}`,
    //     `Message: ${message ?? 'N/A'}`,
    //   ].join('\n'),
    // })
    // ────────────────────────────────────────────────────────────────────

    // Log submission server-side (visible in Vercel Function Logs)
    console.log('[contact] New quote request:', {
      name,
      phone,
      email,
      service,
      propertyType,
      zip,
      message: message ?? '',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[contact] Error processing request:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
