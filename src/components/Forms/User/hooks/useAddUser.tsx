import { useState } from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { CreateUserMutationVariables } from '@/generated/graphql';
import { hashPassword } from '@/utils/hash-password';
import {toast} from 'react-hot-toast';
import axiosInstance from '@/lib/axios';

export default function useAddUser({onClose} : {onClose: () => void;}){
    const [loading, setLoading] = useState(false)
    const initialValues = {
        FullName: '',
        Email: '',
        Phone: '',
        Password: '',
        Role: ''
    }
    const validationSchema = Yup.object().shape({
        FullName: Yup.string().required("Full name is required"),
        Email: Yup.string().email().required("Email is required"),
        Phone: Yup.string().required("Phone number is required"),
        Password: Yup.string().min(6, "Default Password should be alteast 8 chars").required("Password is required"),
        Role: Yup.string().required("Role is required")
    })

    const {errors, touched, getFieldProps, handleSubmit, values, resetForm, setFieldValue} = useFormik({
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
        IsActive: true,
        Role: values.Role,
        IsOrganization: false,
      }
      axiosInstance.post('/auth/signup',NewUserDto)
      .then(() => {
        setLoading(false);
        toast.success("User registered successfully")
        resetForm();
        onClose();
      })
      .catch((error: any) => {
        console.log(error);
        setLoading(false);
        return toast.error("User Registration failed, an error occurred.") 
      })
      
    }

    return {
        errors,
        touched,
        getFieldProps,
        handleSubmit,
        values,
        loading,
        onSubmit,
        setFieldValue
    }
}
