import CRM_FIELDS from "@/constants/crmFields";

interface MappingRowProps {
  originalColumn: string;
  mappedField: string;
  confidence: number;

  onChange: (
    originalColumn: string,
    mappedField: string
  ) => void;
}

export default function MappingRow({
  originalColumn,
  mappedField,
  confidence,
  onChange,
}: MappingRowProps) {
  return (
    <tr className="border-b border-slate-800 hover:bg-slate-800/60 transition">

      {/* CSV Column */}
      <td className="px-6 py-4">
        <span className="font-medium text-white">
          {originalColumn}
        </span>
      </td>

      {/* CRM Field */}
      <td className="px-6 py-4">
        <select
          value={mappedField}
          onChange={(e) =>
            onChange(originalColumn, e.target.value)
          }
          className="
            w-72
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            px-3
            py-2
            text-white
            focus:border-indigo-500
            focus:outline-none
          "
        >
          {CRM_FIELDS.map((field) => (
            <option
              key={field}
              value={field}
            >
              {field}
            </option>
          ))}
        </select>
      </td>

      {/* Confidence */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">

          <div className="h-2 w-40 overflow-hidden rounded-full bg-slate-700">

            <div
              className={`
                h-full rounded-full transition-all duration-700
                ${
                  confidence >= 90
                    ? "bg-green-500"
                    : confidence >= 70
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }
              `}
              style={{
                width: `${confidence}%`,
              }}
            />

          </div>

          <span
            className={`
              text-sm font-semibold
              ${
                confidence >= 90
                  ? "text-green-400"
                  : confidence >= 70
                  ? "text-yellow-400"
                  : "text-red-400"
              }
            `}
          >
            {confidence}%
          </span>

        </div>
      </td>

    </tr>
  );
}