import mongoose, { Mongoose, connection } from "mongoose";

const mongoDB = process.env.MONGODB_URL || "";

console.log(mongoDB);

export const connectMongo = async () => {
  try {
    if (connection.readyState) return true;
    await mongoose.connect(mongoDB);
    return true;
  } catch (error) {
    console.log("error ==", error);
  }
  return false;
};
