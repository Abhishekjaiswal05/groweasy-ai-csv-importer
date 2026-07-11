interface ConfidenceBadgeProps {
  confidence: number;
}

export default function ConfidenceBadge({
  confidence,
}: ConfidenceBadgeProps) {
  let bgColor = "bg-red-500/20";
  let textColor = "text-red-400";

  if (confidence >= 90) {
    bgColor = "bg-green-500/20";
    textColor = "text-green-400";
  } else if (confidence >= 70) {
    bgColor = "bg-yellow-500/20";
    textColor = "text-yellow-400";
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${bgColor} ${textColor}`}
    >
      {confidence}%
    </span>
  );
}