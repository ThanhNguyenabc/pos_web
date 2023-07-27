import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "lib/mongodb";
import { ProductModel } from "lib/mongodb/entities/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  try {
    switch (req.method) {
      case "GET":
        const icons = await ProductModel.find({}, "logo").exec();
        return res.status(200).json({ data: icons });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
