import express from "express";
import { importCustomers } from "../controllers/import.controller.js";

const router = express.Router();

router.post("/", importCustomers);

export default router;