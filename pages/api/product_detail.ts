import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "lib/mongodb";
import { ProductInfoModel, ProductModel } from "lib/mongodb/entities/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST": {
        const { posId } = req.body;
        const data = await getProductDetail(posId);
        return res.status(200).json({
          data,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

export const getProductDetail = async (posId: string) => {
  await connectMongo();

  const data = await Promise.all([
    ProductModel.findOne({ id: posId }).exec(),
    ProductInfoModel.findOne({ productId: posId }).exec(),
  ]);

  return { ...data[1]?.toObject(), ...data[0]?.toObject() };
};
