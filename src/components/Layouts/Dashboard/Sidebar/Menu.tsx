import React from 'react';

interface MenuProps {
    icon: React.ReactNode,
    label: string,
    isActive?: boolean,
    onRoute: () => void;
}

export default function MenuItem({icon, label, isActive, onRoute}: MenuProps) {
    return (
        <div className={`p-2 flex gap-4 items-center mt-2 ${isActive ? 'bg-primary ': ''} rounded-md cursor-pointer`} onClick={onRoute}>
            {icon}
            <label className={`text-md  ${isActive ? 'text-white' : 'text-gray-400'} cursor-pointer`}>{label}</label>
        </div>
    )
}