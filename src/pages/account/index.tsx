import Dashboard from '@/components/Layouts/Dashboard';
import AdminStatistics from '@/components/Statistics';
import AdminUsers from '@/components/Users/AdminUsers';
import { TSessionUser } from '@/types/user';
import React from 'react';

export default function Account({User}: {User: TSessionUser}){
    return (
       <Dashboard User={User}>
           <div>
            <AdminStatistics />
            <AdminUsers />
           </div>
       </Dashboard>
    )
}