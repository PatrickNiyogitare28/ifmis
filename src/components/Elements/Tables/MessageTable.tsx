import { Message } from '@/types/message';
import React from 'react';
import {BiPen} from 'react-icons/bi';

interface MessagesTableProps {
    messages: Message[]
}

export default function MessagesTable({ messages }: MessagesTableProps){
  return (
    <div className="overflow-x-auto" style={{borderRadius: '20px 20px 0px 0px'}}>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className='text-xs h-[40px]'>
            <th className="border bg-gray-200">Name</th>
            <th className="border bg-gray-200">MESSAGE</th>
            <th className="border bg-gray-200">STATUS</th>
            <th className="border bg-gray-200">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index} className='text-xs text-gray-500 font-lighter text-center'>
              <td className="border p-2">{message.User.FullName}</td>
              <td className="border p-2 w-2/5">{message.Message}</td>
              <td className='border-[0.5px] text-center'>
                <label className={`p-2 rounded-full  text-[10px]  ${message.Status === 'REPLIED' ? 'bg-green-200 ' : 'bg-yellow-200'}`}>{message.Status}</label>
              </td>
              <td className="border text-center">
                <div className='flex justify-around'>
                <button className="px-2 py-1 bg-primary text-white rounded-md flex  gap-2 p-2 items-center">
                <BiPen color='white' />
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

