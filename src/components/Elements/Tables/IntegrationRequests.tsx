import { IntegrationRequests } from '@/types/integration-request';
import React from 'react';
import {BiPen} from 'react-icons/bi';

interface IntegrationRequestsTableProps {
    integrationRequests: IntegrationRequests[]
}

const IntegrationRequestsTable = ({ integrationRequests }: IntegrationRequestsTableProps) => {
  return (
    <div className="overflow-x-auto" style={{borderRadius: '20px 20px 0px 0px'}}>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className='text-xs h-[40px]'>
            <th className="border bg-gray-200">FULL NAME</th>
            <th className="border bg-gray-200">PHONE</th>
            <th className="border bg-gray-200">EMAIL</th>
            <th className="border bg-gray-200">INTEGRATION TYPE</th>
            <th className="border bg-gray-200">LEVEL</th>
            <th className="border bg-gray-200">STATUS</th>
            <th className="border bg-gray-200">ACTIVE</th>
          </tr>
        </thead>
        <tbody>
          {integrationRequests.map((request, index) => (
            <tr key={index} className='text-xs text-gray-500 font-lighter text-center'>
              <td className="border p-2">{request.User.FullName}</td>
              <td className="border p-2">{request.User.Phone}</td>
              <td className="border p-2">{request.User.Email}</td>
              <td className="border p-2">{request.IntegrationType.Name}</td>
              <td className="border p-2">{request.RequestReviewLevel === 1 ? 'Concerned Ministry' : request.RequestReviewLevel ? 'District' : 'Local Administration' }</td>
              <td className='border-[0.5px] text-center'>
                <label className={`p-2 rounded-full  text-[10px]  ${request.Status === 'APPROVED' ? 'bg-green-200 ' : request.Status === 'REJECTED' ? 'bg-red-200 ' : 'bg-yellow-200'}`}>{request.Status}</label>
              </td>
              <td className="border text-center">
                <div className='flex justify-around'>
                <button className="px-2 py-1 bg-primary text-white rounded-md flex  gap-2 p-2 items-center">
                <BiPen color='white' />
                    EDIT</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IntegrationRequestsTable;
