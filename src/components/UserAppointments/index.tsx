import React, { useState } from 'react';
import {BiPlus, BiDownload} from 'react-icons/bi';
import Modal from '../Modal';
import AddAppointmentForm from '../Forms/AppointmentsForm';
import { TSessionUser } from '@/types/user';
import useFetchUserAppointments from './hooks/useAppointmentsFetch';
import UserAppointmentsTable from '../Elements/Tables/UserAppointmentsTable';

export default function UserAppointmentsList ({User}: {User: TSessionUser}) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const {appointments, refetch, handleDownloadReport} = useFetchUserAppointments({User});
    return (
        <>
        <div className='p-6'>
        <h2 className='font-bold text-xl p-4 px-6'>Appointments</h2>
            <div className='w-full flex'>
                <div className="ml-auto flex gap-4">
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2 ml-auto' onClick={handleDownloadReport}>
                    <BiDownload color="white" />
                    <label className='text-white font-light'>DOWNLOAD REPORT</label>
                </button>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2 ml-auto' onClick={() => setShowModal(true)}>
                    <BiPlus color="white" />
                    <label className='text-white font-light'>ADD NEW REQUEST</label>
                </button>
                </div>
            </div>
            <div className="mt-4">
            <UserAppointmentsTable appointments={appointments} />
            </div>
        </div>
        {showModal &&
          <Modal title='REQUEST AN APPOINTMENT' onClose={() => setShowModal(false)}>
            <AddAppointmentForm User={User} onClose={() => {setShowModal(false); refetch()}} />
          </Modal>
        }
        </>
    )
}