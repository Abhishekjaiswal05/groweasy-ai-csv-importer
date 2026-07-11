import ImportHistory from "../models/ImportHistory.js";

export async function processImport({
  fileName,
  customers,
  mappings,
  validationErrors,
  uploadedBy = "Anonymous",
}) {
  const report = {
    totalRows: customers.length,
    imported: 0,
    failed: 0,
    errors: [],
  };

  customers.forEach((customer, index) => {
    const rowErrors = [];

    if (!customer.firstName) {
      rowErrors.push("Missing firstName");
    }

    if (!customer.email) {
      rowErrors.push("Missing email");
    }

    if (rowErrors.length > 0) {
      report.failed++;

      report.errors.push({
        row: index + 1,
        errors: rowErrors,
      });

      return;
    }

    report.imported++;
  });

  const status =
    report.failed === 0
      ? "Completed"
      : report.imported === 0
      ? "Failed"
      : "Partial";

  await ImportHistory.create({
    fileName,
    totalRows: report.totalRows,
    importedRows: report.imported,
    failedRows: report.failed,
    uploadedBy,
    mappings,
    validationErrors,
    status,
  });

  return report;
}