import sgMail from '@sendgrid/mail';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, phone, token } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'email field is required' }, { status: 400 });
    }

    if (!token) {
      return NextResponse.json({ success: false, error: 'No token' }, { status: 400 });
    }
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
      console.log(data, 'data');
      return NextResponse.json({ success: false, error: 'Captcha failed' }, { status: 400 });
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    await sgMail.send({
      to: process.env.SENDGRID_TO!,
      from: process.env.SENDGRID_FROM!,
      subject: `New message from ${name}`,
      text: `From: ${name} \n
             email:<${email}>\n
             phone: ${phone}\n
             Finde us from:${message}`,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: 'Sending error' }, { status: 500 });
  }
}
