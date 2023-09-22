import React from 'react';

interface FormActionButtonProps {
    label: string;
    onSubmit: () => void;
    type?: 'button' | 'submit',
    disabled?: boolean 
}
export default function FormActionButton ({label, onSubmit, type='button', disabled}: FormActionButtonProps){
    return (
        <div className=''>
            <button 
            type={type} 
            disabled={disabled}
            onClick={onSubmit} 
            className={`w-full p-4 bg-primary text-xl text-white rounded-xl text-center ${(disabled) ? 'opacity-[0.5]' : 'opacity-[1]'} `}>{label}</button>
        </div>
    )
}