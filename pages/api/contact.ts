// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  messageStatusRes: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { fullname, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_MAIL_USER,
      to: process.env.NEXT_PUBLIC_MAIL_USER,
      subject: `Contact form from ${fullname}`,
      html: `<h4>You have new contact form submission</h4>
      <p><strong>Name: </strong>${fullname}</p>
      <p><strong>Email: </strong>${email}</p>
      <p><strong>Subject: </strong>${subject}</p>
      <p><strong>Message: </strong><br>${message}</p>`,
    });

    res.status(200).json({ messageStatusRes: "success" });
  } catch (err) {
    res.status(400).json({ messageStatusRes: "error" });
  }
}
