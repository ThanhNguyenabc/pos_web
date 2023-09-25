import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { connectMongo } from "lib/mongodb";
import { AppConfigModel } from "lib/mongodb/entities/app_config";
import { PageMeta } from "models/app_configs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const data = await AppConfigModel.find({});
    return res.status(200).send({ data: data?.[0] || {} });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export const getSEOTags = async (page: keyof PageMeta) => {
  try {
    await connectMongo();
    const data = await AppConfigModel.find({});
    return data?.[0].metaTags?.pageTags?.[page];
  } catch (error) {}
};

export const getSEOTagByProduct = async (productSlug: string) => {
  try {
    await connectMongo();
    const data = await AppConfigModel.find({});
    return data?.[0].metaTags?.pageTags?.["products"]?.[productSlug];
  } catch (error) {}
  return null;
};
