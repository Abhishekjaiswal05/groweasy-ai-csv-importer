import mongoose from "mongoose";
import ImportHistory from "../models/ImportHistory.js";

export async function getHistoryDetails(req, res) {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid history id",
      });
    }

    const history = await ImportHistory.findById(id);

    if (!history) {
      return res.status(404).json({
        success: false,
        message: "Import history not found",
      });
    }

    res.json({
      success: true,
      history,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch import history details.",
    });
  }
}