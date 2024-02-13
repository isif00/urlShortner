import dotenv from 'dotenv'; 
import { connectToDatabase } from "./config";
import express from "express";
import type { Request, Response } from "express";
import { linkRouter } from './routes/link';
import { redirectRouter } from './routes/redirect';

// Load the environment variables
dotenv.config();

// Create the express app
const app = express();
const port = 3000;

// Connect to the database
await connectToDatabase();
console.log(`Successfully connected to Database.`);

// Hello World
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

// Use the link router
app.use("/shortner", linkRouter);

// Redirect to the original link
app.use('/', redirectRouter);

app.listen(port, () =>{
    console.log(`Server started on : http://127.0.1.1:${port}`);
});