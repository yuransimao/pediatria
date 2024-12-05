import React from 'react'
import { User } from 'lucide-react'

interface CardContentMemberProp{
    name: string;
    age: number;
    date: string; 
}
function CardContentMember({name, age,date}:CardContentMemberProp) {
    return (
        <React.Fragment>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <span className='p-3 rounded bg-neutral-900'>
                        <User size={18} />
                    </span>
                    <div>
                        <h4 className='font-semibold text-sm'>{name}</h4>
                        <p className='text-xs'>{date}</p>
                    </div>
                </div>
                <h5 className='text-sm font-medium text-green-500'>{age}</h5>
            </div>
        </React.Fragment>
    )
}

export { CardContentMember }