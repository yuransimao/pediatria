import React from 'react'
import { Button } from './ui'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { NavLinks } from './navLink';

interface SidbarProps {
    Open: boolean;
    setOpen: (isOpen: boolean) => void;

}
function Sidbar({ Open,setOpen }: SidbarProps) {
    return (
        <React.Fragment>
            <div className={`h-svh  ${Open ? 'w-1/6 flex-shrink-2' : 'w-28 flex-shrink-0'}   transition-all duration-500 ease-in-out relative`}>


                <div className={`h-full  ${Open ? 'w-1/6 flex-shrink-2' : 'w-28 flex-shrink-0'}   fixed  transition-all duration-500 ease-in-out bg-neutral-100`}>

                    <div className='h-full w-full relative  px-6 '>
                        <Button className='duration-300 ease-in-out absolute top-4 p-4 rounded-full w-5 h-5 -right-4 bg-blue-600 hover:bg-blue-700 hover:opacity-95'
                            onClick={() => setOpen(!Open)}
                        >
                            {Open ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
                        </Button>
                        <div className='space-y-12 flex flex-col justify-center h-full'>
                        <h2>Pediatricas</h2>

                        <div className=' w-full h-4/5 flex items-center justify-center'>
                            <NavLinks/>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export { Sidbar }