import * as Yup from 'yup';
import {useFormik} from 'formik';
import { useState } from 'react';
import { AddAppointmentMutationVariables } from '@/generated/graphql';
import { TSessionUser } from '@/types/user';
import axiosInstance from '@/lib/axios';
import toast from 'react-hot-toast';

export default function useAddAppointment ({User, onClose}: {User: TSessionUser, onClose: () => void}){
    const [loading, setLoading] = useState<boolean>(false);
    const initialValues = {
        Title: '',
        Message: '',
        Type: '',
        Time: ''
    }

    const validationSchema = Yup.object({
        Title: Yup.string().required("Title is required"),
        Message: Yup.string().required("Message is required"),
        Type: Yup.string().required("Type is required"),
        Time: Yup.string().required("Appointment Time is requred")
    })

    const {errors, touched, values, setFieldValue, getFieldProps, resetForm} = useFormik({
        initialValues,
        validationSchema,
        onSubmit(){}
    })

    const onSubmit = (e:any) => {
        e.preventDefault();
        const mutationVariables: AddAppointmentMutationVariables = {
            Title: values.Title,
            Message: values.Message,
            Type: values.Type,
            Time: values.Time,
            UserId: User.Id
        }
        setLoading(true)
        axiosInstance.post('/appointments/create', mutationVariables)
        .then((data) => {
            setLoading(false);
            resetForm()
            onClose();
            toast.success("Appointment requested successfully")
        })
        .catch((error) => {
            setLoading(false);
            console.log(error)
            toast.error("Appointment request failed, error occured")
        })
    }
    return {
        errors,
        touched,
        values,
        setFieldValue,
        getFieldProps,
        loading,
        onSubmit
    }
}