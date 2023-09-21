import Dashboard from '@/components/Layouts/Dashboard';
import AdminStatistics from '@/components/Statistics';
import AdminUsers from '@/components/Users/AdminUsers';
import React from 'react';

export default function Admin(){
    return (
       <Dashboard role={'ADMIN'}>
           <div>
            <AdminStatistics />
            <AdminUsers />
           </div>
       </Dashboard>
    )
}