import React from 'react'
import {BtnAddMembers,  BtnMakeAppointment} from '@/components'
import { CardsTotal, CardsAgeRange,ChartBar, CardMembers } from './componets'



function Dashboard() {
  return (
    <React.Fragment>
      <div className='space-y-4'>
        <div className='flex justify-between'>
          <h2 className='font-bold '>Olá Yuran</h2>

          <div className='flex items-center gap-4'>
            <BtnAddMembers/>
            <BtnMakeAppointment/>
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