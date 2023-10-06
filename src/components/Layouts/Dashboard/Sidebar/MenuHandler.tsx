import React from 'react';
import MenuItem from './Menu';
import {BiSolidDashboard, BiBox, BiListUl, BiGroup, BiSolidUserAccount} from 'react-icons/bi';
import useActiveRoute from './hooks/useActiveRoute';

export function AdminMenuHandler({onDashboard}: {onDashboard?:boolean}){
    const {checkIsActiveRoute, onRoute} = useActiveRoute();
    return (
        <div className='mt-12'>
            <MenuItem 
             onRoute={() => onRoute("/admin")}
             isActive={onDashboard ? true : checkIsActiveRoute("/admin", true)}
             icon={<BiSolidDashboard color={(checkIsActiveRoute("/admin", true) || onDashboard) ? 'white' : 'silver'} size={20} />}
             label='Dashboard'
            />
            <MenuItem 
             onRoute={() => onRoute("/admin/appointments")}
             isActive={checkIsActiveRoute("/admin/appointments", true)}
             icon={<BiBox color={(checkIsActiveRoute("/admin/appointments", true)) ? 'white' : 'silver'} size={20} />}
             label='Appointments'
            />
             <MenuItem 
             onRoute={() => onRoute("/admin/messages")}
             isActive={checkIsActiveRoute("/admin/messages", true)}
             icon={<BiListUl color={(checkIsActiveRoute("/admin/messages", true)) ? 'white' : 'silver'} size={20} />}
             label='Messages'
            />
             <MenuItem 
             onRoute={() => onRoute("/admin/users")}
             isActive={checkIsActiveRoute("/admin/users", true)}
             icon={<BiGroup color={(checkIsActiveRoute("/admin/users", true)) ? 'white' : 'silver'} size={20} />}
             label='Users'
            />
             <MenuItem 
             onRoute={() => onRoute("/admin/profile")}
             isActive={checkIsActiveRoute("/admin/profile", true)}
             icon={<BiSolidUserAccount color={(checkIsActiveRoute("/admin/profile", true)) ? 'white' : 'silver'} size={20} />}
             label='Profile'
            />
        </div>
    )
}

export function StandardUserMenuHandler({onDashboard}: {onDashboard?:boolean}){
    const {checkIsActiveRoute, onRoute} = useActiveRoute();
    return (
        <div className='mt-12'>
            <MenuItem 
             onRoute={() => onRoute("/account")}
             isActive={onDashboard ? true : checkIsActiveRoute("/account", true)}
             icon={<BiSolidDashboard color={(checkIsActiveRoute("/account", true) || onDashboard) ? 'white' : 'silver'} size={20} />}
             label='Dashboard'
            />
            <MenuItem 
             onRoute={() => onRoute("/account/appointments")}
             isActive={checkIsActiveRoute("/account/appointments", true)}
             icon={<BiBox color={(checkIsActiveRoute("/account/appointments", true)) ? 'white' : 'silver'} size={20} />}
             label='Appointments'
            />
             <MenuItem 
             onRoute={() => onRoute("/account/messages")}
             isActive={checkIsActiveRoute("/account/messages", true)}
             icon={<BiListUl color={(checkIsActiveRoute("/account/messages", true)) ? 'white' : 'silver'} size={20} />}
             label='Messages'
            />
            <MenuItem 
             onRoute={() => onRoute("/account/profile")}
             isActive={checkIsActiveRoute("/account/profile", true)}
             icon={<BiSolidUserAccount color={(checkIsActiveRoute("/account/profile", true)) ? 'white' : 'silver'} size={20} />}
             label='Profile' />
        </div>
    )
}