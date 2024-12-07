import React from 'react'
import { Calendar as CalendarIcon } from "lucide-react"
import { ptBR } from 'date-fns/locale'
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger, } from "./ui"
import { SelectSingleEventHandler } from "react-day-picker"
import { cn } from "@/lib/utils"

interface DatapikerProp {
    value: Date;
    onChange?: SelectSingleEventHandler
}

function Datapiker({ value, onChange }: DatapikerProp) {
    return (
        <React.Fragment>
            <Popover >
                <PopoverTrigger className="w-full py-2 ">
                    <Button type='button' variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-normal py-7 rounded",
                            !value && "text-muted-foreground "
                        )}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {
                            value ? new Date(value).toLocaleDateString('pt-Ao', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }) : <span>Seleciona data de nascimento</span>
                        }
                    </Button>
                </PopoverTrigger>
                <PopoverContent >
                    <Calendar
                        mode="single"
                        selected={value}
                        onSelect={onChange}
                        disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                        initialFocus
                        locale={ptBR}
                    />
                </PopoverContent>
            </Popover>

        </React.Fragment>
    )
}

export { Datapiker }