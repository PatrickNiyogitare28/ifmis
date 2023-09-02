import React from 'react';
import Image from 'next/image'
import LoginForm from '@/components/Forms/Login';

export default function Login(){
    return (
        <div className='h-[100vh] w-screen bg-primary flex items-center overflow-y-hidden'>
            <div className='w-[50%] flex'>
                <img  src="/assets/images/white-bars.svg" alt="bars" className='h-full ml-[5%]' />
                <img src="/assets/images/app-logo-blue.svg" alt="logo" className='w-[80%]' />
            </div>
            <div className='w-[30%]'>
                <LoginForm />
            </div>
        </div>
    )
}