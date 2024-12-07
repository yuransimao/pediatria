import React from 'react'
import * as Pages from '@/pages'
import * as Components from '@/components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Pages.ScrenSign />} />
        <Route element={<Components.Layout/>}>
        <Route path='/agendamento' element={<Pages.Agendamento />} />
        
        <Route path='/consulta' element={<Pages.Consulta />} />
        <Route path='/membro' element={<Pages.Members />} />
        <Route path='/dashboard' element={<Pages.Dashboard />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
