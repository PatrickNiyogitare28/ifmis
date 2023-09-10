import FormActionButton from '@/components/Elements/FormActionButton';
import Input from '@/components/Elements/Input';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useLogin from './hooks/useLogin';

export default function LoginForm(){
    const router = useRouter();
    const {handleEmail, handlePassword, onSubmit} = useLogin();

    return (
        <div className='bg-white rounded-xl w-full px-12 py-12'>
            <h1 className='text-xl text-black font-bold'>Login to continue</h1>
            <h3 className='text-gray-400 font-lighter'>Refugee Settlement System</h3>
            <div className='mt-8'>
                <div className='mt-4'>
                <Input placeholder='Email' type='text' onChange={handleEmail} />
                </div>
                <div className='mt-4'>
                    <Input placeholder='Password' type='password' onChange={handlePassword} />
                </div>
                <div className='mt-6'>
                    <FormActionButton label='SUBMIT' onSubmit={onSubmit} />
                </div>
                <div className='mt-4'>
                    <span className='text-gray-600'>Have no account? <Link href="/auth/signup" className='text-primary'>Create Account</Link></span>
                </div>
            </div>
        </div>
    )
}