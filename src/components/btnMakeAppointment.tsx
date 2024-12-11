import React from 'react'
import { Dialog, DialogTrigger,DialogHeader, DialogContent,DialogTitle, Button, DialogDescription  } from './ui'
import { FormMakeAppointment } from './formMakeAppointment'
function BtnMakeAppointment() {
  return (
    <React.Fragment>
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='rounded-full font-bold'>
            <h3>Fazer consulta</h3>
            </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Consulta</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo
          </DialogDescription>
        </DialogHeader>
        
        
          <FormMakeAppointment/>
        
      </DialogContent>
    </Dialog>

    </React.Fragment>
  )
}

export { BtnMakeAppointment}