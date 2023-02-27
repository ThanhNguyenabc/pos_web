import { getSpecification } from "../controller/specificationController";
import { Router } from "express";

const specificationRouter = Router();

specificationRouter.post("/specification", getSpecification);

export default specificationRouter;
