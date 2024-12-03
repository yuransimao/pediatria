import React from 'react'
import { Outlet } from 'react-router-dom'

import { Sidbar } from './sidbar'
import { useSidebarContext } from '@/context'
import { Header } from './header'
function Layout() {

    const { Open, setOpen } = useSidebarContext()
    return (
        <React.Fragment>
            <div className='relative w-full flex bg-neutral-900'>
                <Sidbar Open={Open} setOpen={setOpen} />

                <div className={`transition-all duration-500 ease-in-out border-l-2   border-neutral-700   bg-neutral-950  ${Open ? 'w-[83.333333%]' : 'w-full'}`}>
                    <Header/>

                    <div  className='px-4 py-6'><Outlet /></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export { Layout }