import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, service, message } = req.body;
    console.log('Quotation request received:', { name, email, service, message });

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'Lahi Quotes <no-reply@lahi.io>',
      to: 'contact@lahi.io',
      subject: `New Quote Request - ${service} (from ${name})`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h3>New Quote Request Received</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Requirements:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Quotation request received successfully!' });
  } catch (error: any) {
    console.error('Quotation error:', error);
    return res.status(500).json({ 
      message: 'Failed to process quotation', 
      error: error.message || error 
    });
  }
}
