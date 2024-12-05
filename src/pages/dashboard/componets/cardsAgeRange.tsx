import React from 'react'
import {Card,  CardContent,  CardHeader, CardTitle, Separator} from '@/components'
import { ProgressAgeRange } from './progressAgeRange'
function CardsAgeRange() {


  const AgeRangeData=[
    {
      AgeRange: '0-5',
      Percentage: '33%',
      value: 33
    },
    {
      AgeRange: '6-10',
      Percentage: '45%',
      value: 45
    },
    {
      AgeRange: '11-15',
      Percentage: '25%',
      value: 25
    },{
      AgeRange: '16-18',
      Percentage: '60%',
      value: 60
    }
  ]
  return (
    <React.Fragment>
      <Card className='bg-neutral-900'>
              <CardHeader >
                
                  <CardTitle>Faixas Etárias</CardTitle>
    
              </CardHeader>
              <div className='px-6'><Separator/></div>
              <CardContent className='space-y-7 py-6'>
                {AgeRangeData.map((item,index) => <ProgressAgeRange {...item} key={index}/>)}
              </CardContent>
            </Card>
    </React.Fragment>
  )
}

export { CardsAgeRange}