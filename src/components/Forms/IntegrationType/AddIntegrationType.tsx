import Input from '@/components/Elements/Input';
import React from 'react';
import InfoLabel from '../Labels/InfoLabel';


export default function AddIntegrationTypeForm(){

    return (
        <div className='w-[30vw]'>
            <div className='mt-2'>
            <InfoLabel text='Integration Type' info='New integration category' />
            <Input placeholder='Name' type="text" />
            </div>

            <div className='mt-2'>
            <InfoLabel text='Add Description' info='Describe this category' />
            <Input placeholder='Description' type="text" />
            </div>
            <div>

            <button className='bg-primary flex gap-2 items-center mt-4  px-6 rounded-xl py-2 ml-auto'>
                <label className='text-white font-light'>SAVE</label>
            </button>
            </div>
        </div>
    )
}