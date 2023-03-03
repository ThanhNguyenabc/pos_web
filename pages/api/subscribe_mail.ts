import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { createFolder, subscribePath } from "utils/file_helper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const { email } = req.body;
      await createFolder(subscribePath).then((path) => {
        const fileName = `${path}/${email?.toLowerCase()}.txt`;
        let content = [`Customer email: ${email}`];
        fs.writeFile(fileName, content.join("\n"), (err) => {});
      });

      res.status(200).json({ data: true });
    default:
      break;
  }
}
