import React from 'react'
import { Button, Card,  CardContent,  CardHeader, CardTitle, Separator } from '@/components'
import { Users,Stethoscope } from 'lucide-react'
function Dashboard() {
  return (
    <React.Fragment>
      <div className='space-y-4'>
      <div className='flex justify-between'>
            <h2 className='font-bold '>Olá Yuran</h2>

            <div className='flex items-center gap-4'> 
              <Button className='bg-blue-800 text-white rounded-full hover:bg-blue-900 font-bold'>
                <h3>Novo Membro</h3>
              </Button>
              <Button variant='outline' className='rounded-full'>
                <h3>Fazer consulta</h3>
              </Button>
            </div>
          </div>

        <div className='grid grid-cols-2 gap-8'>

          <div className=' '>
         <div  className='grid grid-cols-2 gap-4'>
          <Card className='bg-neutral-800 '>

            <CardHeader>
              <div className='flex gap-3  items-center'>
                <span className='bg-green-700/10 p-2 rounded'> 
                <Users size={24} className='text-green-500'/>
                </span>
                <div>
                  <CardTitle className='text-sm text-zinc-300'>Total de Membros</CardTitle>
                  <h4 className='text-xs font-bold'>9</h4>
                </div>
              </div>
            </CardHeader>
           

          </Card>

          <Card>

            <CardHeader>
              <div className='flex gap-3  items-center'>
                <span className='bg-red-700/10 p-2 rounded'> 
                <Stethoscope size={24} className='text-red-500'/>
                </span>
                <div>
                  <CardTitle className='text-sm text-zinc-300'>Total de consultas</CardTitle>
                  <h4 className='text-xs font-bold'>0</h4>
                </div>
              </div>
            </CardHeader>
           

          </Card>
          

         </div>
          </div>
          <div className=''>
            <Card >
              <CardHeader >
                <div className='flex justify-between items-center'>
                  <CardTitle>Membros</CardTitle>
                  <Button variant='outline' className='rounded-full'>Ver mais</Button>
                </div>
              </CardHeader>
              <div className='px-6'><Separator/></div>
              <CardContent>

              </CardContent>
            </Card>
          </div>
            
        </div>
      </div>
    </React.Fragment>
  )
}

export {Dashboard}