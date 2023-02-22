import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { agentPath, createFolder } from "utils/file_helper";
import { ContactInfo } from "models/contact_info";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("request");
  console.log(req.method);

  switch (req.method) {
    case "POST":
      const { email, name, phone } = req.body as ContactInfo;

      await createFolder(agentPath).then((path) => {
        const fileName = `${path}/${name?.toLowerCase()}-${phone}.txt`;
        let content = [
          `Agent information`,
          `Agent name: ${name}`,
          `Agent email: ${email}`,
          `Agent phone number: ${phone}`,
        ];
        fs.writeFile(fileName, content.join("\n"), (err) => {});
      });
      res.status(200).json({ data: true });
    default:
      break;
  }
}
