import mongoose from "mongoose";

let cached = (global as any).mongoose || { conn: null, promise: null };

export default async function connectDb() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL is missing in .env");
    }

    cached.promise = mongoose.connect(process.env.MONGODB_URL, {
      dbName: "nextjs-app",
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  (global as any).mongoose = cached;

  return cached.conn;
}
