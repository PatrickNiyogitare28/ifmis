import Input from '@/components/Elements/Input';
import users from '@/lib/users';
import React from 'react';
import Select from 'react-select';
import useIntegrationRequestFrom from './hooks/useIntegrationRequestForm';
import useMakeSelectOptions from '@/hooks/useMakeSelectOptions';
import {BiInfoCircle} from 'react-icons/bi';
import InfoLabel from '../Labels/InfoLabel';


export default function AddIntegrationRequestForm(){
   const {refugeeOptions} = useIntegrationRequestFrom();
   const {integrationTypesOptions} = useMakeSelectOptions();

    return (
        <div className='w-[30vw]'>
            <div className='mt-4'>
             <InfoLabel text='Select Refugee' info='The refugee to integrate' />
             <Select options={refugeeOptions}  classNamePrefix='py-[5px]  bg-red-500' className='rounded-xl'/>
            </div>
            <div className='mt-2'>
            <InfoLabel text='Integration Reason' info='Why refugee needs integration' />
            <Input placeholder='Reason' type="text" />
            </div>
            
            <div className='mt-2'>
             <InfoLabel text='Integration Type' info='Which kind of integration' />
             <Select  options={integrationTypesOptions}  classNamePrefix='py-[5px]  bg-red-500' className='rounded-xl'/>
            </div>
            <div>
            <button className='bg-primary flex gap-2 items-center mt-4  px-6 rounded-xl py-2 ml-auto'>
                    <label className='text-white font-light'>SAVE</label>
            </button>
            </div>
        </div>
    )
}