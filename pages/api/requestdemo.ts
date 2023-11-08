import { NextApiRequest, NextApiResponse } from "next";
import { RequestDemoContact } from "models/request_demo_contact";
import { DataSubmission } from "models/data_submission";
import { insertDataToGooglesheet } from "lib/googlesheet";
import { sendMailToAdmin, sendMailToCustomer } from "lib/sendmail";
import { getEmailTemplate } from "lib/template";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST":
        const { data, conversion_funnel, ref_url } = req.body as DataSubmission;
        const { contact, typeBusiness, otherPOS, posSystems } =
          data as RequestDemoContact;
        const { name, phone, email } = contact;
        let content = [
          `Business type: ${typeBusiness}\n`,
          `Interested POS: ${posSystems}`,
          `Other interested POS: ${otherPOS || "_"}`,
          `Customer information`,
          `Customer name: ${name}`,
          `Customer email: ${email}`,
          `Customer phone number: ${phone}`,
        ];

        const emailContent = await getEmailTemplate(
          "Thank you for requesting a demo!",
          "We received your information in regards to a free POS demo.",
          name
        );

        const promises = [
          insertDataToGooglesheet({
            conversion_funnel,
            ref_url,
            data: content.join("\n"),
            customer_name: name,
            customer_phone: phone,
          }),
          sendMailToAdmin({
            text: "Bespot1",
            subject: "Bestpos lead - Request a demo",
            html: `<h3>We have new data with the following information</h3><br>
            ${content.join("<br>")}`,
          }),
          sendMailToCustomer({
            subject: "We've received your request. 🥳  Here's what's next. 👉",
            html: emailContent,
            to: email,
          }),
        ];
        await Promise.all(promises);
        return res.status(200).json({ data: true });
      default:
        break;
    }
  } catch (error) {
    res.status(500).json({ data: error });
  }
}
