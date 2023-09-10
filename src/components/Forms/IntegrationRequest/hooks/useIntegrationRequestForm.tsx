import users from '@/lib/users';
import React, { useEffect, useState } from 'react';

export interface SelectOption  {
    label: string,
    value: string
}
export default function useIntegrationRequestFrom(){
    const [refugeeOptions, setRefugeeOptions] = useState<SelectOption[]>([]);
    const makeOptions = () => {
        setRefugeeOptions([] );
        const optionList: SelectOption[] = [];
        users.forEach((user) => {
            if(user.Role != 'REFUGEE') return;
            const option = {
                value: user.Id,
                label: user.FullName
            }
            optionList.push(option);
        });
        setRefugeeOptions(optionList);
    }

    useEffect(() => {
        makeOptions();
    },[])
    return {
        refugeeOptions
    }
}