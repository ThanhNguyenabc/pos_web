import mongoose, { connection } from "mongoose";

const mongoDB = process.env.MONGODB_URL || "";




export const connectMongo = async () => {
  try {
    if (connection.readyState) return true;
    await mongoose.connect(mongoDB);
    console.log("connect successfully");
    return true;
  } catch (error) {
    console.log("error ==", error);
  }
  return false;
};
