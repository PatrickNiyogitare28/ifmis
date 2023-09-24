import { Appointment } from '@/generated/graphql';
import React from 'react';
import {BiPen, BiCheck, BiCheckCircle} from 'react-icons/bi';
import useUpdateAppointment from './hooks/useUpdateAppointment';
import { Toaster } from 'react-hot-toast';

interface AppointmentsTableProps {
    appointments: Appointment[],
    refetch: () => void;
}

const AppointmentsTable = ({ appointments, refetch }: AppointmentsTableProps) => {
  const {handleChangeStatus} = useUpdateAppointment({refetch});
  return (
    <div className="overflow-x-auto" style={{borderRadius: '20px 20px 0px 0px'}}>
      <Toaster />
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className='text-xs h-[40px]'>
            <th className="border bg-gray-200">FULL NAME</th>
            <th className="border bg-gray-200">PHONE</th>
            <th className="border bg-gray-200">EMAIL</th>
            <th className="border bg-gray-200">APPOINTMENT</th>
            <th className="border bg-gray-200">REQUEST REASON</th>
            <th className="border bg-gray-200">APPOINTMENT CATEGORY</th>
            <th className="border bg-gray-200">TIME</th>
            <th className="border bg-gray-200">STATUS</th>
            <th className="border bg-gray-200">ACTIVE</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className='text-xs text-gray-500 font-lighter text-center'>
              <td className="border p-2">{appointment.User.FullName}</td>
              <td className="border p-2">{appointment.User.Phone}</td>
              <td className="border p-2">{appointment.User.Email}</td>
              <td className="border p-2">{appointment.Title}</td>
              <td className="border p-2">{appointment.Message}</td>
              <td className="border p-2">{appointment.Type}</td>
              {/* <td className="border p-2">{new Date(appointment.Time as string).toLocaleDateString()}</td> */}
              <td className="border p-2">
                {new Date(appointment.Time as string).toLocaleString([], {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  timeZoneName: 'short',
                })}
              </td>
              <td className='border-[0.5px] text-center'>
                <label className={`p-2 rounded-full  text-[10px]  ${appointment.Status === 'APPROVED' ? 'bg-green-200 ' : appointment.Status === 'REJECTED' ? 'bg-red-200 ' : 'bg-yellow-200'}`}>{appointment.Status}</label>
              </td>
              <td className="border text-center">
                <div className='flex justify-around'>
                {appointment.Status === 'PENDING' && 
                <>
                <button className="px-2 py-1 bg-success text-white rounded-md flex  gap-2 p-2 items-center" onClick={() => handleChangeStatus('APPROVED', appointment.Id)}>
                    <BiCheckCircle color='white'/> APPROVE
                </button>
                <button className="px-2 py-1 bg-danger text-white rounded-md flex  gap-2 p-2 items-center" onClick={() => handleChangeStatus('REJECTED', appointment.Id)}>
                    <BiCheckCircle color='white'/> REJECT
                </button>
                </>
                }

                {appointment.Status === 'APPROVED' && 
                <>
                <button className="px-2 py-1 bg-danger text-white rounded-md flex  gap-2 p-2 items-center" onClick={() => handleChangeStatus('PENDING', appointment.Id)}>
                    <BiCheckCircle color='white'/> CANCEL
                </button>
                </>
                }

                {appointment.Status === 'REJECTED' && 
                <>
                <button className="px-2 py-1 bg-success text-white rounded-md flex  gap-2 p-2 items-center" onClick={() => handleChangeStatus('APPROVED', appointment.Id)}>
                    <BiCheckCircle color='white'/> APPROVE
                </button>
                </>
                }

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
