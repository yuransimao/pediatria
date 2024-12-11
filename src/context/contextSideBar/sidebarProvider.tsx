import React,{ useState} from 'react'
import { SidebarContext } from './sidebarContext';


interface SidebarProviderProps {
  children: React.ReactNode; 
}
function SidebarProvider({children}: SidebarProviderProps) {
    const [Open, setOpen] = useState(true)
  return (
    <SidebarContext.Provider value={{Open, setOpen}}>
       {children}
    </SidebarContext.Provider>
  )
}

export {SidebarProvider}


