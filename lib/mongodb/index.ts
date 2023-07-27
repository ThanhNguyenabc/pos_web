import mongoose, { Mongoose } from "mongoose";

let dbInstance: Mongoose;
const mongoDB = process.env.MONGODB_URL || "";

export const connectMongo = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    dbInstance = await mongoose.connect(mongoDB, {
      maxPoolSize: 10,
      socketTimeoutMS: 100000,
    });
    console.log("connect mongoDB");
  } catch (error) {
    console.log("connection error =", error);
  }
};
