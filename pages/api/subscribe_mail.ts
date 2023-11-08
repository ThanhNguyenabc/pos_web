import { NextApiRequest, NextApiResponse } from "next";
import { sendMailToAdmin } from "lib/sendmail";
import { DataSubmission } from "models/data_submission";
import { sendToAirtable } from "lib/airtable";
import dayjs from "dayjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const { conversion_funnel, ref_url, data } = req.body as DataSubmission;
      let content = [`Customer email: ${data}`];

      const promises = [
        sendToAirtable({
          body: {
            "Ref URL": ref_url,
            "Conversion Funnel": conversion_funnel,
            Email: data,
            "Created Date": dayjs().format("MM/DD/YYYY hh:mm"),
          },
        }),
        sendMailToAdmin({
          subject: "Bestpos lead - Subscribe Blog",
          html: `<h3>We have new data with the following information</h3><br>
          ${content}`,
        }),
      ];
      await Promise.all(promises);
      res.status(200).json({ data: true });
    default:
      break;
  }
}
