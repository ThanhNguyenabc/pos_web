import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { createFolder, freePOSPath } from "utils/file_helper";
import { FreePOSContact } from "models/freepos_contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const { businessContact, personalContact, creditCardVolume } =
        req.body as FreePOSContact;

      await createFolder(freePOSPath).then((path) => {
        const fileName = `${path}/${personalContact.name?.toLowerCase()}-${
          personalContact.phone
        }.txt`;
        let content = [
          `Credit card volume: ${creditCardVolume}`,
          `Business name: ${businessContact.name}`,
          `Business phone: ${businessContact.phone}`,
          `Personal information`,
          `Customer name: ${personalContact.name}`,
          `Customer email: ${personalContact.email}`,
          `Customer phone number: ${personalContact.phone}`,
        ];
        fs.writeFile(fileName, content.join("\n"), (err) => {});
      });

      return res.status(200).json({ data: true });
  }
}
