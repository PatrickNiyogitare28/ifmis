import { IntegrationType } from '@/types/integration-type';
import React from 'react';
import {BiPen, BiTrash} from 'react-icons/bi';

interface IntegrationTypesProps {
    integrationTypes: IntegrationType[]
}

export default function IntegrationTypeTable({ integrationTypes }: IntegrationTypesProps){
  return (
    <div className="overflow-x-auto" style={{borderRadius: '20px 20px 0px 0px'}}>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className='text-xs h-[40px]'>
            <th className="border bg-gray-200">INTEGRATION NAME</th>
            <th className="border bg-gray-200">DESCRIPTION</th>
            <th className="border bg-gray-200">EDIT</th>
            <th className="border bg-gray-200">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {integrationTypes.map((type, index) => (
            <tr key={index} className='text-xs text-gray-500 font-lighter text-center'>
              <td className="border p-2">{type.Name}</td>
              <td className="border p-2 w-2/5">{type.Description}</td>
            
              <td className="border text-center">
                <div className='flex justify-around'>
                <button className="px-2 py-1 bg-primary text-white rounded-md flex  gap-2 p-2 items-center">
                <BiPen color='white' />
                    EDIT</button>
                </div>
              </td>
              <td className="border text-center">
                <div className='flex justify-around'>
                <button className="px-2 py-1 bg-danger text-white rounded-md flex  gap-2 p-2 items-center">
                <BiTrash color='white' />
                    DELETE</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

