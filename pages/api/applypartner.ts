import { NextApiRequest, NextApiResponse } from "next";
import { ContactInfo } from "models/contact_info";
import { DataSubmission } from "models/data_submission";
import { sendMailToAdmin } from "lib/sendmail";
import { sendToAirtable } from "lib/airtable";
import dayjs from "dayjs";

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
          sendToAirtable({
            body: {
              "Ref URL": ref_url,
              "Conversion Funnel": conversion_funnel,
              Email: email,
              "Created Date": dayjs().format("MM/DD/YYYY hh:mm"),
            },
          }),
          sendMailToAdmin({
            subject: "Bestpos lead - Partner",
            html: `<h3>We have new breadme data with the following information</h3><br>
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
