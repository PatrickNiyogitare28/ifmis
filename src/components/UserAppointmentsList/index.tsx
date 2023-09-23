import React, { useState } from 'react';
import {BiPlus} from 'react-icons/bi';
import Modal from '../Modal';
import APPOINTMENTS from '@/lib/appointments';
import AddIntegrationRequestForm from '../Forms/AppointmentsForm';
import AppointmentsTable from '../Elements/Tables/AppointmentTable';

export default function AppointmentsList () {
    const [showModal, setShowModal] = useState<boolean>(false);
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
            <AppointmentsTable appointments={APPOINTMENTS} />
            </div>
        </div>
        {showModal &&
          <Modal title='ADD INTEGRATION REQUEST' onClose={() => setShowModal(false)}>
            <AddIntegrationRequestForm />
          </Modal>
        }
        </>
    )
}