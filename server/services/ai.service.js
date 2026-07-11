import ai from "../config/gemini.js";

export async function mapCSVHeaders(headers) {
 const prompt = `
You are an expert CRM data mapping assistant.

Given these CSV headers:

${headers.join(", ")}

Map each CSV header to the closest standard CRM field.

Supported CRM fields include:

- First Name
- Last Name
- Email
- Phone
- Company
- Job Title
- Website
- Address
- City
- State
- Country
- Zip Code

Return ONLY a valid JSON array.

DO NOT return:

- Markdown
- Code fences
- Explanation
- Extra text

Return exactly in this format:

[
  {
    "originalColumn": "fname",
    "mappedField": "First Name",
    "confidence": 99
  }
]
`;
  const response = await ai.models.generateContent({
  model: "gemini-2.5-flash", // or the working model you verified
  contents: prompt,
});

const text = response.text;

// Remove markdown code fences
const cleaned = text
  .replace(/```json/gi, "")
  .replace(/```/g, "")
  .trim();

let parsed;

try {
  parsed = JSON.parse(cleaned);
} catch (error) {
  throw new Error(
    `Gemini returned invalid JSON:\n${cleaned}`
  );
}

return parsed;
}