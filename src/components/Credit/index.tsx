import React from 'react';

export default function Credit(){
    return (
        <div className='absolute bottom-1 right-1 bg-white rounded-md flex gap-4 items-center p-4 shadow'>
                <div>
                    <img src="/assets/images/osee.jpeg" alt="Osee" className='rounded-full w-[40px]' />
                </div>
                <div>
                <label className='text-sm text-gray-600'>Made by <span className='font-bold text-black'>OSEE NTWALI</span></label>
                <label className='text-xs block text-gray-400'>Student at Adventist University of Center Africa</label>
                </div>
            </div>
    )
}