import mongoose, { connection, ConnectionStates } from "mongoose";

export const connectMongo = async () => {
  const mongoDB = process.env.MONGODB_URL || "";
  try {
    if (connection.readyState == ConnectionStates.connected) return true;
    await mongoose.connect(mongoDB);
    console.log("connect successfully");
    return true;
  } catch (error) {
    return false;
  }
};
