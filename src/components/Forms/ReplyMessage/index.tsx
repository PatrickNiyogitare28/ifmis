import Input from '@/components/Elements/Input';
import React from 'react';
import InfoLabel from '../Labels/InfoLabel';
import useAddMessage from './hooks/useAddMessage';
import { TSessionUser } from '@/types/user';
import Select from 'react-select';
import FormActionButton from '@/components/Elements/FormActionButton';


export default function ReplyMessageForm({User, onClose, MessageId, refetch}: {User: TSessionUser, onClose: () => void, MessageId: string, refetch: () => void}){
    const {errors, touched, values, setFieldValue,getFieldProps, loading, onSubmit } = useAddMessage({User, onClose, MessageId, refetch})
    
    return (
        <div className='w-[30vw]'>
            <form noValidate onSubmit={(event: any) => onSubmit(event)}>
            <div className='mt-2'>
            <InfoLabel text='Message' info='Add your reply message' />
            <Input placeholder='Type here' isTextArea type="text"
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
                label={(loading) ? "SENDING ..." : "SEND"}
            />
            </div>
            </form>
        </div>
    )
}