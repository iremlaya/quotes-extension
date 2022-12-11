import React, { PropsWithChildren } from "react";

export const FullScreen: React.FC<
  PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className }) => {
  return <div className={`w-full h-screen grid grid-rows-6 grid-cols-4 ${className}`}>{children}</div>;
};
