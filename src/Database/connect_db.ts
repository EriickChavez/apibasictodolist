import { MongoClient, ServerApiVersion } from "mongodb";
import { CONFIG } from "../Config/ENV";
const uri = `mongodb+srv://${CONFIG.MONGODB_USER}:${CONFIG.MONGODB_PASSWORD}@gymapp.e1jcqh5.mongodb.net/?retryWrites=true&w=majority&appName=GymApp`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


export { client };
