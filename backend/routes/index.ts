import { RequestHandler } from "express";
import categoryRouter from "./category_route";
import productRouter from "./product_routes";
import questionnaireRouter from "./questionnaire";
import specificationRouter from "./specification_routes";
import uploadInfoRouter from "./upload_info";

const Routes: Array<RequestHandler> = [
  productRouter,
  specificationRouter,
  uploadInfoRouter,
  questionnaireRouter,
  categoryRouter,
];

export default Routes;
