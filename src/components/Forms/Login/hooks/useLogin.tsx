import { useState } from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { CreateUserMutationVariables, GetUserWithEmailDocument, useCreateUserMutation } from '@/generated/graphql';
import  {toast} from 'react-hot-toast';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/router';

export default function useSignUp(){
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    
    const initialValues = {
        Email: '',
        Password: ''
    }
    const validationSchema = Yup.object().shape({
        Email: Yup.string().email().required("Email is required"),
        Password: Yup.string().required("Password is required")
    })

    const {errors, touched, getFieldProps, handleSubmit, values, resetForm} = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (_) => {

        }  
    })

    const onSubmit = async (e:any) => {
      e.preventDefault();
      setLoading(true);
     
      const LoginDto: CreateUserMutationVariables = {
        Email: values.Email,
        Password: values.Password
      }
      axiosInstance.post('/auth/login',LoginDto)
      .then(() => {
        setLoading(false);
        toast.success("Successfully logged in")
        router.replace('/')
        resetForm();

      })
      .catch((error: any) => {
        console.log(error);
        setLoading(false);
        return toast.error(error?.response?.data?.message ||"Login failed, an error occurred.") 
      })
      
    }

    return {
        errors,
        touched,
        getFieldProps,
        handleSubmit,
        values,
        loading,
        onSubmit
    }
}
