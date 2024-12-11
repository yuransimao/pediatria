import React,{createContext} from 'react'


interface SidebarContextType{
    Open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined)