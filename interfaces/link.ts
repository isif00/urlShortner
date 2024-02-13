import type { ObjectId } from "mongoose";

interface ILink {
    id: ObjectId;
    url: string;
    shortenedLink: string;
}

export type { ILink };
