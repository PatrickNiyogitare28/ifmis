import React, { useState } from 'react';
import {BiPlus} from 'react-icons/bi';
import Modal from '../Modal';
import MESSAGES from '@/lib/messages';
import AddMessageForm from '../Forms/AddMessage';
import { TSessionUser } from '@/types/user';
import useFetchUserMessages from './hooks/useFetchUserMessages';
import UserMessagesTable from '../Elements/Tables/UserMessagesTable';

export default function UserMessagesList ({User}: {User: TSessionUser}) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const {messages, refetch} = useFetchUserMessages({User})
    return (
        <>
        <div className='p-6'>
        <h2 className='font-bold text-xl p-4 px-6'>Messages</h2>
            <div className='w-full flex'>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2 ml-auto' onClick={() => setShowModal(true)}>
                    <BiPlus color="white" />
                    <label className='text-white font-light'>COMPOSE NEW</label>
                </button>
            </div>
            <div className="mt-4">
            <UserMessagesTable messages={messages} />
            </div>
        </div>
        {showModal &&
          <Modal title='SEND MESSAGE' onClose={() => setShowModal(false)}>
            <AddMessageForm User={User} onClose={() => {setShowModal(false); refetch()}} />
          </Modal>
        }
        </>
    )
}