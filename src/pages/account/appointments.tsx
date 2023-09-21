import Appointments from '@/components/Appointments';
import Dashboard from '@/components/Layouts/Dashboard';
import React from 'react';

export default function AppointmentsPage(){
    return (
       <Dashboard role={'ADMIN'}>
            <Appointments />
       </Dashboard>
    )
}