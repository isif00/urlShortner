import { Router, json } from "express";
import { redirect } from "../controllers/linksController";

export const redirectRouter = Router();
redirectRouter.use(json());


// redirect to the original link
redirectRouter.get("/:shortened", redirect);