import React from 'react';

interface MenuProps {
    icon: React.ReactNode,
    label: string
}

export default function MenuItem({icon, label}: MenuProps) {
    return (
        <div className='p-2 flex gap-4 items-center mt-2'>
            {icon}
            <label className='text-sm text-gray-400'>{label}</label>
        </div>
    )
}