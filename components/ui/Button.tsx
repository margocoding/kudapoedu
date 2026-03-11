import { cn } from "@/utils/classNames";
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {}

export default function Button({ className, children, ...props }: Props) {
  return (
    <button
      className={cn("rounded-lg bg-[#EE5615] text-white w-full p-3", className)}
      {...props}
    >
      {children}
    </button>
  );
}
