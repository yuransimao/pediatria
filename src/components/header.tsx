import React from 'react'
import { MessageCircle, Bell, Settings, User, LifeBuoy, ChevronDown } from 'lucide-react'

import {
    DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Avatar,
    AvatarFallback,
    AvatarImage,Card, Button
} from './ui'
function Header() {
    return (
        <React.Fragment>
            <Card className='border-b rounded-none'>
                <div className='px-8 py-6 flex justify-end items-center gap-4'>
                    <Button variant='outline' className='rounded-full p-3 w-9 h-9  transition-all duration-300 hover:bg-neutral-900'>
                        <MessageCircle size={18} />
                    </Button>
                    <Button variant='outline' className='rounded-full p-2 transition-all duration-300 hover:bg-neutral-900 w-9 h-9'>
                        <Bell size={18} />
                    </Button>
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