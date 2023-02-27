import {
  getProduct,
  getProductDetail,
} from "./../controller/productController";
import { Router } from "express";

const productRouter = Router();

productRouter.get("/products", getProduct);
productRouter.post("/products", getProductDetail);

export default productRouter;
