import Dashboard from '@/components/Layouts/Dashboard';
import AdminUsers from '@/components/Users/AdminUsers';
import React from 'react';

export default function Admin(){
    return (
       <Dashboard role={'ADMIN'}>
            <AdminUsers />
       </Dashboard>
    )
}