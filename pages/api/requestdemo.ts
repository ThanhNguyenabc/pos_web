import { NextApiRequest, NextApiResponse } from "next";
import { RequestDemoContact } from "models/request_demo_contact";
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
        const { contact, typeBusiness } = data as RequestDemoContact;
        const { name, phone, email } = contact;
        let content = [
          `Business type: ${typeBusiness}\n`,
          `Customer information`,
          `Customer name: ${name}`,
          `Customer email: ${email}`,
          `Customer phone number: ${phone}`,
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
            subject: "Bestpos lead - Request a demo",
            html: `<b>We have new data with the following information</b><br>
            ${content.join("<br>")}`,
          }),
        ];
        Promise.all(promises);
        return res.status(200).json({ data: true });
      default:
        break;
    }
  } catch (error) {
    res.status(500).json({ data: error });
  }
}
