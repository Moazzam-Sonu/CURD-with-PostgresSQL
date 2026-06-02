import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import pool from "./config/db.js";
import userRoutes from "./routes/userRoute.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Use the user routes
app.use("/api", userRoutes);

// Middleware
app.use(cors());
app.use(express.json());

// Routes

//Error handling middleware
app.use(errorHandler);

//create user table if it doesn't exist
createUserTable();
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
