import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { createFolder, freePOSPath } from "utils/file_helper";
import { FreePOSContact } from "models/freepos_contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("request");
  console.log(req.method);

  switch (req.method) {
    case "POST":
      const {
        businessphone,
        businessname,
        email,
        name,
        personalPhone,
        creditCardVolume,
      } = req.body as FreePOSContact;

      await createFolder(freePOSPath).then((path) => {
        const fileName = `${path}/${name.toLowerCase()}-${personalPhone}.txt`;
        let content = [
          `Credit card volume: ${creditCardVolume}`,
          `Business name: ${businessname}`,
          `Business phone: ${businessphone}`,
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
