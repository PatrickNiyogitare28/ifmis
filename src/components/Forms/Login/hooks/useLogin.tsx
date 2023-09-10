import handleLogin from '@/lib/utils/handleLogin';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function useLogin(){
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router  = useRouter();

    const handleEmail = (value: string) => {
        if(value.length < 4) return;
        setEmail(value); 
    }

    const handlePassword = (value: string) => {
        if(value.length < 1) return;
        setPassword(value);
    }

    const onSubmit = () => {
        const isAuthorized = handleLogin({email, password});
        if(!isAuthorized.success) return toast.error(isAuthorized.message);
        toast.success(isAuthorized.message)
        localStorage.setItem('USER', JSON.stringify(isAuthorized.user))
        localStorage.setItem('AUTH', JSON.stringify(true));
        if((isAuthorized as any).user.role === 'ADMIN') router.push('/admin')
    }
    return {
        handleEmail,
        handlePassword,
        onSubmit
    }
}