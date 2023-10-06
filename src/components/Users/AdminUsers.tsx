import React, { useEffect, useState } from 'react';
import UserTable from '../Elements/Tables/Users';
import users from '@/lib/users';
import {BiPlus, BiDownload} from 'react-icons/bi';
import {Toaster} from 'react-hot-toast';
import Modal from '../Modal';
import AddUserForm from '../Forms/User/AddUser';
import useFetchUsers from './hooks/useFetchUsers';

export default function AdminUsers (props: any) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const {users, refetch, handleDownloadReport}= useFetchUsers();
    return (
        <>
        <Toaster />
        <div className='p-6'>
        <h2 className='font-bold text-xl p-4 px-6'>Users</h2>
            <div className='w-full flex'>
                <div className='ml-auto flex gap-4'>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2 ' onClick={handleDownloadReport}>
                    <BiDownload color="white" />
                    <label className='text-white font-light'>DOWNLOAD REPORT</label>
                </button>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2' onClick={() => setShowModal(true)}>
                    <BiPlus color="white" />
                    <label className='text-white font-light'>ADD USER</label>
                </button>
                </div>
            </div>
            <div className="mt-4">
            <UserTable users={users} refetch={refetch}/>
            </div>
        </div>
        {showModal &&
          <Modal title='ADD USER' onClose={() => setShowModal(false)}>
            <AddUserForm onClose={() => {setShowModal(false); refetch()}} />
          </Modal>
        }
        </>
    )
}
