import { connect } from "mongoose";
import { MONGODB_URL } from "./env";
import logger from "../utils/logger";

export const connectDB = async () => {
   try {
      if (!MONGODB_URL) {
         throw new Error("MONGODB_URL environment variable is not set");
      }

      logger.info("Attempting to connect to MongoDB...");
      
      await connect(MONGODB_URL, {
         serverSelectionTimeoutMS: 30000, // 30 seconds
         socketTimeoutMS: 45000, // 45 seconds
         connectTimeoutMS: 30000, // 30 seconds
         maxPoolSize: 10,
         retryWrites: true,
         w: "majority",
      });

      logger.info("✅ Successfully connected to MongoDB");
   } catch (error) {
      logger.error("❌ Error connecting to MongoDB:", error);
      if (error instanceof Error) {
         logger.error("Error message:", error.message);
      }
      throw error; // Re-throw to prevent app from starting without DB
   }
};
