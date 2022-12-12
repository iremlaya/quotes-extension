import React, { PropsWithChildren } from "react";

export const FullScreen = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
>(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-full h-screen main-grid ${className}`}
    >
      {children}
    </div>
  );
});
