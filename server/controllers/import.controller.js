import { processImport } from "../services/import.service.js";

export async function importCustomers(req, res) {
    try {
        const {
            fileName,
            customers,
            mappings,
            validationErrors,
            uploadedBy,
        } = req.body;
        if (!Array.isArray(customers)) {
            return res.status(400).json({
                success: false,
                message: "customers must be an array",
            });
        }

        const result = await processImport({
            fileName,
            customers,
            mappings,
            validationErrors,
            uploadedBy,
        });

        return res.status(200).json({
            success: true,
            report: result,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Import failed",
        });
    }
}