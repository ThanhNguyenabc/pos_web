import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import ProductData from "./data/products.json";
import Categories from "./data/categories.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("request");
  console.log(req.method);
  switch (req.method) {
    case "GET":
      res.status(200).json(ProductData);
      return;
    case "POST":
      const { type } = req.body;

      if (type == "all") {
        res.status(200).json({ data: ProductData });
        return;
      } else {
        const products =
          Categories.find((item) => item.type == type)?.products.map(
            (productId) =>
              ProductData.find((product) => product.id == productId)
          ) || [];
        res.status(200).json({ data: products });
      }

      return;
    default:
      break;
  }
}
