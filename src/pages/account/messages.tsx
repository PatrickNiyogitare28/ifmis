import IntegrationTypes from '@/components/IntegrationTypes';
import Dashboard from '@/components/Layouts/Dashboard';
import React from 'react';

export default function MessagesPage(){
    return (
       <Dashboard role={'ADMIN'}>
            <IntegrationTypes />
       </Dashboard>
    )
}