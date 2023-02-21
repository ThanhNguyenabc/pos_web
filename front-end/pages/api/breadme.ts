import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { createFolder, breadMePath } from "utils/file_helper";
import { BreadMeContact } from "models/breadme_contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("request");
  console.log(req.method);

  switch (req.method) {
    case "POST":
      const {
        contact,
        creditVolume,
        discountProgram,
        numberOfStations,
        currentUseSaleSystem,
      } = req.body as BreadMeContact;

      const { name, phone, email } = contact || {};

      await createFolder(breadMePath).then((path) => {
        const fileName = `${path}/${name?.toLowerCase()}-${phone}.txt`;
        let content = [
          `Credit volume: ${creditVolume}`,
          `On discount program: ${discountProgram}`,
          `Number of stations: ${numberOfStations}`,
          `Current use sale system: ${currentUseSaleSystem}`,
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
