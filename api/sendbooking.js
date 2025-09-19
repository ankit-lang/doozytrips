import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { destination,date,tourType } = req.body;

    const resend = new Resend('re_69Z7nBVY_QFJ9AVStxHz74zmhDaePRisE');

    await resend.emails.send({
      from: "reservations@doozytrips.com", // or your verified domain email
      to: "reservations@doozytrips.com", // Replace with your GoDaddy email
      subject: "New  Form Submission " ,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>destination:</strong>${destination}  </p>
        <p><strong>date:</strong> ${date}</p>
        <p><strong>tourType:</strong>${tourType}</p>
        
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
