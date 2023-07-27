import { connectMongo } from "lib/mongodb";
import { TestimonialModel } from "lib/mongodb/entities/testimonial";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    switch (req.method) {
      case "GET": {
        const testimonials = await TestimonialModel.find();
        return res.status(200).json({ data: testimonials || [] });
      }
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
}
