import React from 'react';

interface FormActionButtonProps {
    label: string;
    onSubmit: () => void;
}
export default function FormActionButton ({label, onSubmit}: FormActionButtonProps){
    return (
        <div className=''>
            <button onClick={onSubmit} className='w-full p-4 bg-primary text-xl text-white rounded-xl text-center'>{label}</button>
        </div>
    )
}