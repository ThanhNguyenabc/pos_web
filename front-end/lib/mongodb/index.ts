import mongoose, { connection, ConnectionStates } from "mongoose";

const mongoDB = process.env.MONGODB_URL || "";

export const connectMongo = async () => {
  try {
    if (connection.readyState == ConnectionStates.connected) return true;
    await mongoose.connect(mongoDB);
    console.log("connect successfully");
    return true;
  } catch (error) {
    console.log("error ==", error);
  }
  return false;
};
