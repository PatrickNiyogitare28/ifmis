import React, { useEffect, useState } from 'react';
import UserTable from '../Elements/Tables/Users';
import users from '@/lib/users';
import {BiPlus} from 'react-icons/bi';
import {Toaster} from 'react-hot-toast';
import Modal from '../Modal';
import AddUserForm from '../Forms/User/AddUser';
import { GetAllUsersDocument, GetAllUsersQuery, useGetAllUsersQuery } from '@/generated/graphql';
import useClient from '@/lib/client/useClient';
import { GetServerSideProps } from 'next';
import graphqlRequestClient from '@/lib/client';
import useFetchUsers from './hooks/useFetchUsers';

export default function AdminUsers (props: any) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const {users, refetch}= useFetchUsers();
    return (
        <>
        <Toaster />
        <div className='p-6'>
            <div className='w-full flex'>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2 ml-auto' onClick={() => setShowModal(true)}>
                    <BiPlus color="white" />
                    <label className='text-white font-light'>ADD USER</label>
                </button>
            </div>
            <div className="mt-4">
            <UserTable users={users} />
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
