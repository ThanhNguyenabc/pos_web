import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { createFolder, contactPath } from "utils/file_helper";
import { RequestDemoContact } from "models/request_demo_contact";
import { ContactInfo } from "models/contact_info";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const { phone, email, name, zipcode, message } = req.body as ContactInfo;

      await createFolder(contactPath).then((path) => {
        const fileName = `${path}/${name?.toLowerCase()}-${phone}.txt`;
        let content = [
          `Customer name: ${name}`,
          `Customer email: ${email}`,
          `Customer phone number: ${phone}`,
          `Zipcode: ${zipcode}`,
          `Message: ${message}`,
        ];
        fs.writeFile(fileName, content.join("\n"), (err) => {});
      });

      return res.status(200).json({ data: true });
  }
}
