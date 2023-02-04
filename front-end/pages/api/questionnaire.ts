import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { createFolder, questionnairePath } from "utils/file_helper";
import { QuestionnaireContact } from "models/questionnaire_contact";
import POSSuggestion from "./data/pos_suggestion.json";
import ProductData from "./data/products.json";
import { Product } from "models/product.model";

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

      const suggestKey = `${
        businessTypeMapper[business as keyof typeof businessTypeMapper]
      },${haveSaleSystem.toLowerCase()},${numberOfStations},${numberOfHandheld},${onDiscountProgram.toLowerCase()}`;

      console.log("suggest key ==== ", suggestKey);
      const suggestedProduct =
        POSSuggestion[suggestKey as keyof typeof POSSuggestion].products || [];
      console.log("all product keys = ", suggestedProduct);

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
