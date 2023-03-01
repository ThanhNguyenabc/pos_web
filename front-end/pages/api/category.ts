import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import Categories from "./data/categories.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      const { type } = req.body;
      const category = Categories.find((item) => item.type == type);
      res.status(200).json({ data: category });
      return;
    default:
      break;
  }
}
