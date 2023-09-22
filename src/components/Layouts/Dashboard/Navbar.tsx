import React, {useEffect, useState} from  "react";
import { TSessionUser } from "@/types/user";

export default function Navbar({User}: {User: TSessionUser}){
    console.log("in nav bar")
    const [avatar, setAvatar] = useState('');
    const getAvatar = (name: string) => {
        const firstName = name?.split(" ")[0];
        const lastName = name?.split(" ")[1];
        const avatar = firstName?.split("")[0]+""+lastName?.split("")[0];
        setAvatar(avatar);
    }

    useEffect(() => {
        getAvatar(User.FullName);
    },[User])
    return (
        <div className="sticky top-0 bg-white z-5 w-full shadow-sm h-[max-content] py-2  px-4 flex justify-between items-center">
            <label className="text-sm"><span className="font-bold">{User.Role}</span> / <span className="text-gray-600">{User.FullName}</span></label>
            <div className="flex justify-around items-center rounded-full bg-primary text-white w-[40px] h-[40px]">{avatar}</div>
        </div>
    )
} 

