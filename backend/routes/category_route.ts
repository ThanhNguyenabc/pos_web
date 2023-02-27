import { Router } from "express";
import { getCategory } from "../controller/categoryController";

const categoryRouter = Router();

categoryRouter.get("/category", getCategory);

export default categoryRouter;
