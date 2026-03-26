import { cn } from "@/lib/utils";

interface StatusPulseProps {
  color?: "primary" | "green";
  className?: string;
}

export function StatusPulse({ color = "primary", className }: StatusPulseProps) {
  const colorClass = color === "green" ? "bg-green-400" : "bg-primary";

  return (
    <span className={cn("relative flex h-2 w-2", className)}>
      <span
        className={cn(
          "motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
          colorClass
        )}
      />
      <span
        className={cn(
          "relative inline-flex rounded-full h-2 w-2",
          colorClass
        )}
      />
    </span>
  );
}
