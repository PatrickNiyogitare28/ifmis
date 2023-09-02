import React from 'react';
import Sidebar from './Sidebar';
import { ERole } from '@/enums/ERole';
import Navbar from './Navbar';

interface DashboardProps {
    role: 'ADMIN' | 'REFUGEE_FOCAL_POINT' | 'REFUGEE';
    children: React.ReactNode
}
export default function Dashboard ({role, children}: DashboardProps) {
    return (
        <div className="h-[100vh] w-screen overflow-y-hidden flex">
            <div className='w-[15%]'>
                <Sidebar />
            </div>
            <div className='w-[85%] h-[100vh] overflow-y-scroll'>
                <Navbar />
                <div>
                {children}
                </div>
            </div>
        </div>  
    )
}