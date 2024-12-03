import React from 'react'
import Hospital from '@/assets/hospital.jpg'


import {Facebook, ArrowRight} from 'lucide-react'
import {FcGoogle} from 'react-icons/fc'

import {Button, Separator} from "@/components"
import {FormSignup} from './formSignup'

interface ContainerProps {
    setAnimationSign: (animation: boolean) => void
}
function ContainerSignup({setAnimationSign}: ContainerProps) {
  return (
    <React.Fragment>
        <div className='w-full h-full'>
        <div className='grid grid-cols-2 h-full w-full p-4 '>

          <div className='h-full  overflow-hidden borde-2 border-neutral-700 rounded relative after:absolute after:h-full after:w-full after:top-0 after:bg-[#0000005d] after:z-10'>
            <img src={Hospital} alt="hospital" className='h-full object-cover ' />

            <div className='h-full w-full absolute top-0 z-20 flex  justify-end p-5' >

              <Button  variant="outline" className='rounded-full border-[#fffcfc3d] bg-[#fffcfc3d] text-white hover:bg-[#fffcfc71] hover:text-white py-1' onClick={()=> setAnimationSign((animation )   => !animation)}>

                
                  <span className='text-sm'> Entrar</span>
                <ArrowRight size={20} className='text-blue-700' />
               

              </Button>
             
          
              
            </div>
          </div>

          <div className='px-16 flex flex-col  justify-center space-y-5 w-full'>

            <div className='space-y-4 text-center '>
              <h2 className='text-4xl font-bold'>Criar uma conta</h2>
              
            </div>
            <div className='space-y-6'>
              

              <div className='flex items-center gap-4'>
              <Button className='w-full py-6 rounded' variant="outline">
                  <FcGoogle size={28}/>
                  <h5>Google</h5>
                </Button>
                <Button className='w-full py-6 rounded' variant="outline" >
                <Facebook  fill="blue"  className='text-blue-700'/>
                  <h5>Facebook</h5>
                  </Button>
                
              </div>
              <div className='flex items-center gap-3 justify-center w-full '> 
                <Separator className='w-44'/>
                <h3 className='text-xs text-zinc-500 uppercase'>Ou cadastra-se com</h3>
                <Separator className='w-44'/>
              </div>
            </div>
            <div>
             <FormSignup/>
            </div>

            

          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export  {ContainerSignup}