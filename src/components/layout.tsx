import React from 'react'
import { Outlet } from 'react-router-dom'

import { Sidbar } from './sidbar'
import { useSidebarContext } from '@/context'
import { MessageCircle,Bell } from 'lucide-react'
function Layout() {

    const {Open, setOpen} =  useSidebarContext()
    return (
        <React.Fragment>
            <div className='relative w-full flex bg-neutral-900'>
                <Sidbar Open={Open} setOpen={setOpen}/>
               
                <div className={`transition-all duration-500 ease-in-out border-l-2   border-neutral-700  p-8 bg-neutral-950  ${Open ? 'w-[83.333333%]' : 'w-full' }`}>
                    <div className='px-4 flex justify-end items-center gap-4'>
                        <button className='rounded-full p-2 bg-neutral-800'>
                            <MessageCircle size={20}/>
                        </button>
                        <div>
                            <Bell size={20}/>
                        </div>
                    </div>
                    
                    <div><Outlet /></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export { Layout }