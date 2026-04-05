import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASS,
    DB_NAME
} = process.env;

// const uri = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;


const uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
console.log(uri);

export async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    }
}

export default mongoose;