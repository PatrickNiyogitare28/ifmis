import IntegrationRequests from '@/components/IntegrationRequests';
import Dashboard from '@/components/Layouts/Dashboard';
import React from 'react';

export default function AppointmentsPage(){
    return (
       <Dashboard role={'ADMIN'}>
            <IntegrationRequests />
       </Dashboard>
    )
}