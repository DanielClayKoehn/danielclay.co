import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import jobsRouter from "./routes/jobs.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobsRouter);

const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
