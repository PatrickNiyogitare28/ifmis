import React from 'react';
import {BiGroup, BiSolidGroup, BiListCheck, BiListMinus} from 'react-icons/bi';

export default function AdminStatistics () {
    return (
        <div className='w-full flex justify-between  px-6 mt-6    '>
            <div className='w-[20%] bg-white shadow-md rounded-md p-4'>
                <div className='flex justify-between items-center'>
                <label>APPOINTMENTS</label>
                <BiGroup size={30} color='silver' />
                </div>
                <div>
                    <label className='text-primary font-bold text-4xl'>28</label>
                </div>
            </div>

            <div className='w-[20%] bg-white shadow-md rounded-md p-4'>
                <div className='flex justify-between items-center'>
                <label>QUESTIONS</label>
                <BiSolidGroup size={30}  color='silver'  />
                </div>
                <div>
                    <label className='text-primary font-bold text-4xl'>12</label>
                </div>
            </div>

            <div className='w-[20%] bg-white shadow-md rounded-md p-4'>
                <div className='flex justify-between items-center'>
                <label>CLIENTS</label>
                <BiListCheck  size={35} color={"silver"} />
                </div>
                <div>
                    <label className='text-primary font-bold text-4xl'>8</label>
                </div>
            </div>

            <div className='w-[20%] bg-white shadow-md rounded-md p-4'>
                <div className='flex justify-between items-center'>
                <label>ORGNIZATION</label>
                <BiListMinus size={35} color={"silver"} />
                </div>
                <div>
                    <label className='text-primary font-bold text-4xl'>28</label>
                </div>
            </div>
        </div>
    )
}