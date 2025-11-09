import { Resend } from 'resend';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

// Disable Next.js body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {

    // Parse form data (including file)
    const form = formidable({ multiples: false });
    const [fields, files] = await form.parse(req);
    console.log('Career form fields:', fields);
    console.log('Career form files:', files);

    const name = fields.name?.[0] || '';
    const email = fields.email?.[0] || '';
    const phone = fields.phone?.[0] || '';
    const linkedin = fields.linkedin?.[0] || '';
    const portfolio = fields.portfolio?.[0] || '';
    const resumeFile = files.resume?.[0];

    if (!name || !email || !phone || !resumeFile) {
      console.error('Missing required fields:', { name, email, phone, resumeFile });
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Read the uploaded resume file
    const resumePath = resumeFile.filepath;
    console.log('Resume file path:', resumePath);
    const fileBuffer = fs.readFileSync(resumePath);

    // Send email with attachment via Resend
    await resend.emails.send({
      from: 'Lahi Careers <no-reply@lahi.io>',
      to: 'contact@lahi.io',
      subject: `New Career Application from ${name}`,
      html: `
        <h2>New Application Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${linkedin ? `<p><strong>LinkedIn:</strong> ${linkedin}</p>` : ''}
        ${portfolio ? `<p><strong>Portfolio:</strong> ${portfolio}</p>` : ''}
        <p>A resume file is attached below.</p>
      `,
      attachments: [
        {
          filename: resumeFile.originalFilename || 'resume.pdf',
          content: fileBuffer.toString('base64'),
        },
      ],
    });

    return res.status(200).json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error('Error in careers API:', err);
    return res.status(500).json({ message: 'Internal server error', error: err });
  }
}
