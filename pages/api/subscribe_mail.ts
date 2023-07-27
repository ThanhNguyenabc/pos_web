import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "lib/sendmail";
import { DataSubmission } from "models/data_submission";
import { insertDataToGooglesheet } from "lib/googlesheet";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const { conversion_funnel, ref_url, data } = req.body as DataSubmission;
      let content = [`Customer email: ${data}`];

      const promises = [
        insertDataToGooglesheet({
          conversion_funnel,
          ref_url,
          data: content.toString(),
        }),
        sendEmail({
          subject: "Bestpos lead - Subscribe Blog",
          html: `<b>We have new data with the following information</b><br>
          ${content}`,
        }),
      ];
      await Promise.all(promises);
      res.status(200).json({ data: true });
    default:
      break;
  }
}
