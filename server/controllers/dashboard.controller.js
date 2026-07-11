import ImportHistory from "../models/ImportHistory.js";

export async function getDashboardStats(req, res) {
  try {
    const imports = await ImportHistory.find();

    const totalImports = imports.length;

    const totalCustomers = imports.reduce(
      (sum, item) => sum + item.importedRows,
      0
    );

    const failedRows = imports.reduce(
      (sum, item) => sum + item.failedRows,
      0
    );

    const totalRows = imports.reduce(
      (sum, item) => sum + item.totalRows,
      0
    );

    const successRate =
      totalRows === 0
        ? 0
        : Number(
            ((totalCustomers / totalRows) * 100).toFixed(2)
          );

    res.json({
      success: true,
      stats: {
        totalImports,
        totalCustomers,
        failedRows,
        successRate,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to load dashboard stats.",
    });
  }
}