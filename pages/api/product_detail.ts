import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "lib/mongodb";
import { ProductInfoModel, ProductModel } from "lib/mongodb/entities/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  try {
    switch (req.method) {
      case "POST": {
        const { posId } = req.body;
        const data = await Promise.all([
          ProductModel.findOne({ id: posId }).exec(),
          ProductInfoModel.findOne({ productId: posId }).exec(),
        ]);

        return res.status(200).json({
          data: { ...data[1]?.toObject(), ...data[0]?.toObject() },
        });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
