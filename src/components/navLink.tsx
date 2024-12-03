import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { House, User,Clipboard,Calendar } from 'lucide-react'
import { useSidebarContext } from '@/context'
function NavLinks() {
    const {Open} =  useSidebarContext()
    const itemMenu =[
        {
            label: 'Dashboard',
            url: '/dashboard',
            icon: <House  size={20}/>,
        },
        {
            label: 'Consultas',
            url: '/consulta',
            icon: <Clipboard  size={20}/>,
        },
        {
            label: 'Pacientes',
            url: '/paciente',
            icon: <User size={20}/>,
        },
        {
            label: 'Agendamentos',
            url: '/agendamento',
            icon: <Calendar  size={20}/>,
        },
    ]


    const ActiveLink = ({ isActive }: { isActive: boolean }) => 
        `flex items-center  gap-6 transition-all duration-500 ease-in-out  py-3  px-3 ${
          isActive ? 'font-bold text-blue-600' : ''
        }  hover:text-blue-600 text-neutral-200 w-full font-medium`;

  return (
    <React.Fragment>
        <div  className='space-y-2  w-full h-[90%] flex flex-col justify-center' >

            {itemMenu.map((item, index) => (
                <NavLink to={item.url} className={({ isActive }) => ActiveLink({ isActive })} key={index}>
                <span className=' h-full w-5 flex items-center justify-center'>
                    {item.icon}
                </span>
                 {Open && <motion.span
                 animate={{
                    display:Open ? "inline-block" : "none" ,
                    opacity: Open ? 1 : 0 ,
                  }}
                  
                 className='text-xs   uppercase'>{ item.label}</motion.span>}
                </NavLink>
            ))}

        </div>
    </React.Fragment>
  )
}

export {NavLinks}