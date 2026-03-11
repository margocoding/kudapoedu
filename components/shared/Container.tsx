import { cn } from "@/utils/classNames";
import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-300 max-[1250px]:px-3 mx-auto py-3 space-y-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
