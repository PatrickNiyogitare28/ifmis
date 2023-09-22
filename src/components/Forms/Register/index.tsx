import FormActionButton from '@/components/Elements/FormActionButton';
import Input from '@/components/Elements/Input';
import Link from 'next/link';
import React from 'react';
import useSignUp from './hooks/useSignup';

export default function RegisterForm(){
    const {errors, touched, getFieldProps, values, loading, onSubmit} = useSignUp();
    return (
        <div className='bg-white rounded-xl w-full px-12 py-12 shadow-sm'>
            <h1 className='text-xl text-black font-bold'>Create account</h1>
            <h3 className='text-gray-400 font-lighter'>Appointment & Communication App</h3>
            <div className='mt-8'>
                <form noValidate onSubmit={(event: any) => onSubmit(event)}>
                <div className='mt-4'>
                <Input 
                placeholder='Full Name' 
                type='text' 
                isDirty={(errors.FullName && touched.FullName) ? true : false}
                fieldProps={getFieldProps("FullName")}
                error={errors.FullName}
               />
                </div>
                <div className='mt-4'>
                <Input 
                placeholder='Phone number' 
                type='text'
                isDirty={(errors.Phone && touched.Phone) ? true : false}
                fieldProps={getFieldProps("Phone")}
                error={errors.Phone}
                 />
                </div>
                <div className='mt-4'>
                <Input 
                placeholder='Email' 
                type='text' 
                isDirty={(errors.Email && touched.Email) ? true : false}
                fieldProps={getFieldProps("Email")}
                error={errors.Email}
                />
                </div>
                <div className='mt-4'>
                    <Input 
                    placeholder='Password' 
                    type='password' 
                    isDirty={(errors.Password && touched.Password) ? true : false}
                    fieldProps={getFieldProps("Password")}
                    error={errors.Password}
                    />
                </div>
                <div className='mt-6'>
                    <FormActionButton 
                       onSubmit={() => {}}
                       type="submit"
                       disabled={(Object.keys(errors).length === 0 || (Object.keys(touched).length === 0) || loading) ? false : true}
                       label={(loading) ? "REGISTERING ..." : "REGISTERING"}
                    />
                </div>
                </form>
                <div className='mt-4'>
                    <span className='text-gray-600'>Have account? <Link href="/auth/signin" className='text-primary'>Login</Link></span>
                </div>
            </div>
        </div>
    )
}