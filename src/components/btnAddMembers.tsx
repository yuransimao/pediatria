import React from 'react'
import { Button,Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger, } from './ui'

    import { FormAddMembers } from './formAddMembers'

function BtnAddMembers() {
  return (
    <React.Fragment>
         <Sheet>
      <SheetTrigger asChild>
      <Button className='bg-blue-800 text-white rounded-full hover:bg-blue-900 font-bold'>
        <h3>Novo Membro</h3>
    </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Adicionar membro </SheetTitle>
          <SheetDescription>
          Cadastro de um novo membro para acompanhamento pediátrico
          </SheetDescription>
        </SheetHeader>
        
        <SheetFooter className='h-full '>
          <FormAddMembers />
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </React.Fragment>
  )
}

export {BtnAddMembers}