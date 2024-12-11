import {useContext} from 'react'
import { userContext } from './userContext'

function UserUseContext() {
    const context = useContext(userContext)

    if(!context){
        throw new Error('useContext deve ser usado dentro de um UserProvider')
    }

    return context;
  
}

export  {UserUseContext}