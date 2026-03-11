import { cn } from "@/utils/classNames";
import { ComponentProps, HTMLAttributes, InputHTMLAttributes } from "react";

interface Props extends ComponentProps<"input"> {}

export default function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        "rounded-md bg-[#222] p-3 w-full placeholder:text-center placeholder:text-white/50",
        className,
      )}
      {...props}
    />
  );
}
