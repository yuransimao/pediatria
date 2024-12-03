import React from 'react'
import { MessageCircle, Bell, Settings, User, LifeBuoy, ChevronDown } from 'lucide-react'

import {
    DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Avatar,
    AvatarFallback,
    AvatarImage,Card
} from './ui'
function Header() {
    return (
        <React.Fragment>
            <Card className='border-b rounded-none'>
                <div className='px-8 py-6 flex justify-end items-center gap-4'>
                    <button className='rounded-full p-2 bg-neutral-800 transition-all duration-300 hover:bg-neutral-900'>
                        <MessageCircle size={18} />
                    </button>
                    <button className='rounded-full p-2 bg-neutral-800 transition-all duration-300 hover:bg-neutral-900'>
                        <Bell size={18} />
                    </button>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className='flex gap-1 items-center cursor-pointer'>
                                    <Avatar className='w-7 h-7 '>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className='w-full h-full object-cover' />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <span className='text-neutral-500'><ChevronDown size={16} /></span>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <User />
                                        <span>Perfil</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings />
                                        <span>Configurações</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LifeBuoy />
                                    <span>Suporte</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </Card>
        </React.Fragment>
    )
}

export { Header }