import React from 'react'
import { Card, CardHeader, CardTitle } from '@/components'
import { Users, Stethoscope } from 'lucide-react'
function CardsTotal() {
  return (
    <React.Fragment>
      <div className='flex items-center gap-4'>
        <Card className='bg-neutral-800 flex-shrink-0 w-[34%] '>

          <CardHeader>
            <div className='flex gap-3  items-center'>
              <span className='bg-green-700/10 p-2 rounded'>
                <Users size={24} className='text-green-500' />
              </span>
              <div>
                <CardTitle className='text-sm text-zinc-300'>Total de Membros</CardTitle>
                <h4 className='text-xs font-bold'>9</h4>
              </div>
            </div>
          </CardHeader>


        </Card>

        <Card className='w-full'>

          <CardHeader>
            <div className='flex gap-3  items-center'>
              <span className='bg-red-700/10 p-2 rounded'>
                <Stethoscope size={24} className='text-red-500' />
              </span>
              <div>
                <CardTitle className='text-sm text-zinc-300'>Total de consultas</CardTitle>
                <h4 className='text-xs font-bold'>0</h4>
              </div>
            </div>
          </CardHeader>


        </Card>

        <Card className='w-full'>

          <CardHeader>
            <div className='flex gap-3  items-center'>
              <span className='bg-red-700/10 p-2 rounded'>
                <Stethoscope size={24} className='text-red-500' />
              </span>
              <div>
                <CardTitle className='text-sm text-zinc-300'>Total de consultas</CardTitle>
                <h4 className='text-xs font-bold'>0</h4>
              </div>
            </div>
          </CardHeader>


        </Card>


      </div>
    </React.Fragment>
  )
}

export { CardsTotal }