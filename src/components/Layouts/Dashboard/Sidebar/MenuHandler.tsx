import React from 'react';
import MenuItem from './Menu';
import {BiSolidDashboard, BiBox, BiListUl, BiGroup} from 'react-icons/bi';

export default function MenuHandler(){
    return (
        <div className='mt-12'>
            <MenuItem 
             icon={<BiSolidDashboard color='silver' size={20} />}
             label='Dashboard'
            />
            <MenuItem 
             icon={<BiBox color='silver' size={20} />}
             label='Integration requests'
            />
             <MenuItem 
             icon={<BiListUl color='silver' size={20} />}
             label='Integration types'
            />
             <MenuItem 
             icon={<BiGroup color='silver' size={20} />}
             label='Users'
            />
        </div>
    )
}