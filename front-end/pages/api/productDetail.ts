import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import ProductData from "./data/products.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("request");
  console.log(req.method);
  switch (req.method) {
    case "POST":
      const { posId } = req.body;
      const productItem = ProductData.find((product) => product.id == posId);
      res.status(200).json({ data: productItem });
      return;
    default:
      break;
  }
}
