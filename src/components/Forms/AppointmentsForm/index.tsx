import Input from '@/components/Elements/Input';
import users from '@/lib/users';
import React, { useEffect } from 'react';
import Select from 'react-select';
import InfoLabel from '../Labels/InfoLabel';
import DatePicker from "react-datepicker";
// import DateTimePicker from 'react-datetime-picker';
import { appointmentTypesOptions } from '@/types/appointment-type';
import useAddAppointment from './hooks/useAddAppointments';
import FormActionButton from '@/components/Elements/FormActionButton';
import { TSessionUser } from '@/types/user';


export default function AddAppointmentForm({User, onClose}: {User: TSessionUser, onClose: () => void}){
   const {errors, touched, values, setFieldValue, getFieldProps, loading, onSubmit } = useAddAppointment({User, onClose});
    return (
        <div className='w-[30vw]'>
            <form noValidate onSubmit={(event: any) => onSubmit(event)}>
            <div className='mt-4'>
            <InfoLabel text='Appointment' info='Appointment request title' />
            <Input 
            placeholder='Title' 
            type="text" 
            isDirty={(errors.Title && touched.Title) ? true : false}
            fieldProps={getFieldProps("Title")}
            error={errors.Title}
            />
            </div>

            <div className='mt-2'>
            <InfoLabel text='Category' info='Appointment type' />
             <Select 
             options={appointmentTypesOptions}  
             classNamePrefix='py-[5px]  bg-red-500' 
             className='rounded-xl'
             onChange={(selected) => setFieldValue('Type', selected?.value)}
             />
            </div>
            
            
            <div className='mt-2 w-full'>
                <InfoLabel text='Time' info='Select appointment date and time' />
                <DatePicker 
                 className='border-[0.5px] border-gray-400 p-4 w-full rounded-xl'
                 selected={(values.Time && values.Time.length > 0) ? new Date(values.Time) : new Date()}
                 onChange={(date) => setFieldValue("Time", date?.toString())}
                 showTimeSelect 
                 timeFormat="HH:mm" 
                 timeIntervals={15} 
                 dateFormat="MMMM d, yyyy h:mm aa"
                />
            </div>
            <div className='mt-4'>
            <InfoLabel text='Appointment reason' info='Why this appointment' />
            <Input placeholder='Reason' type="text" isTextArea={true}
            isDirty={(errors.Message && touched.Message) ? true : false}
            fieldProps={getFieldProps("Message")}
            error={errors.Message}
            />
            </div>

            <div className='mt-6 w-[max-content]'>
            <FormActionButton 
                onSubmit={() => {}}
                type="submit"
                disabled={(Object.keys(errors).length === 0 || (Object.keys(touched).length === 0) || loading) ? false : true}
                label={(loading) ? "REQUESTING ..." : "REQUEST"}
            />
            </div>
            </form>
        </div>
    )
}