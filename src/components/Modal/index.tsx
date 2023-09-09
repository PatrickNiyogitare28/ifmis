import React from 'react';
import {FaTimes} from 'react-icons/fa';

interface ModalProps {
    children: React.ReactNode,
    onClose: () => void,
    title: string,
}
export default function Modal ({children, onClose, title}: ModalProps) {
    return (
        <div className='absolute w-[100vw] h-[100vh]  left-0 top-0 bg-[rgba(0,0,0,0.184)]'>
            <div className='w-full h-full flex justify-around items-center'>
                <div className='w-[max-content] h-[max-content] bg-white p-8 rounded-xl'>
                    <div className='flex w-full justify-between'>
                        <label className='text-md font-semibold'>{title}</label>
                        <FaTimes onClick={onClose} className='cursor-pointer' />
                        </div>
                        <div className='mt-2'>
                            {children}
                        </div>
                </div>
            </div>
        </div>
    )
}