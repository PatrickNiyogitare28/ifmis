import { TSessionUser } from "@/types/user";
import { useState } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { CreateMessageMutationVariables } from "@/generated/graphql";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export default function useAddMessage({User, onClose}: {User: TSessionUser, onClose: () => void}){
    const [loading, setLoading] = useState<boolean>(false);
    const messageTypeOptions = [
        {
          label: 'INFORMATION',
          value: 'INFORMATION'
        },
        {
          label: 'QUESTION',
          value: 'QUESTION'
        },
        {
          label: 'FEEDBACK',
          value: 'FEEDBACK'
        },
        {
          label: 'COMPLAINT',
          value: 'COMPLAINT'
        },
        {
            label: 'OTHER',
            value: 'OTHER'
          }
      ];
      
    const initialValues = {
        Type: '',
        Message: ''
    }

    const validationSchema = Yup.object({
        Type: Yup.string().required('Message type is required'),
        Message: Yup.string().required('Message is required')
    })

    const {errors, touched, values, getFieldProps, setFieldValue, resetForm} = useFormik({
        initialValues,
        validationSchema,
        onSubmit(){}
    })
    
    const onSubmit = (e:any) => {
        e.preventDefault();
        const mutationVariables: CreateMessageMutationVariables = {
          Type: values.Type,
          Message: values.Message,
          UserId: User.Id
        }
        setLoading(true);
        axiosInstance.post('/messages/create', mutationVariables)
        .then((data) => {
          setLoading(false);
          toast.success("Message sent successfully");
          resetForm()
          onClose();
        })
        .catch((e)=> {
          setLoading(false);
          console.log(e);
          toast.error("Message not sent, error occurred")
        })
    }
    return {
        loading,
        errors,
        touched,
        values,
        getFieldProps,
        setFieldValue,
        onSubmit,
        messageTypeOptions
    }
}