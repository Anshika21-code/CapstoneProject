// backend/src/server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

// ROUTES
import routes from "./routes/index.js";

// CONFIG
import connectDB from "./config/database.js";

// MIDDLEWARE
import errorHandler from "./middleware/errorHandler.js";

// SOCKET INITIALIZER
import initializeSockets from "./socket/index.js"; // CORRECT PATH

dotenv.config();

// CONNECT DATABASE
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// API ROUTES
app.use("/api", routes);

// GLOBAL ERROR HANDLER
app.use(errorHandler);

// CREATE HTTP SERVER
const server = http.createServer(app);

// SOCKET.IO SERVER
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// INITIALIZE SOCKET HANDLERS
initializeSockets(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
