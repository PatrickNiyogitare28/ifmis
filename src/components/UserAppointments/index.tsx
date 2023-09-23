import React, { useState } from 'react';
import {BiPlus} from 'react-icons/bi';
import Modal from '../Modal';
import AddAppointmentForm from '../Forms/AppointmentsForm';
import { TSessionUser } from '@/types/user';
import useFetchUserAppointments from './hooks/useAppointmentsFetch';
import UserAppointmentsTable from '../Elements/Tables/UserAppointmentsTable';

export default function UserAppointmentsList ({User}: {User: TSessionUser}) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const {appointments, refetch} = useFetchUserAppointments({User});
    return (
        <>
        <div className='p-6'>
            <div className='w-full flex'>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2 ml-auto' onClick={() => setShowModal(true)}>
                    <BiPlus color="white" />
                    <label className='text-white font-light'>ADD NEW REQUEST</label>
                </button>
            </div>
            <div className="mt-4">
            <UserAppointmentsTable appointments={appointments} />
            </div>
        </div>
        {showModal &&
          <Modal title='ADD INTEGRATION REQUEST' onClose={() => setShowModal(false)}>
            <AddAppointmentForm User={User} onClose={() => {setShowModal(false); refetch()}} />
          </Modal>
        }
        </>
    )
}