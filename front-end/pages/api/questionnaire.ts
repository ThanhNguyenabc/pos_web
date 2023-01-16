import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { createFolder, questionnairePath } from "utils/file_helper";
import { QuestionnaireContact } from "models/questionnaire_contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("request");
  console.log(req.method);

  switch (req.method) {
    case "POST":
      const {
        business,
        haveSaleSystem,
        numberOfStations,
        numberOfHandheld,
        onDiscountProgram,
        name,
        email,
        phoneNumber,
      } = req.body as QuestionnaireContact;

      await createFolder(questionnairePath).then((path) => {
        const fileName = `${path}/${name.toLowerCase()}-${phoneNumber}.txt`;
        let content = [
          `Business: ${business}`,
          `Own a point sale system: ${haveSaleSystem}`,
          `The nubmer of station: ${numberOfStations}`,
          `The nubmer of handheld: ${numberOfHandheld}`,
          `On the cash discount program: ${onDiscountProgram}\n`,
          `Customer information`,
          `Customer name: ${name}`,
          `Customer email: ${email}`,
          `Customer phone number: ${phoneNumber}`,
        ];
        fs.writeFile(fileName, content.join("\n"), (err) => {});
      });

      res.status(200).json({ data: true });
    default:
      break;
  }
}
