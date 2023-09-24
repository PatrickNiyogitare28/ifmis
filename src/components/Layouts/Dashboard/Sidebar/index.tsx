import Image from 'next/image';
import React from 'react';
import {AdminMenuHandler, StandardUserMenuHandler} from './MenuHandler';
import { TSessionUser } from '@/types/user';
import useLogout from './hooks/useLogout';

export default function Sidebar({User}: {User: TSessionUser}){
    const {handleLogout} = useLogout();
    return (
        <div className='h-full bg-dashboard w-full p-4'>
            <div className='flex-col h-full flex justify-between'>
            <div>
            <div className='w-full flex justify-center'>
                <div className='flex gap-3 items-center'>
                    <Image src="/assets/images/rw-logo.png" alt="logo" width={70} height={70} />
                    <div>
                        <label className='block text-primary font-bold'>IFMS</label>
                        <span className='text-xs'>Supporting System</span>
                    </div>
                </div>
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
                <button className='bg-red-100 rounded-full p-2 text-sm px-6' onClick={handleLogout}>LOGOUT</button>
            </div>
            </div>
        </div> 
    )
}