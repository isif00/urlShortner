import mongoose from 'mongoose';

// Connect to the database
export async function connectToDatabase () {
    try {
        console.log("Connecting to the database...");
        const uri: string = process.env.MONGO_URI as string;
    
        return await mongoose.connect(uri);
    } catch (error) {
        console.error(error);
    }
}