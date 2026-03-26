interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <div className="pt-32 pb-20">{children}</div>;
}
