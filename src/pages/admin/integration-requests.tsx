import IntegrationRequests from '@/components/IntegrationRequests';
import Dashboard from '@/components/Layouts/Dashboard';
import React from 'react';

export default function IntegrationRequestsPage(){
    return (
       <Dashboard role={'ADMIN'}>
            <IntegrationRequests />
       </Dashboard>
    )
}