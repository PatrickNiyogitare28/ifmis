import React from 'react';
import {Toaster} from 'react-hot-toast';
import RegisterForm from '@/components/Forms/Register';
import Credit from '@/components/Credit';

export default function Signup(){
    return (
        <div className='h-[100vh] w-screen bg-white flex items-center overflow-y-hidden'>
            <Toaster/>
            <Credit />
            <div className='w-[50%] flex items-center'>
              <img  src="/assets/images/imigongo.png" alt="bars" className='h-full ml-[5%]' />
              <div className='flex justify-around h-[100%] items-center'>
                    <img src="/assets/images/app-logo.png" alt="logo" className=' ' draggable={false}  style={{width: 400}} />
                </div>
            </div>
            <div className='w-[50%] bg-primary h-full flex items-center justify-around'>
                <div className='w-[60%]'>
                <RegisterForm />
                </div>
            </div>
        </div>
    )
}