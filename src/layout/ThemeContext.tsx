import React, { PropsWithChildren } from "react";

export const ThemeContext: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="font-lexend text-white bg-black m-0">
      {children}
    </div>
  );
};
