import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./routes";
import { globalErrorHandler } from "./middlewares/error.middlware";

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

// middlewares
app.use(cookieParser());
app.use(express.json());

// All Routes

app.use("/api/v1/", router);


// Global error handler (MUST be after all routes)
app.use(globalErrorHandler);

app.get("/", (_, res) => {
  res.json({
    message: "Welcome to BookMyScreen API",
  });
});

export default app;
