import express from "express";
import { getHistory } from "../controllers/history.controller.js";
import { getHistoryDetails } from "../controllers/historyDetails.controller.js";

const router = express.Router();

router.get("/", getHistory);
router.get("/:id", getHistoryDetails);

export default router;