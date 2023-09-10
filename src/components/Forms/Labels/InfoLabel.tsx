import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';

export default function InfoLabel ({text, info}: {text: string, info: string}) {
    return (
    <div className='mb-2'>
        <label className='text-sm'>{text} <div className='text-gray-400 text-xs flex items-center gap-2'><BiInfoCircle /> {info}</div></label>
    </div>
    )
}