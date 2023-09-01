import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "lib/mongodb";
import { ProductModel } from "lib/mongodb/entities/product";
import { ProductDetailModel } from "lib/mongodb/entities/product-detail";

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
    ProductDetailModel.findOne({ productId: posId }).exec(),
  ]);

  return { ...data[0]?.toObject(), ...data[1]?.toObject() };
};
