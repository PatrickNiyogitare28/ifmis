import React, { useState } from 'react';
import {BiPlus} from 'react-icons/bi';
import Modal from '../Modal';
import IntegrationRequestsTable from '../Elements/Tables/IntegrationRequests';
import INTEGRATION_REQUESTS from '@/lib/integration-requests';
import AddIntegrationRequestForm from '../Forms/IntegrationRequest/AddIntegrationRequest';

export default function IntegrationRequests () {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <>
        <div className='p-6'>
            <div className='w-full flex'>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2 ml-auto' onClick={() => setShowModal(true)}>
                    <BiPlus color="white" />
                    <label className='text-white font-light'>ADD NEW REQUEST</label>
                </button>
            </div>
            <div className="mt-4">
            <IntegrationRequestsTable integrationRequests={INTEGRATION_REQUESTS} />
            </div>
        </div>
        {showModal &&
          <Modal title='ADD INTEGRATION REQUEST' onClose={() => setShowModal(false)}>
            <AddIntegrationRequestForm />
          </Modal>
        }
        </>
    )
}