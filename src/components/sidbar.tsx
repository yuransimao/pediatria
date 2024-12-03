import React from 'react'
import {
    Button, 
} from './ui'
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react'
import Logo from '@/assets/ped.png'
import { NavLinks } from './navLink';
import { motion } from 'framer-motion';

interface SidbarProps {
    Open: boolean;
    setOpen: (isOpen: boolean) => void;

}
function Sidbar({ Open, setOpen }: SidbarProps) {
    return (
        <React.Fragment>
            <div className={`h-svh  ${Open ? 'w-1/6 flex-shrink-2' : 'w-24 flex-shrink-0'}   transition-all duration-500 ease-in-out relative`}>


                <div className={`h-full   ${Open ? 'w-1/6 flex-shrink-2' : 'w-24 flex-shrink-0'}   fixed  transition-all duration-500 ease-in-out `}>

                    <div className='h-full w-full relative  '>
                        <Button className='duration-300 ease-in-out text-white absolute top-8 p-4 rounded-full w-4 h-4 -right-4 bg-blue-600 hover:bg-blue-700 hover:opacity-95'
                            onClick={() => setOpen(!Open)}
                        >
                            {Open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                        </Button>
                        <div className='h-full w-full px-6 py-7 flex flex-col items-center justify-center overflow-hidden '>
                            <div className={`flex items-center gap-6  w-full overflow-hidden   transition-all duration-500 ease-in-out `}>
                                <div className='p-2 bg-black rounded'>
                                    <img src={Logo} alt='Logo' className='h-6 w-6 ' />
                                </div>
                                <motion.h2
                                    animate={{
                                        display: Open ? "inline-block" : "none",
                                        opacity: Open ? 1 : 0,
                                    }}
                                    className='font-bold uppercase text-xs'> Pediatricas</motion.h2>
                            </div>


                            
                                <NavLinks />
                          
                            <div className='w-full flex gap-3  items-center'>
                                <Button variant='outline'>
                                    <LogOut/>
                                </Button>

                                <motion.h2
                                    animate={{
                                        display: Open ? "inline-block" : "none",
                                        opacity: Open ? 1 : 0,
                                    }}
                                    className='font-bold uppercase text-xs'> Sair</motion.h2>
                            </div>
                          <div>
                          </div>

                            <div>
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export { Sidbar }