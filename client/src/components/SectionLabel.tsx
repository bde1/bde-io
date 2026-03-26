interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-6 block">
      {children}
    </span>
  );
}
