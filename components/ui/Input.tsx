import { cn } from "@/utils/classNames";
import { ComponentProps, HTMLAttributes, InputHTMLAttributes } from "react";

interface Props extends ComponentProps<"input"> {
  theme?: "dark" | "light";
}

export default function Input({ className, theme = "light", ...props }: Props) {
  return (
    <input
      className={cn(
        theme === "light"
          ? "bg-[#D9D9D9] placeholder:text-black/50"
          : "bg-[#222] placeholder:text-white/50 text-black",
        "rounded-md  p-3 w-full",
        className,
      )}
      {...props}
    />
  );
}
