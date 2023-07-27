import { NextApiRequest, NextApiResponse } from "next";
import { FreePOSContact } from "models/freepos_contact";
import { DataSubmission } from "models/data_submission";
import { insertDataToGooglesheet } from "lib/googlesheet";
import { sendEmail } from "lib/sendmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const { data, conversion_funnel, ref_url } = req.body as DataSubmission;
      const { businessContact, personalContact, creditCardVolume } =
        data as FreePOSContact;

      let content = [
        `Credit card volume: ${creditCardVolume}`,
        `Business name: ${businessContact.name}`,
        `Business phone: ${businessContact.phone}\n`,
        `Customer information`,
        `Customer name: ${personalContact.name}`,
        `Customer email: ${personalContact.email}`,
        `Customer phone number: ${personalContact.phone}`,
      ];

      const promises = [
        insertDataToGooglesheet({
          conversion_funnel,
          ref_url,
          data: content.join("\n"),
          customer_name: personalContact.name,
          customer_phone: personalContact.phone,
        }),
        sendEmail({
          subject: "Bestpos lead - FreePOS",
          html: `<b>We have new data with the following information</b><br>
          ${content.join("<br>")}`,
        }),
      ];
      await Promise.all(promises);
      return res.status(200).json({ data: true });
  }
}
