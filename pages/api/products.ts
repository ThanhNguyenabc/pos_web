import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "lib/mongodb";
import { ProductModel } from "lib/mongodb/entities/product";
import { CategoryModel } from "lib/mongodb/entities/category";
import { Product } from "models/product.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        const { type, limit } = req.query;
        const result = await fetchProductList(type as string, Number(limit));
        return res
          .setHeader("Cache-Control", "s-maxage=100")
          .status(200)
          .json({ data: result });
      case "POST": {
        const { posId } = req.body;
        const data = await getProductById(posId);
        return res
          .setHeader("Cache-Control", "s-maxage=100")
          .status(200)
          .json({ data });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

export const getProductById = async (id: string) => {
  await connectMongo();
  const product = await ProductModel.findOne({ id: id });
  return product;
};

export const fetchProductList = async (type: string, limit: number) => {
  await connectMongo();
  if (type == "all") {
    const products = await ProductModel.find()
      .sort({
        "expert_opinion.overall": -1,
      })
      .limit(Number(limit))
      .exec();

    return products;
  }
  let result: Array<Product> = [];
  const category = await CategoryModel.findOne({ type: type });
  if (category) {
    const productIds = category.products;
    const productMap: { [item: string]: Product } = {};
    const products = await ProductModel.find({
      id: { $in: productIds },
    })
      .limit(Number(limit))
      .exec();
    products.forEach((item) => {
      productMap[item.id] = item;
    });
    result = productIds.map((id) => productMap[id]);
  }

  return result;
};
