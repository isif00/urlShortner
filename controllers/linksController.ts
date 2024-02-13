import { Link } from '../models/link';
import type { Request, Response } from "express";


// get all links
export const getLinks = async (req: Request, res: Response) => {
    try {
        const links = await Link.find({});

        console.log(links);
        res.status(200).send(links);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

// Post a new link
export const add = async (req: Request, res: Response) => {
    try {
        const newLink = new Link({
            url: req.body.url,
        });
        const result = await newLink.save();
        
        console.log(result);
        result 
            ? res.status(201).send(`Successfully created a new link with id ${result._id}`)
            : res.status(500).send("Failed to create a new link.");

    } catch (error: any) {
        console.error(error);
        res.status(400).send(error.message);
    }
}

// redirect to the original link
export const redirect = async (req: Request, res: Response) => {

    try {
        console.log(req.params);
        const { shortened } = req.params;
        console.log(shortened);
        const link = await Link.findOne({ shortened });

        if (link) {
            console.log(link);
            res.redirect(link.url);
        } else {
            res.status(404).send("Link not found");
        }

    } catch (error) {
        res.status(500).send(error);
    }
}