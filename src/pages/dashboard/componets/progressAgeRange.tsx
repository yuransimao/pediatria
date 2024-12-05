import React from 'react'
import {Progress } from '@/components'

interface ProgressAgeRangeProp{
    AgeRange: string;
    Percentage: string;
    value: number
}
function ProgressAgeRange({AgeRange, Percentage,value}: ProgressAgeRangeProp){
  return (
    <React.Fragment>
        <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <h2 className='text-sm font-bold'>{AgeRange} </h2>
                    <span className='text-sm font-bold'>{Percentage}</span>
                  </div>
                  <Progress value={value} />
                </div>
    </React.Fragment>
  )
}

export { ProgressAgeRange}