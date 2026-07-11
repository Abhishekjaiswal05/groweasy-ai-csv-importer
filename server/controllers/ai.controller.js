import { mapCSVHeaders } from "../services/ai.service.js";

export async function mapFields(req, res) {
  try {
    const { headers } = req.body;

    if (!headers || !Array.isArray(headers)) {
      return res.status(400).json({
        success: false,
        message: "Headers array is required.",
      });
    }

    const mappings = await mapCSVHeaders(headers);

    return res.status(200).json({
      success: true,
      mappings,
    });

  } catch (error) {
    console.error("AI Mapping Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
