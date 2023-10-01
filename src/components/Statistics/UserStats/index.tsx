import { TSessionUser } from '@/types/user';
import React from 'react';
import {BiGroup, BiSolidGroup, BiListCheck, BiListMinus} from 'react-icons/bi';
import useGetUserStats from './hooks/useGetUserStats';
import UserBarChart from '../Charts/UserBar';
import UserPieChart from '../Charts/UserPai';

export default function UserStatistics ({User}: {User: TSessionUser}) {
    const {data} = useGetUserStats({userId: User.Id})
    return (
        <div>
        <h2 className='font-bold text-xl p-4 px-6'>Metrics</h2>
         <div className='w-full flex justify-between  px-6 mt-4'>
            <div className='w-[20%] bg-white shadow-md rounded-md p-4'>
                <div className='flex justify-between items-center'>
                <label>APPOINTMENTS</label>
                <BiGroup size={30} color='silver' />
                </div>
                <div>
                    <label className='text-primary font-bold text-4xl'>{data.allAppointments}</label>
                </div>
            </div>

            <div className='w-[20%] bg-white shadow-md rounded-md p-4'>
                <div className='flex justify-between items-center'>
                <label>APPROVED </label>
                <BiGroup size={30} color='silver' />
                </div>
                <div>
                    <label className='text-primary font-bold text-4xl'>{data?.approvedAppointment}</label>
                </div>
            </div>

            <div className='w-[20%] bg-white shadow-md rounded-md p-4'>
                <div className='flex justify-between items-center'>
                <label>REJECTED </label>
                <BiGroup size={30} color='silver' />
                </div>
                <div>
                    <label className='text-primary font-bold text-4xl'>{data?.rejectedAppointments}</label>
                </div>
            </div>

            <div className='w-[20%] bg-white shadow-md rounded-md p-4'>
                <div className='flex justify-between items-center'>
                <label>QUESTIONS</label>
                <BiSolidGroup size={30}  color='silver'  />
                </div>
                <div>
                    <label className='text-primary font-bold text-4xl'>{data.allMessages}</label>
                </div>
            </div>
        </div>
        <div className='py-4 '>
        <h2 className='font-bold text-xl p-4 px-6'>Statistics</h2>
        <div className='p-4 w-full flex justify-between   px-[4em] py-6'>
        <div className='w-[60%]'>
            <UserBarChart />
        </div>
        <div className='w-[30%]'>
        <UserPieChart replied={data.repliedMessages} notReplied={data.notRepliedMessages} />
        </div>
        </div>
        </div>
        </div>
    )
}