import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { createFolder, requestDemoPath } from "utils/file_helper";
import { RequestDemoContact } from "models/request_demo_contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("request");
  console.log(req.method);

  switch (req.method) {
    case "POST":
      const { contact, typeBusiness } = req.body as RequestDemoContact;
      const { name, phone, email } = contact;
      await createFolder(requestDemoPath).then((path) => {
        const fileName = `${path}/${name?.toLowerCase()}-${phone}.txt`;
        let content = [
          `Business type: ${typeBusiness}`,
          `Personal information`,
          `Customer name: ${name}`,
          `Customer email: ${email}`,
          `Customer phone number: ${phone}`,
        ];
        fs.writeFile(fileName, content.join("\n"), (err) => {});
      });

      res.status(200).json({ data: true });
    default:
      break;
  }
}
