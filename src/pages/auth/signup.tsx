import React from 'react';
import Image from 'next/image'
import RegisterForm from '@/components/Forms/Register';

export default function Signup(){
    return (
        <div className='h-[100vh] w-screen bg-white flex items-center overflow-y-hidden'>
            <div className='w-[50%] flex items-center'>
              <img  src="/assets/images/imigongo.png" alt="bars" className='h-full ml-[5%]' />
              <div className='flex justify-around h-[100%] items-center'>
                    <img src="/assets/images/app-logo.png" alt="logo" className=' ' draggable={false}  style={{width: 400}} />
                </div>
            </div>
            <div className='w-[30%]'>
                <RegisterForm />
            </div>
        </div>
    )
}