import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <span className={cn("font-serif font-bold", className)}>
      BDE<span className="text-primary">.</span>
    </span>
  );
}
