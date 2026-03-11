import React from "react";

export default function Category({children}: {children: React.ReactNode}) {
    return <div className="rounded-lg w-fit px-3 text-white bg-[#EE5615]">
        {children}
    </div>
}