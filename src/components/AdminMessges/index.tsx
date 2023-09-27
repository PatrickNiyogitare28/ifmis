import React from 'react';
import {BiDownload} from 'react-icons/bi';
import { TSessionUser } from '@/types/user';
import useFetchUserMessages from './hooks/useFetchUserMessages';
import AdminMessagesTable from '../Elements/Tables/AdminMessagesTable';

export default function AdminMessagesList ({User}: {User: TSessionUser}) {
    const {messages, refetch} = useFetchUserMessages()
    return (
        <>
        <div className='p-6'>
            <div className='w-full flex'>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2 ml-auto'>
                    <BiDownload color="white" />
                    <label className='text-white font-light'>DOWNLOAD REPORT</label>
                </button>
            </div>
            <div className="mt-4">
            <AdminMessagesTable refetch={refetch} messages={messages} User={User} />
            </div>
        </div>
        </>
    )
}