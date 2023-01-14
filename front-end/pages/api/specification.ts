import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import SpecificationData from "./data/specifications.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      res.status(200).json(SpecificationData);
      return;
    case "POST":
      const { posId } = req.body;
      const item = SpecificationData.find((item) => item.productId == posId);
      res.status(200).json({ data: item });
      return;
    default:
      break;
  }
}
