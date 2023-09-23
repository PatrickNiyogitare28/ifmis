import Image from 'next/image';
import React from 'react';
import {AdminMenuHandler, StandardUserMenuHandler} from './MenuHandler';
import { TSessionUser } from '@/types/user';

export default function Sidebar({User}: {User: TSessionUser}){
    return (
        <div className='h-full bg-dashboard w-full p-4'>
            <div className='flex-col h-full flex justify-between'>
            <div>
            <div className='w-full flex justify-center'>
                <Image src="/assets/images/app-logo-white.svg" alt="logo" width={150} height={100} />
            </div>
            <div>
            {User?.Role === 'ADMIN' ? 
             <AdminMenuHandler />
             :
             <StandardUserMenuHandler />
            }
            </div>
            </div>
            <div className='w-full flex justify-around'>
                <button className='bg-red-100 rounded-full p-2 text-sm px-6'>LOGOUT</button>
            </div>
            </div>
        </div> 
    )
}