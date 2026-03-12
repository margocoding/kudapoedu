import { cn } from "@/utils/classNames";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"textarea"> {}

export default function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      className={cn(
        "bg-[#D9D9D9] p-3 resize-none outline-0 rounded-md",
        className,
      )}
      {...props}
    />
  );
}
