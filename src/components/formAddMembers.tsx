import React from 'react';
import {
    Button,
    Form, FormControl, FormField, FormItem, FormLabel,
    FormMessage, Input, Select,
    SelectContent, SelectItem, SelectTrigger, SelectValue,
} from './ui';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Datapiker } from './datapiker';


const isUnderage= (date : Date) =>{
    const yeraAct = new Date().getFullYear();
    const YearNc = date.getFullYear()
    const Underage = yeraAct -  YearNc;

    return Underage <= 18;



}
const formSchema = z.object({
    member_name: z.string({
        required_error: "O nome é obrigatório."
    }).min(2, {
        message: "O nome deve ter mais de 2 caracteres.",
    }),
    member_gener: z.string({
        required_error: "O gênero é obrigatório."
    }),
    date_nasc: z.date({
        required_error: "A data de nascimento é obrigatória."
    }).refine(isUnderage, {
        message: "O membro deve ser menor de idade."
    })
});

function FormAddMembers() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            member_name: "",
          
            
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    };

    

    return (
        <React.Fragment>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="py-10 w-full space-y-6 h-full flex flex-col justify-center"
                >
                    {/* Nome completo */}
                    <FormField
                        control={form.control}
                        name="member_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome completo</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Digite o nome do membro"
                                        {...field}
                                        className="py-7 rounded"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Gênero */}
                    <FormField
                        control={form.control}
                        name="member_gener"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Sexo</FormLabel>
                                <FormControl>
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange} 
                                    >
                                        <SelectTrigger className="py-7 rounded">
                                            <SelectValue
                                                placeholder="Selecione o sexo"
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="M">
                                                Masculino
                                            </SelectItem>
                                            <SelectItem value="F">
                                                Feminino
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Data de nascimento */}
                    <FormField
                        control={form.control}
                        name="date_nasc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Data de nascimento</FormLabel>
                                <Datapiker
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    
                    <Button
                        type="submit"
                        className="w-full text-white py-7 rounded bg-blue-700 hover:bg-blue-800 hover:opacity-90"
                    >
                        <h3 className="text-sm">Adicionar</h3>
                    </Button>
                </form>
            </Form>
        </React.Fragment>
    );
}

export { FormAddMembers };