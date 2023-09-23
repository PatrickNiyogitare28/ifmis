import React, { useState } from 'react';
import {BiPlus} from 'react-icons/bi';
import Modal from '../Modal';
import MessagesTable from '../Elements/Tables/MessageTable';
import MESSAGES from '@/lib/messages';
import AddMessageForm from '../Forms/AddMessage';
import { TSessionUser } from '@/types/user';

export default function UserMessagesList ({User}: {User: TSessionUser}) {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <>
        <div className='p-6'>
            <div className='w-full flex'>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2 ml-auto' onClick={() => setShowModal(true)}>
                    <BiPlus color="white" />
                    <label className='text-white font-light'>COMPOSE NEW</label>
                </button>
            </div>
            <div className="mt-4">
            <MessagesTable messages={MESSAGES} />
            </div>
        </div>
        {showModal &&
          <Modal title='SEND MESSAGE' onClose={() => setShowModal(false)}>
            <AddMessageForm User={User} onClose={() => {setShowModal(false)}} />
          </Modal>
        }
        </>
    )
}