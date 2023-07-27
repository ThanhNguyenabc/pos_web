import { CategoryModel } from "lib/mongodb/entities/category";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        const categories = await CategoryModel.find();
        return res.status(200).json({ data: categories });
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
