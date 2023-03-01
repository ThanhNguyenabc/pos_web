import { NextApiRequest, NextApiResponse } from "next";
import { CategoryModel } from "models/category";
import { Product, ProductModel } from "models/product.model";
import { connectMongo } from "lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  try {
    switch (req.method) {
      case "GET":
        const { type } = req.query;
        if (type == "all") {
          const products = await ProductModel.find()
            .sort({
              "expert_opinion.overall": -1,
            })
            .exec();
          return res.status(200).json({ data: products });
        } else {
          let result: Array<Product> = [];
          const category = await CategoryModel.findOne({ type: type });
          if (category) {
            console.log(category.products);

            result = await ProductModel.find({
              id: { $in: category.products },
            })
              .sort({ "expert_opinion.overall": -1 })
              .exec();
          }

          return res.status(200).json({ data: result });
        }

      case "POST": {
        const { posId } = req.body;
        const product = await ProductModel.findOne({ id: posId });
        return res.status(200).json({ data: product });
      }
    }
  } catch (error) {
    console.log(error);
  }
}
