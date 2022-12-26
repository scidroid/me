import type { NextApiRequest, NextApiResponse } from "next";

import { render } from "@react-email/render";
import ContactEmail from "emails/Contact";
import prisma from "lib/prisma";
import { contactSchema } from "lib/validation";
import nodemailer, { SendMailOptions } from "nodemailer";
import mg from "nodemailer-mailgun-transport";

type Props = {
  name: string;
  email: string;
  message: string;
};

const transporter = nodemailer.createTransport(
  mg({
    auth: {
      api_key: process.env.MAILGUN_API_KEY as string,
      domain: "n.scidroid.co"
    }
  })
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (contactSchema.safeParse(req.body).success === false) {
      res.status(400).send({ message: "Bad request" });
    }

    const { name, email, message } = req.body as Props;

    const contact = await prisma.contact.create({
      data: req.body
    });

    const emailHtml = render(
      <ContactEmail name={name} message={message} email={email} />
    );

    const mailOptions: SendMailOptions = {
      from: "Juan Almanza <hi@scidroid.co>",
      to: [email, "scidroidgames@gmail.com"],
      subject: "Thank you for contacting me",
      html: emailHtml
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json(contact);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
