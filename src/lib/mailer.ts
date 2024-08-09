import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendMail = async (
  email: string,
  subject: string,
  text: string,
) => {
  await transporter.sendMail({
    to: email,
    subject,
    text,
  });
};
