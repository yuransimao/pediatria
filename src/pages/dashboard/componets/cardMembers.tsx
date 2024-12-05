import React from 'react'
import {
    Button, Card, CardContent, CardHeader, CardTitle, Separator
  } from '@/components'
  
  import { CardContentMember } from './cardContentMember'

function CardMembers() {

    const MembersData =[
        {
            name: 'Wilson Bravo',
            age: 22,
            date: 'Dec 6, 2024'
        },
        {
            name: 'Vinicius Silva',
            age: 25,
            date: 'Nov 12, 2023'
        },
        {
            name: 'Carlos Oliveira',
            age: 28,
            date: 'Oct 15, 2025'
        },
        {
            name: 'Yuran Simao',
            age: 22,
            date: 'Oct 15, 2024'
        },
        {
          name: 'Nataniel Simao',
          age: 25,
          date: 'Oct 15, 2024'
      },
      {
        name: 'Simão Panzo',
        age: 34,
        date: 'Oct 15, 2024'
    }
    ]
  return (
    <React.Fragment>
        <Card className='w-full'>
              <CardHeader >
                <div className='flex justify-between items-center'>
                  <CardTitle>Membros Recentes</CardTitle>
                  <Button variant='outline' className='rounded-full'>Ver mais</Button>
                </div>
              </CardHeader>
              <div className='px-6'><Separator /></div>
              <CardContent  className='space-y-5 py-3'>

                {MembersData.map((item, index) => <CardContentMember {...item} key={index}/>)}

              </CardContent>
            </Card>
    </React.Fragment>
  )
}

export {CardMembers}