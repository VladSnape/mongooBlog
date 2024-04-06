import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI; // Set your MongoDB connection string in an environment variable

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI!);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;
