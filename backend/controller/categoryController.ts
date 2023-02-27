import { Response, Request } from "express";
import CategoryData from "../data/categories.json";
import { BaseResponse } from "models/base_response";

export const getCategory = async (
  req: Request,
  res: Response<BaseResponse>
) => {
  const { type } = req.query;
  if (type) {
    const category = CategoryData.find((item) => item.type == type);
    return res.status(200).json({ data: category });
  }
  return res.status(200).json({ data: CategoryData });
};
