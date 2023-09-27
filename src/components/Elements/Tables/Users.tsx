import { User, GetAllUsersQuery } from '@/generated/graphql';
import React from 'react';
import {BiPen} from 'react-icons/bi';
import useUpdateUserStatus from './hooks/useUpdateUser';

interface UserTableProps {
    users: User[],
    refetch: () => void
}

const UserTable = ({ users, refetch }: UserTableProps) => {
  const {handleStatusUpdate} = useUpdateUserStatus({refetch});

  return (
    <div className="overflow-x-auto" style={{borderRadius: '20px 20px 0px 0px'}}>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className='text-xs h-[40px]'>
            <th className="border bg-gray-200">FULL NAME</th>
            <th className="border bg-gray-200">PHONE</th>
            <th className="border bg-gray-200">EMAIL</th>
            <th className="border bg-gray-200">ROLE</th>
            <th className="border bg-gray-200">STATUS</th>
            <th className="border bg-gray-200">ACTIVE</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index} className='text-xs text-gray-500 font-lighter text-center'>
              <td className="border p-2">{user.FullName}</td>
              <td className="border p-2">{user.Phone}</td>
              <td className="border p-2">{user.Email}</td>
              <td className="border p-2">{user.Role}</td>
              <td className='border-[0.5px] text-center'>
                <label className={`p-2 rounded-full  text-[10px]  ${user.IsActive ? 'bg-green-200 ' : 'bg-red-200 ' }`}>{user.IsActive ? 'VERIFIED' : 'NOT VERIFIED' }</label>
              </td>
              <td className="border text-center">
                <div className='flex justify-around'>
                 {user.IsActive ?
                <button className="px-2 py-1 bg-danger text-white rounded-md flex  gap-2 p-2 items-center"
                 onClick={() => handleStatusUpdate({IsActive: false, UserId: user.Id})}
                >
                {/* <BiPen color='white' /> */}
                    CANCEL</button>
                :
                <button className="px-2 py-1 bg-success text-white rounded-md flex  gap-2 p-2 items-center"
                onClick={() => handleStatusUpdate({IsActive: true, UserId: user.Id})}
                >
                {/* <BiPen color='white' /> */}
                    APPROVE</button>
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

export default UserTable;
