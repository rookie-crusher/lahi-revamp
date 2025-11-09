import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;
    console.log('Contact form received:', { name, email, subject, message });

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'Lahi Contact <no-reply@lahi.io>',
      to: 'contact@lahi.io',
      subject: `Contact: ${subject} (from ${name})`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h3>New message from your website contact form</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully ✅' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({
      message: 'Failed to send email ❌',
      error: error && error.message ? error.message : error,
    });
  }
}
