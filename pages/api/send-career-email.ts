import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, position, resumeUrl } = req.body;

    await resend.emails.send({
      from: 'Lahi Careers <no-reply@lahi.io>',
      to: 'contact@lahi.io',
      subject: `New Job Application - ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Job Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><a href="${resumeUrl}" target="_blank">📎 View Resume</a></p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Application sent successfully!' });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to send application', error: error.message });
  }
}
