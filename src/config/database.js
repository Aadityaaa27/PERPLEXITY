import mongoose from "mongoose";

const connectTodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection failed:", err.message);
        // Server keeps running even if DB fails
    }
}

export default connectTodb;