import { Appointment } from '@/generated/graphql';
import React from 'react';
import {BiPen} from 'react-icons/bi';

interface AppointmentsTableProps {
    appointments: Appointment[]
}

const UserAppointmentsTable = ({ appointments }: AppointmentsTableProps) => {
  return (
    <div className="overflow-x-auto" style={{borderRadius: '20px 20px 0px 0px'}}>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className='text-xs h-[40px]'>
            <th className="border bg-gray-200">#</th>
            <th className="border bg-gray-200">Title</th>
            <th className="border bg-gray-200">Message</th>
            <th className="border bg-gray-200">APPOINTMENT CATEGORY</th>
            <th className="border bg-gray-200">TIME</th>
            <th className="border bg-gray-200">STATUS</th>
            {/* <th className="border bg-gray-200">PROGRESS</th> */}
            <th className="border bg-gray-200">ACTIVE</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className='text-xs text-gray-500 font-lighter text-center'>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{appointment.Title}</td>
              <td className="border p-2">{appointment.Message}</td>
              <td className="border p-2">{appointment.Type}</td>
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
              {/* <td className='border-[0.5px] text-center'>
                <label className={`p-2 rounded-full  text-[10px]  ${appointment.Status === 'APPROVED' ? 'bg-green-200 ' : appointment.AprovalStatus === 'REJECTED' ? 'bg-red-200 ' : 'bg-yellow-200'}`}>{appointment.AprovalStatus}</label>
              </td> */}
              <td className="border text-center">
                <div className='flex justify-around'>
                <button className="px-2 py-1 bg-primary text-white rounded-md flex  gap-2 p-2 items-center">
                    VIEW</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserAppointmentsTable;
