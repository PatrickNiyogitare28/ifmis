import React from 'react';
import {BiDownload} from 'react-icons/bi';
import AppointmentsTable from '../Elements/Tables/AppointmentTable';
import useFetchAdminAppointments from './hooks/useFetchAdminAppointments';

export default function AdminAppointments () {
    const {appointments} = useFetchAdminAppointments()
    return (
        <>
        <div className='p-6'>
            <div className='w-full flex'>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2 ml-auto' onClick={() => {}}>
                    <BiDownload color="white" />
                    <label className='text-white font-light'>DOWNLOAD REPORTS</label>
                </button>
            </div>
            <div className="mt-4">
            <AppointmentsTable appointments={appointments} />
            </div>
        </div>  
        </>
    )
}