import * as mongoDB from "mongodb";

// Global variables to store the collections
export const collections: { links?: mongoDB.Collection } = {}


export async function connectToDatabase () {
    // Connect to the database
    const uri: string = process.env.MONGO_URI as string;

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(uri);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db("linksDB");
    
    const linksCollection: mongoDB.Collection = db.collection("linksCollection");

    collections.links = linksCollection;
      
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${linksCollection.collectionName}`);
}