import React from 'react';
import Sidebar from './Sidebar';
import { ERole } from '@/enums/ERole';
import Navbar from './Navbar';
import { TSessionUser } from '@/types/user';

interface DashboardProps {
    User: TSessionUser;
    children: React.ReactNode
}
export default function Dashboard ({User, children}: DashboardProps) {
    return (
        <div className="h-[100vh] w-screen overflow-y-hidden flex">
            <div className='w-[15%]'>
                <Sidebar User={User} />
            </div>
            <div className='w-[85%] h-[100vh] overflow-y-scroll'>
                <Navbar User={User} />
                <div>
                {children}
                </div>
            </div>
        </div>  
    )
}