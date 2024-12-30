// pages/api/feedback.js
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { feedback } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'aadityakolhapure@gmail.com',
      subject: 'Portfolio Feedback',
      text: feedback
    });

    return res.status(200).json({ message: 'Feedback sent successfully' });
  } catch (error) {
    console.error('Error sending feedback:', error);
    return res.status(500).json({ error: 'Failed to send feedback' });
  }
}