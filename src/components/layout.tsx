import React from 'react'
import { Outlet } from 'react-router-dom'

import { Sidbar } from './sidbar'
import { useSidebarContext } from '@/context'

function Layout() {

    const {Open, setOpen} =  useSidebarContext()
    return (
        <React.Fragment>
            <div className='relative w-full flex bg-neutral-100'>
                <Sidbar Open={Open} setOpen={setOpen}/>
               
                <div className={`transition-all duration-500 ease-in-out border-l-2 border-t-2  border-neutral-200 rounded-tl-3xl p-8  bg-white ${Open ? 'w-[83.333333%]' : 'w-full' }`}>
                    <div>Header</div>
                    
                    <div><Outlet /></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export { Layout }