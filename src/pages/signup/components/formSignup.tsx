import React from 'react'
import {
  Button, Form,
  FormControl,
  FormField,
  FormItem, Checkbox,
  FormMessage, Input, Datapiker, Toaster
} from "@/components"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {useToast } from "@/hooks"



const isUnderage = (date: Date) => {
  const yeraAct = new Date().getFullYear();
  const YearNc = date.getFullYear()
  const Underage = yeraAct - YearNc;

  return Underage >= 18;



}
const formSchema = z.object({
  name: z.string({
    required_error: "O nome é obrigatorio",
    message: "O nome é obrigatorio"
  }).min(2, { message: "O minimo de caracteres 2.", }).max(255, {
    message: "O maximo de caracteres de 255.",
  }),
  bi: z.string({
    required_error: "O nome é obrigatorio",
    message: "O B.I é obrigatorio"
  }).regex(/^00\d{7}[A-Z]{2}\d{3}$/, {
    message: "O verifica seu B.I",
  }),

  email: z.string({
    required_error: "O email é obrigatorio",
    message: "O email é obrigatorio"
  }).email({
    message: "Verifica o seu email"
  }),
  telefone: z.string({
    required_error: "O numero de telefone é obrigatorio",
    message: "O numero de telefone é obrigatorio"
  }).regex(/^9\d{8}$/, { message: "O número deve conter exatamente 9 dígitos" }),

  password: z.string({
    required_error: "A palavra passe é obrigatorio",
    message: "A palavra passe é obrigatorio"
  }).min(6, {
    message: "A palavra passe deve conter pelo menos 6 caracteres"
  }).max(16, {
    message: "A palavra passe deve conter no maximo 16 caracteres"
  }),
  user_terms: z.literal(true, {
    errorMap: () => ({ message: "Você deve aceitar os termos para continuar" }),
  }),
  dataNasc: z.date({
    required_error: "A data de nascimento é obrigatória."
  }).refine(isUnderage, {
    message: "O membro deve ser maior de idade."
  })

})
function FormSignup() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

  })

  const { toast } = useToast()

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
  const usuario = {
      ...values,
      admin: false,
      dataNasc: values.dataNasc.toISOString().split("T")[0],
     
    };

  delete usuario.user_terms;



  console.log( usuario);
  
    try {
      const response = await fetch("http://localhost:8080/users/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
  
      if (!response.ok) {
       
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `There was a problem with your request ${response.status}.`,
          
        })
      }
      
  
      const data = await response.json();
      console.log("Resposta do servidor:", data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        
      })
      console.error("Erro ao fazer a requisição:", error);
    }
  }

   


    
   
    

    
  
  return (
    <React.Fragment>
      <Toaster/>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className='grid grid-cols-2 gap-x-4 gap-y-7'>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nome completo" {...field} className="bg-neutral-700 text-white py-6 rounded placeholder:text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bi"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Numero BI" {...field} className="bg-neutral-700 text-white py-6 rounded placeholder:text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} className="bg-neutral-700 text-white py-6 rounded placeholder:text-white" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Numero  de telefone" {...field} className="bg-neutral-700 text-white py-6 rounded placeholder:text-white" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

           

      

          </div>
          <FormField
              control={form.control}
              name="dataNasc"
              render={({ field }) => (
                <FormItem>

                  <Datapiker
                    value={field.value}
                    onChange={field.onChange}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>

                <FormControl>
                  <Input placeholder="Senha" {...field} className="bg-neutral-700 text-white py-6 rounded placeholder:text-white" type='password' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="user_terms"
            render={({ field }) => (
              <FormItem className=''>

                <div className='flex items-center gap-3'>

                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <p className='text-sm'>Aceito todos  <span className='text-blue-700 underline'>Termos e condições</span></p>

                </div>

                <FormMessage />


              </FormItem>
            )}
          />


          <Button type="submit" className='w-full py-6 bg-blue-700 ease-in-out duration-300 hover:bg-blue-800 hover:opacity-90 text-white rounded'>Criar conta</Button>
        </form>
      </Form>
    </React.Fragment>
  )
}

export { FormSignup }