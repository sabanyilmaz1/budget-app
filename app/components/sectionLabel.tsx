import React from "react";

export const SectionLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-sm tracking-widest text-muted-foreground uppercase mb-2">
      {children}
    </p>
  );
};
