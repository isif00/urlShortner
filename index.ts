require ('dotenv').config();
import { connectToDatabase } from "./config";
import express from "express";
import type { Request, Response } from "express";

const app = express();
const port = 3000;



app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
    // Connect to the database
    connectToDatabase();
});

app.listen(port, () =>{
    console.log(`Server started on : http://127.0.1.1:${port}`);
});