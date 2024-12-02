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
            icon: <House size={24}/>,
        },
        {
            label: 'Consultas',
            url: '/consulta',
            icon: <Clipboard size={24}/>,
        },
        {
            label: 'Pacientes',
            url: '/paciente',
            icon: <User size={24}/>,
        },
        {
            label: 'Agendamentos',
            url: '/agendamento',
            icon: <Calendar size={24}/>,
        },
    ]


    const ActiveLink = ({ isActive }: { isActive: boolean }) => 
        `flex items-center  gap-8 overflow-hidden transition-all duration-500 ease-in-out  py-2 rounded-md px-2 ${
          isActive ? 'bg-neutral-200/50' : ''
        }  ${Open  === false && 'justify-center'}`;

  return (
    <React.Fragment>
        <div  className='space-y-6 w-full'>

            {itemMenu.map((item, index) => (
                <NavLink to={item.url} className={({ isActive }) => ActiveLink({ isActive })} key={index}>
                <span >
                    {item.icon}
                </span>
                 {Open && <motion.span
                 animate={{
                    display:Open ? "inline-block" : "none" ,
                    opacity: Open ? 1 : 0 ,
                  }}
                  
                 className='text-sm font-bold'>{ item.label}</motion.span>}
                </NavLink>
            ))}

        </div>
    </React.Fragment>
  )
}

export {NavLinks}