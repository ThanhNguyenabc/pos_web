import { NextApiRequest, NextApiResponse } from "next";
import { BreadMeContact } from "models/breadme_contact";
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
        const { conversion_funnel, ref_url, data } = req.body as DataSubmission;
        const {
          contact,
          creditVolume,
          discountProgram,
          numberOfStations,
          currentUseSaleSystem,
        } = data as BreadMeContact;

        const { name, phone, email } = contact || {};

        let content = [
          `Credit volume: ${creditVolume}`,
          `On discount program: ${discountProgram}`,
          `Number of stations: ${numberOfStations}`,
          `Current use sale system: ${currentUseSaleSystem}\n`,
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
            subject: "Bestpos lead - Breadme",
            html: `<b>We have new breadme data with the following information</b><br>
            ${content.join("<br>")}`,
          }),
        ];
        await Promise.all(promises);

        return res.status(200).json({ data: true });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
