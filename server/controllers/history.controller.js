import ImportHistory from "../models/ImportHistory.js";

export async function getHistory(req, res) {
  try {
    const history = await ImportHistory.find()
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      history,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch history.",
    });
  }
}