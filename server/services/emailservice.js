import transporter from "../config/email.js";

export const sendEmail = async (to, subject, text) => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html: text,
  });
  console.log("Email sent:", info.messageId);
};
