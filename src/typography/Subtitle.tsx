import React, { PropsWithChildren } from "react";

export const Subtitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="text-[40px] leading-10">
      {children}
    </h1>
  );
};
