import express from "express";
import { mapFields } from "../controllers/ai.controller.js";

const router = express.Router();

/*
POST /api/ai/map-fields

Body

{
    "headers": [
        "fname",
        "lname",
        "email"
    ]
}
*/

router.post("/map-fields", mapFields);

export default router;