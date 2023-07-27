import { NextApiRequest, NextApiResponse } from "next";
import { ContactInfo } from "models/contact_info";
import { DataSubmission } from "models/data_submission";
import { insertDataToGooglesheet } from "lib/googlesheet";
import { sendEmail } from "lib/sendmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST":
        const { data, conversion_funnel, ref_url } = req.body as DataSubmission;
        const { email, name, phone } = data as ContactInfo;
        let content = [
          `Agent information`,
          `Agent name: ${name}`,
          `Agent email: ${email}`,
          `Agent phone number: ${phone}`,
        ];

        const promises = [
          insertDataToGooglesheet({
            conversion_funnel,
            ref_url,
            data: content.join("\n"),
            customer_name: name,
            customer_phone: phone,
          }),
          sendEmail({
            subject: "Bestpos lead - Partner",
            html: `<b>We have new breadme data with the following information</b><br>
            ${content.join("<br>")}`,
          }),
        ];
        await Promise.all(promises);

        return res.status(200).json({ data: true });
      default:
        return;
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
