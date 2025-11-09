import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'Lahi Contact <no-reply@lahi.io>',
      to: 'contact@lahi.io',
      subject: `New Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h3>New message from your website contact form</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully ✅' });
  } catch (error: unknown) {
    console.error('Email send error:', error);
    return res.status(500).json({
      message: 'Failed to send email ❌',
      error: (error as Error).message || error,
    });
  }
}
