import IntegrationTypes from '@/components/UserMessages';
import Dashboard from '@/components/Layouts/Dashboard';
import React from 'react';

export default function MessagesPage(){
    return (
       <Dashboard role={'ADMIN'}>
            <IntegrationTypes />
       </Dashboard>
    )
}