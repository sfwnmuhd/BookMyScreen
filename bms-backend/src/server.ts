import app from "./app";
import { config } from "./config/config";
import connectDB from "./config/db";

const startServer = async () => {
  const port = config.port || 5000;
  
  // Connect to database
  await connectDB();

  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
};

startServer();