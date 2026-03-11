import { ReactNode } from "react";

export default function TopicTitle({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-[#EE5615] mb-5">
      <div className="px-3 py-2 font-semibold">{children}</div>
    </div>
  );
}
