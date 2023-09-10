import React from  "react";
import UseLayout from "./hooks/useLayout";

export default function Navbar(){
    const {user, avatar} = UseLayout();
    return (
        <div className="sticky top-0 bg-white z-5 w-full shadow-sm h-[max-content] py-2  px-4 flex justify-between items-center">
            <label className="text-sm"><span className="font-bold">{user?.role}</span> / <span className="text-gray-600">{user?.name}</span></label>
            <div className="flex justify-around items-center rounded-full bg-primary text-white w-[40px] h-[40px]">{avatar}</div>
        </div>
    )
} 