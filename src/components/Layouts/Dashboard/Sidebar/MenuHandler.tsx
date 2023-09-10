import React from 'react';
import MenuItem from './Menu';
import {BiSolidDashboard, BiBox, BiListUl, BiGroup} from 'react-icons/bi';
import useActiveRoute from './hooks/useActiveRoute';

export default function MenuHandler(){
    const {checkIsActiveRoute, onRoute} = useActiveRoute();
    return (
        <div className='mt-12'>
            <MenuItem 
             onRoute={() => onRoute("/admin")}
             isActive={checkIsActiveRoute("/admin", true)}
             icon={<BiSolidDashboard color={(checkIsActiveRoute("/admin", true)) ? 'white' : 'silver'} size={20} />}
             label='Dashboard'
            />
            <MenuItem 
             onRoute={() => onRoute("/admin/integration-requests")}
             isActive={checkIsActiveRoute("/admin/integration-requests", true)}
             icon={<BiBox color={(checkIsActiveRoute("/admin/integration-requests", true)) ? 'white' : 'silver'} size={20} />}
             label='Integration requests'
            />
             <MenuItem 
             onRoute={() => onRoute("/admin/integration-types")}
             isActive={checkIsActiveRoute("/admin/integration-types", true)}
             icon={<BiListUl color={(checkIsActiveRoute("/admin/integration-types", true)) ? 'white' : 'silver'} size={20} />}
             label='Integration types'
            />
             <MenuItem 
             onRoute={() => onRoute("/admin/integration-users")}
             isActive={checkIsActiveRoute("/admin/users", true)}
             icon={<BiGroup color={(checkIsActiveRoute("/admin/users", true)) ? 'white' : 'silver'} size={20} />}
             label='Users'
            />
        </div>
    )
}