import { useState } from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { CreateUserDocument, CreateUserMutationVariables, GetUserWithEmailDocument, useCreateUserMutation } from '@/generated/graphql';
import graphqlRequestClient from '@/lib/client';
import { hashPassword } from '@/utils/hash-password';
import Toaster, {toast} from 'react-hot-toast';
import { GetUserWithEmailQuery } from '@/generated/backendGraphql';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/router';

export default function useSignUp(){
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const initialValues = {
        FullName: '',
        Email: '',
        Phone: '',
        Password: ''
    }
    const validationSchema = Yup.object().shape({
        FullName: Yup.string().required("Full name is required"),
        Email: Yup.string().email().required("Email is required"),
        Phone: Yup.string().required("Phone number is required"),
        Password: Yup.string().min(6, "Password should be alteast 8 chars").required("Password is required")
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
     // check if email exists already
      const emailExistsResponse =  await axiosInstance.post('/auth/userByEmail', {Email: values.Email});
      if(emailExistsResponse.data.data.emailExists) {
        setLoading(false);
        return toast.error("Email already exists");
      }

      const NewUserDto: CreateUserMutationVariables = {
        FullName: values.FullName,
        Email: values.Email,
        Phone: values.Phone,
        Password: await hashPassword(values.Password),
        IsActive: false,
        Role: 'STANDARD USER',
        IsOrganization: false
      }
      axiosInstance.post('/auth/signup',NewUserDto)
      .then(() => {
        setLoading(false);
        toast.success("Successfully registered")
        router.replace('/auth/login')
        resetForm();
      })
      .catch((error: any) => {
        console.log(error);
        setLoading(false);
        return toast.error("Registration failed, an error occurred.") 
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
