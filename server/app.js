import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import historyRoutes from "./routes/history.routes.js";

import dashboardRoutes from "./routes/dashboard.routes.js";
import importRoutes from "./routes/import.routes.js";
import aiRoutes from "./routes/ai.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoutes);
app.use("/api/import", importRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;