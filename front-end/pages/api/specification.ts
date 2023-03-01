import { connectMongo } from "lib/mongodb";
import { SpecificationModel } from "models/specification";
import { NextApiRequest, NextApiResponse } from "next";
import SpecificationData from "./data/specifications.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("request ==");
  try {
    await connectMongo();
    switch (req.method) {
      case "POST":
        const { posId } = req.body;
        const item = await SpecificationModel.findOne({ productId: posId });
        return res.status(200).json({ data: item });
    }
  } catch (error) {}
}
