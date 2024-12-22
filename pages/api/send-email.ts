import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_PASSWORD, // App password (not your regular password)
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    try {
      // Send email to you
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: `New Message from ${name}: ${subject}`,
        text: message,
        html: `<p>${message}</p><p>From: ${email}</p>`,
      });

      // Send confirmation email to the user
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "Message Received Successfully!",
        text: "Thank you for reaching out. Your message has been received.",
        html: `<p>Thank you, ${name}, for reaching out. Your message has been received successfully.</p>`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
