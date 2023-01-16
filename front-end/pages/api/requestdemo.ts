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
      const {
    
        email,
        name,
        personalPhone,
        typeBusiness,
      } = req.body as RequestDemoContact;

      await createFolder(requestDemoPath).then((path) => {
        const fileName = `${path}/${name.toLowerCase()}-${personalPhone}.txt`;
        let content = [
          `Business type: ${typeBusiness}`,
          `Personal information`,
          `Customer name: ${name}`,
          `Customer email: ${email}`,
          `Customer phone number: ${personalPhone}`,
        ];
        fs.writeFile(fileName, content.join("\n"), (err) => {});
      });

      res.status(200).json({ data: true });
    default:
      break;
  }
}
