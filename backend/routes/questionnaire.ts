import { uploadQuestionnaire } from "../controller/uploadFileController";
import { Router } from "express";

const questionnaireRouter = Router();

questionnaireRouter.post("/questionnaire", uploadQuestionnaire);

export default questionnaireRouter;
