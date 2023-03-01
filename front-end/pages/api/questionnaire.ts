import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { createFolder, questionnairePath } from "utils/file_helper";
import { QuestionnaireContact } from "models/questionnaire_contact";
import POSSuggestion from "./data/pos_suggestion.json";
import ProductData from "./data/products.json";

const businessTypeMapper = {
  Restaurant: "restaurant",
  "Retail Stores": "retail",
  "Quick Service": "quickservice",
  "Small Business": "small-business",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const {
        business,
        haveSaleSystem,
        numberOfStations,
        numberOfHandheld,
        onDiscountProgram,
        contact,
      } = req.body as QuestionnaireContact;
      const { name, phone, email } = contact;

      await createFolder(questionnairePath).then((path) => {
        const fileName = `${path}/${name?.toLowerCase()}-${phone}.txt`;
        let content = [
          `Business: ${business}`,
          `Own a point sale system: ${haveSaleSystem}`,
          `The nubmer of station: ${numberOfStations}`,
          `The nubmer of handheld: ${numberOfHandheld}`,
          `On the cash discount program: ${onDiscountProgram}\n`,
          `Customer information`,
          `Customer name: ${name}`,
          `Customer email: ${email}`,
          `Customer phone number: ${phone}`,
        ];
        fs.writeFile(fileName, content.join("\n"), (err) => {});
      });

      const suggestKey = `${
        businessTypeMapper[business as keyof typeof businessTypeMapper]
      },${haveSaleSystem.toLowerCase()},${numberOfStations},${numberOfHandheld},${onDiscountProgram.toLowerCase()}`;

      const suggestedProduct =
        POSSuggestion[suggestKey as keyof typeof POSSuggestion].products || [];

      let result: Array<object> = [];

      ProductData.forEach((item) => {
        if (suggestedProduct.includes(item.id)) {
          result.push(item);
        }
      });
      res.status(200).json({ data: result });
    default:
      break;
  }
}
