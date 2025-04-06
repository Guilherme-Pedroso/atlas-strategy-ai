
import React from "react";
import { cn } from "@/lib/utils";

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fullHeight?: boolean;
}

export function ResponsiveContainer({
  children,
  className,
  fullHeight = true,
  ...props
}: ResponsiveContainerProps) {
  return (
    <div 
      className={cn(
        "w-full px-4 sm:px-6 md:px-8", 
        fullHeight && "min-h-[calc(100vh-4rem)]",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
