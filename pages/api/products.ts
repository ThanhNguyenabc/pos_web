import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "lib/mongodb";
import { ProductModel } from "lib/mongodb/entities/product";
import { CategoryModel } from "lib/mongodb/entities/category";
import { Product } from "models/product.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  try {
    switch (req.method) {
      case "GET":
        const { type, limit } = req.query;
        if (type == "all") {
          const products = await ProductModel.find()
            .sort({
              "expert_opinion.overall": -1,
            })
            .limit(Number(limit))
            .exec();
          return res
            .setHeader("Cache-Control", "s-maxage=10")
            .status(200)
            .json({ data: products });
        } else {
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

          return res
            .setHeader("Cache-Control", "s-maxage=10")
            .status(200)
            .json({ data: result });
        }

      case "POST": {
        const { posId } = req.body;
        const product = await ProductModel.findOne({ id: posId });
        return res
          .setHeader("Cache-Control", "s-maxage=10")
          .status(200)
          .json({ data: product });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
