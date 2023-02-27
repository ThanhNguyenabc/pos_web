import { Response, Request } from "express";
import ProductData from "../data/products.json";
import CategoryData from "../data/categories.json";
import { BaseResponse } from "models/base_response";

export const getProduct = async (req: Request, res: Response<BaseResponse>) => {
  const { type } = req.query;
  if (type) {
    const products =
      CategoryData.find((item) => item.type == type)?.products.map(
        (productId) => ProductData.find((product) => product.id == productId)
      ) || [];
    return res.status(200).json({ data: products });
  }
  return res.status(200).json({ data: ProductData });
};

export const getProductDetail = async (
  req: Request,
  res: Response<BaseResponse>
) => {
  const { posId } = req.body;
  const productItem = ProductData.find((product) => product.id == posId);
  return res.status(200).json({ data: productItem });
};
