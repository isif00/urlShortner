import express from "express";
import type { Request, Response } from "express";
import { collections } from "../config";
import type Link from "../models/link";

export const linkRouter = express.Router();
linkRouter.use(express.json());

// Get all the links
linkRouter.get("/links", async (_req: Request, res: Response) => {
    try {
       const links = await collections.links?.find({}).toArray();

        res.status(200).send(links);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});

// Post a new link
linkRouter.post("/add", async (req: Request, res: Response) => {
    try {
        const newLink = req.body as Link;
        const result = await collections.links?.insertOne(newLink);

        result
            ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new game.");
    } catch (error: any) {
        console.error(error);
        res.status(400).send(error.message);
    }
});