import "../instrument.mjs";
import express from "express";
import { ENV } from "../config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./config/inngest.js";
import { serve } from "inngest/express";
import chatRoutes from "./routes/chat.route.js";

import cors from "cors";

import * as Sentry from "@sentry/node";

const app = express();

app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware()); // req.auth will be available in the request object

app.get("/debug-sentry", (req, res) => {
  throw new Error("My first Sentry error!");
});

app.get("/", (req, res) => {
  res.send("Hello World! 123");
});

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);

Sentry.setupExpressErrorHandler(app);

const startServer = async () => {
  try {
    await connectDB();
    const PORT = ENV.PORT || 3000;
    const HOST = ENV.NODE_ENV === "production" ? '0.0.0.0' : 'localhost';
    
    app.listen(PORT, HOST, () => {
      console.log(`Server started on ${HOST}:${PORT}`);
      console.log("Environment:", ENV.NODE_ENV);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};


startServer();

export default app;
