import mongoose, { Schema } from "mongoose";
import { nanoid } from "nanoid";
import type { ILink } from "../interfaces/link";


const linkSchema = new Schema<ILink>({
  url: { type: String, required: true },
  shortenedLink: { type: String, default: () => nanoid(5)},
});

const LinkModel = mongoose.model<ILink>('Link', linkSchema);

export { LinkModel as Link };