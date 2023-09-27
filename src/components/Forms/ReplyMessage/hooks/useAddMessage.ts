import { TSessionUser } from "@/types/user";
import { useState } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { AddMessageReplyMutationVariables, CreateMessageMutationVariables } from "@/generated/graphql";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

interface Props {
  User: TSessionUser, 
  onClose: () => void, 
  MessageId: string,
  refetch: () => void
}
export default function useAddMessage({User, onClose, MessageId, refetch} : Props){
    const [loading, setLoading] = useState<boolean>(false);
      
    const initialValues = {
        Message: ''
    }

    const validationSchema = Yup.object({
        Message: Yup.string().required('Message is required')
    })

    const {errors, touched, values, getFieldProps, setFieldValue, resetForm} = useFormik({
        initialValues,
        validationSchema,
        onSubmit(){}
    })
    
    const onSubmit = (e:any) => {
        e.preventDefault();
        const mutationVariables: AddMessageReplyMutationVariables = {
          Reply: values.Message,
          MessageId,
          UserId: User.Id
        }
        setLoading(true);
        axiosInstance.post(`/messages/${MessageId}/reply`, mutationVariables)
        .then((data) => {
          setLoading(false);
          toast.success("Reply sent successfully");
          refetch()
          resetForm()
          onClose();
        })
        .catch((e)=> {
          setLoading(false);
          console.log(e);
          toast.error("Reply not sent, error occurred")
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
    }
}