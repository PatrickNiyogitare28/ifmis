import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function UseLayout () {
    const [user, setUser] = useState<{email: string, name: string, role: string}>()
    const [avatar, setAvatar] = useState<string>('');
    const router = useRouter();
    const getRole = () => {
        const isAuthorized = localStorage.getItem('AUTH');
        if(!JSON.parse(isAuthorized as string)) return router.push('/');
        const user:any = JSON.parse(localStorage.getItem('USER') as string);
        if(!user) return router.push('/');
        const authUser= {
            name: user.name,
            role: user.role,
            email: user.email
        }
        getAvatar(user.name);
        setUser(authUser);
    }

    const getAvatar = (name: string) => {
        const firstName = name?.split(" ")[0];
        const lastName = name?.split(" ")[1];
        const avatar = firstName?.split("")[0]+""+lastName?.split("")[0];
        setAvatar(avatar);
    }
    useEffect(() => {
        getRole();
    },[])
    return {
        user,
        avatar
    }
}