import React from 'react'
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Select,
    SelectContent, SelectItem, SelectTrigger, SelectValue
} from './ui'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
    type_appointment: z.string({
        required_error: "O tipo de consulta é obrigatório."
    }),
    hybrid_modality: z.string({
        required_error: "A modalidae híbrida é obrigatório."
    })
})
function FormMakeAppointment() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })
    return (
        <React.Fragment>
            <Form {...form}>
                <form action="">
                    <FormField
                        name='type_appointment'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tipo de consulta</FormLabel>
                                <FormControl>
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger className="py-7 rounded">
                                            <SelectValue placeholder="Selecione o tipo de consulta" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='Consulta Geral'>Consulta Geral</SelectItem>
                                            <SelectItem value='Consulta Pediátrica'>Consulta Pediátrica</SelectItem>
                                            <SelectItem value='Consulta Odontologica'>Consulta Odontologica</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}

                    />

                    <FormField
                        name='hybrid_modality'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Modalidade híbrida</FormLabel>
                                <FormControl>
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger className="py-7 rounded">
                                            <SelectValue placeholder="Selecione a modalidade híbrida" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='online'>Online</SelectItem>
                                            <SelectItem value='presencial'>Presencial</SelectItem>
                                            
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}

                    />


                </form>
            </Form>
        </React.Fragment>
    )
}

export { FormMakeAppointment }