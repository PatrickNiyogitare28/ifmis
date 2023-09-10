import React, { useState } from 'react';
import {BiPlus} from 'react-icons/bi';
import Modal from '../Modal';
import IntegrationTypeTable from '../Elements/Tables/IntegrationType';
import INTEGRATION_TYPES from '@/lib/integration-types';
import AddIntegrationTypeForm from '../Forms/IntegrationType/AddIntegrationType';

export default function IntegrationTypes () {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <>
        <div className='p-6'>
            <div className='w-full flex'>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2 ml-auto' onClick={() => setShowModal(true)}>
                    <BiPlus color="white" />
                    <label className='text-white font-light'>ADD NEW TYPE</label>
                </button>
            </div>
            <div className="mt-4">
            <IntegrationTypeTable integrationTypes={INTEGRATION_TYPES} />
            </div>
        </div>
        {showModal &&
          <Modal title='ADD INTEGRATION TYPE' onClose={() => setShowModal(false)}>
            <AddIntegrationTypeForm />
          </Modal>
        }
        </>
    )
}