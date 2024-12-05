import React from 'react'
import {Button} from '@/components'
import { CardsTotal, CardsAgeRange,ChartBar, CardMembers } from './componets'



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

        <div className='flex gap-6'>

          <div className='space-y-8 flex-shrink-0 w-2/3'>
            <CardsTotal />

            <div className='grid grid-cols-2 gap-8'>

              <ChartBar/>
              <CardsAgeRange />
            </div>
          </div>
          <CardMembers/>

        </div>
      </div>
    </React.Fragment>
  )
}

export { Dashboard }