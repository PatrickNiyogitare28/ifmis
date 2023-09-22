import { Appointment } from '@/types/appointment';
import React from 'react';
import {BiPen} from 'react-icons/bi';

interface AppointmentsTableProps {
    appointments: Appointment[]
}

const AppointmentsTable = ({ appointments }: AppointmentsTableProps) => {
  return (
    <div className="overflow-x-auto" style={{borderRadius: '20px 20px 0px 0px'}}>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className='text-xs h-[40px]'>
            <th className="border bg-gray-200">FULL NAME</th>
            <th className="border bg-gray-200">PHONE</th>
            <th className="border bg-gray-200">EMAIL</th>
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
              <td className="border p-2">{appointment.AppointmentType}</td>
              <td className="border p-2">{new Date(appointment.Time).toLocaleDateString()}</td>
              <td className='border-[0.5px] text-center'>
                <label className={`p-2 rounded-full  text-[10px]  ${appointment.Status === 'APPROVED' ? 'bg-green-200 ' : appointment.Status === 'REJECTED' ? 'bg-red-200 ' : 'bg-yellow-200'}`}>{appointment.Status}</label>
              </td>
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

export default AppointmentsTable;