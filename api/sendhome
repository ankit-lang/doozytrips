import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { destination, date, tourType } = req.body;

    const resend = new Resend('re_69Z7nBVY_QFJ9AVStxHz74zmhDaePRisE');

    await resend.emails.send({
      from: "reservations@doozytrips.com", // or your verified domain email
      to: "reservations@doozytrips.com", // Replace with your GoDaddy email
      subject: "New Contact Form Submission " ,
      html: `
       <p>A new inquiry has been submitted for a travel trip.</p>
        <ul>
          <li><strong>Destination:</strong> ${destination}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Tour Type:</strong> ${tourType}</li>
        </ul>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
