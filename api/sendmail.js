import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, subject, message } = req.body;

    const resend = new Resend('re_69Z7nBVY_QFJ9AVStxHz74zmhDaePRisE');

    await resend.emails.send({
      from: "reservations@doozytrips.com", // or your verified domain email
      to: "reservations@doozytrips.com", // Replace with your GoDaddy email
      subject: "New Contact Form Submission " + subject,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
