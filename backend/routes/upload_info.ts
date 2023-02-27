import {
  applyBreadme,
  applyParter,
  registerFreePOS,
  requestDemoPOS,
  saveContactInfo,
} from "../controller/uploadFileController";
import { Router } from "express";

const uploadInfoRouter = Router();

uploadInfoRouter.post("/requestdemo", requestDemoPOS);
uploadInfoRouter.post("/freeposform", registerFreePOS);
uploadInfoRouter.post("/applypartner", applyParter);
uploadInfoRouter.post("/contact_info", saveContactInfo);
uploadInfoRouter.post("/breadme", applyBreadme);

export default uploadInfoRouter;
