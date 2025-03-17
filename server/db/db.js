import mongoose from "mongoose";
import 'dotenv/config'

const connectToMongoDB = async () => {
    try {
      
        await mongoose.connect(
            process.env.DB_URL,
        );
    } catch (error) {
console.log("Error connecting to MongoDB", error.message)
    }
}

export default connectToMongoDB