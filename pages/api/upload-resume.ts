import type { NextApiRequest, NextApiResponse } from 'next';
import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // allow up to 10 MB
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { file, fileName } = req.body;

    if (!file || !fileName) {
      return res.status(400).json({ error: 'Missing file data' });
    }

    // Convert base64 to Buffer
    const buffer = Buffer.from(file, 'base64');

    // Upload to Vercel Blob
    const { url } = await put(fileName, buffer, {
      access: 'public',
    });

    return res.status(200).json({ success: true, url });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Upload failed' });
  }
}
