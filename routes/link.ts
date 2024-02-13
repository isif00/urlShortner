import express from "express";
import { add, getLinks } from "../controllers/linksController";

export const linkRouter = express.Router();
linkRouter.use(express.json());


// Post a new link
linkRouter.post("/add", add);

// get all links
linkRouter.post("/links", getLinks);
