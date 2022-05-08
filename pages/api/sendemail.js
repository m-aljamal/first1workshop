import nodemailer from "nodemailer";

export default function sendEmail(req, res) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    secure: true,
    port: 465,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: process.env.NEXT_PUBLIC_EMAIL_USER,
    subject: "New Message from first1workshop Website",
    text: `
    Name: ${name} 
    Email: ${email}
    Message:  ${message}
    `,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Could not send email", err });
    }
    console.log(info);
    return res.status(200).json({ message: "Email sent" });
  });
}
