import type { CSVData } from "@/types/csv";
import type { HeaderMapping } from "@/types/mapping";

const crmFieldMap: Record<string, string> = {
  "First Name": "firstName",
  "Last Name": "lastName",
  Email: "email",
  Phone: "phone",
  Company: "company",
  Website: "website",
  Address: "address",
  City: "city",
  State: "state",
  Country: "country",
  "Zip Code": "zipCode",
  "Job Title": "jobTitle",
};

export function transformToCRMData(
  csvData: CSVData,
  mappings: HeaderMapping[]
) {
  return csvData.rows.map((row) => {

    const customer: Record<string, string> = {};

    mappings.forEach((mapping) => {

      const crmKey = crmFieldMap[mapping.mappedField];

      if (!crmKey) return;

      customer[crmKey] = row[mapping.originalColumn] ?? "";

    });

    return customer;

  });
}