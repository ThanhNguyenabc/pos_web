import { NextApiRequest, NextApiResponse } from "next";
import { ContactInfo } from "models/contact_info";
import { insertDataToGooglesheet } from "lib/googlesheet";
import { DataSubmission } from "models/data_submission";
import { sendMailToAdmin, sendMailToCustomer } from "lib/sendmail";
import { getEmailTemplate } from "lib/template";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST":
        const { conversion_funnel, ref_url, data } = req.body as DataSubmission;
        const { phone, email, name, zipcode, message } = data as ContactInfo;
        let content = [
          `Customer name: ${name}`,
          `Customer email: ${email}`,
          `Customer phone number: ${phone}`,
          `Zipcode: ${zipcode}`,
          `Message: ${message}`,
        ];

        const emailContent = await getEmailTemplate(
          "Thanks for reaching out to us",
          "We received your inquiry.",
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
            subject: "Bestpos lead - Contact",
            html: `<b>We have new customer with the following information</b><br>${content.join(
              "<br>"
            )}`,
          }),
          sendMailToCustomer({
            subject: "We've received your request. 🥳  Here's what's next. 👉",
            html: emailContent,
            to: email,
          }),
        ];
        await Promise.all(promises);
        return res.status(200).json({ data: true });
    }
  } catch (error) {
    console.log("error------contact");
    console.log(error);
  }
}
