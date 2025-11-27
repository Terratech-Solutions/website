import sgMail from '@sendgrid/mail';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.email({ message: 'Invalid email address' }),
  message: z.string().min(1, 'Message is required').max(1000, 'Message is too long'),
  phone: z.string().optional(),
  token: z.string().min(1, 'reCAPTCHA token is required'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body with Zod
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));
      return NextResponse.json(
        { success: false, error: 'Validation failed', errors },
        { status: 400 },
      );
    }

    const { name, email, message, phone, token } = validationResult.data;

    // Verify reCAPTCHA
    const params = new URLSearchParams();
    params.append('secret', process.env.RECAPTCHA_SECRET_KEY!);
    params.append('response', token);

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
      cache: 'no-store',
    });

    const data = await verifyRes.json();

    if (!data.success) {
      console.log('reCAPTCHA verification failed:', data);
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA verification failed' },
        { status: 400 },
      );
    }

    // Configure SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    // Create plain text version
    const textContent = `
New Contact Form Submission
═══════════════════════════════

From: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
────────────────────────────────
${message}
────────────────────────────────

This message was sent via your website contact form.
    `.trim();

    // Send email
    await sgMail.send({
      to: process.env.SENDGRID_TO!,
      from: process.env.SENDGRID_FROM!,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: textContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again later.' },
      { status: 500 },
    );
  }
}
