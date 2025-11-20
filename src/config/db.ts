import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Use global to cache the connection across hot reloads in development
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB(): Promise<typeof mongoose> {
  // Check if mongoose is already connected (readyState: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting)
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  // If already connected in cache, verify it's still connected
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  // If connection is in progress, wait for it
  if (cached.promise) {
    try {
      cached.conn = await cached.promise;
      return cached.conn;
    } catch (e) {
      cached.promise = null;
      cached.conn = null;
      // Fall through to create a new connection
    }
  }

  // Create new connection
  const opts = {
    bufferCommands: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000, // 5 second timeout
    socketTimeoutMS: 45000,
  };

  cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    console.log("MongoDB connected successfully");
    return mongoose;
  });

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    cached.conn = null;
    console.error("Error connecting to MongoDB:", e);
    throw new Error("Failed to connect to the database");
  }

  return cached.conn;
}

export default connectDB;