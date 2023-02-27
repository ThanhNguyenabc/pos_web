import { Response, Request } from "express";
import SpecificationData from "../data/specifications.json";

export const getSpecification = async (req: Request, res: Response) => {
  const { posId } = req.body;
  const item = SpecificationData.find((item) => item.productId == posId);
  return res.status(200).json({ data: item });
};
