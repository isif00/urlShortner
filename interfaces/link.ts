import type { ObjectId } from "mongodb";

interface ILink {
    id: ObjectId;
    url: string;
    shortenedLink: string;
}

export type {ILink};
