import React, { PropsWithChildren } from "react";

export const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="text-9xl leading-[160px]">
      {children}
    </h1>
  );
};
