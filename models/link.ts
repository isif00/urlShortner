import { ObjectId } from "mongodb";

import type { ILink } from "../interfaces/link";

export default class Link implements ILink{
    public _id: ObjectId;
    public _link: string;
    public _shortenedLink: string;

    constructor(url: string, shortnedLink: string) {
        this._id = new ObjectId();
        this._link = url;
        this._shortenedLink = shortnedLink;
    }

    public get id(): ObjectId {
        return this._id;
    }
    public get url(): string {
        return this._link;
    }

    public get shortenedLink(): string {
        return this._shortenedLink;
    }
}

