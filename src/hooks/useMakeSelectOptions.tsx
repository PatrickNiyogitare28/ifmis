
import React, { useEffect, useState } from 'react';
import INTEGRATION_TYPES from '@/lib/integration-types';

export interface SelectOption  {
    label: string,
    value: string
}
export default function useMakeSelectOptions(){
    const [integrationTypesOptions, setIntegrationTypesOptions] = useState<SelectOption[]>([]);
    const makeOptions = () => {
        setIntegrationTypesOptions([] );
        const optionList: SelectOption[] = [];
        INTEGRATION_TYPES.forEach((type) => {
            const option = {
                value: type.Id,
                label: type.Name
            }
            optionList.push(option);
        });
        setIntegrationTypesOptions(optionList);
    }

    useEffect(() => {
        makeOptions();
    },[])
    return {
        integrationTypesOptions
    }
}