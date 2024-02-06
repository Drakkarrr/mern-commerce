import mongooes from 'mongoose';

const connectDb = async () => {
  try {
    console.log(`MongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
