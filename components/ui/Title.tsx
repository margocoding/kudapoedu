import { ReactNode } from "react";

export default function Title({children}: {children: ReactNode}) {
    return <div className="w-full border-b border-[#888888] mb-5">
        <div className="pb-2 border-b-2 w-fit border-[#EE5615] font-semibold">{children}</div>
    </div>
}