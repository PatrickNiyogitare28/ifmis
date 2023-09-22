import Input from '@/components/Elements/Input';
import React from 'react';
import Select from 'react-select';
import InfoLabel from '../Labels/InfoLabel';
import useAddUser from './hooks/useAddUser';
import FormActionButton from '@/components/Elements/FormActionButton';


export default function AddUserForm({onClose}: {onClose: () => void}){
    const {errors, touched, getFieldProps, values, loading, onSubmit, setFieldValue} = useAddUser({onClose});

    const roleOptions = [
        {
            value: 'STANDARD USER',
            label: 'STANDARD USER'
        },
        {
            value: 'ADMIN',
            label: 'ADMIN'
        }
    ]
    return (
        <div className='w-[30vw]'>
            <form onSubmit={(event: any) => onSubmit(event)}>
            <div className='mt-4'>
                <Input 
                placeholder='Full name' 
                type="text"
                isDirty={(errors.FullName && touched.FullName) ? true : false}
                fieldProps={getFieldProps("FullName")}
                error={errors.FullName}
                />
            </div>
            <div className='mt-2'>
                <Input 
                placeholder='Email' 
                type="text"
                isDirty={(errors.Email && touched.Email) ? true : false}
                fieldProps={getFieldProps("Email")}
                error={errors.Email}
                />
            </div>
            <div className='mt-2'>
                <Input 
                placeholder='Phone' 
                type="text" 
                isDirty={(errors.Phone && touched.Phone) ? true : false}
                fieldProps={getFieldProps("Phone")}
                error={errors.Phone}
                />
            </div>
            <div className='mt-2'>
                <Input 
                placeholder='Default password' 
                type="password"
                isDirty={(errors.Password && touched.Password) ? true : false}
                fieldProps={getFieldProps("Password")}
                error={errors.Password}
                />
            </div>
            <div className='mt-2'>
                <InfoLabel text='Select Role' info='The user Role' />
                <Select 
                onChange={(selected) => setFieldValue("Role", selected?.value)}
                options={roleOptions}  classNamePrefix='py-[5px]  bg-red-500' className='rounded-xl'/>
            </div>
            <div className='flex w-[max-content] mt-4'>
            {/* <button className='bg-primary flex gap-2 items-center mt-4  px-6 rounded-xl py-2 ml-auto'> */}
                    {/* <label className='text-white font-light'>SAVE</label> */}
                    <FormActionButton 
                       onSubmit={() => {}}
                       type="submit"
                       disabled={(Object.keys(errors).length === 0 || (Object.keys(touched).length === 0) || loading) ? false : true}
                       label={(loading) ? "SAVING ..." : "SAVE"}
                    />
                {/* </button> */}
            </div>
            </form>
        </div>
    )
}