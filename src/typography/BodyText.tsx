import React, { PropsWithChildren } from "react";

export const BodyText: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="text-2xl m-0 p-0">
      {children}
    </p>
  );
};
