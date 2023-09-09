import Input from '@/components/Elements/Input';
import React from 'react';
import Select from 'react-select';


export default function AddUserForm(){
    const roleOptions = [
        {
            value: 'ADMIN',
            label: 'ADMIN'
        },
        {
            value: 'REFUGEE',
            label: 'REFUGEE'
        },
        {
            value: 'REFUGEE_FOCAL_POINT',
            label: 'REFUGEE FOCAL POINT'
        },
        {
            value: 'UNHCR_ADMIN',
            label: 'UNHCR ADMIN'
        }
    ]
    return (
        <div className='w-[30vw]'>
            <div className='mt-4'>
                <Input placeholder='Full name' type="text" />
            </div>
            <div className='mt-2'>
                <Input placeholder='Email' type="text" />
            </div>
            <div className='mt-2'>
                <Input placeholder='Phone' type="text" />
            </div>
            <div className='mt-2'>
                <Input placeholder='Default password' type="password" />
            </div>
            <div className='mt-2'>
                <Select options={roleOptions}  classNamePrefix='py-[5px]  bg-red-500' className='rounded-xl'/>
            </div>
            <div>
            <button className='bg-primary flex gap-2 items-center mt-4  px-6 rounded-xl py-2 ml-auto'>
                    <label className='text-white font-light'>SAVE</label>
                </button>
            </div>
        </div>
    )
}