import React from 'react'
import {
    Button, Form,
    FormControl,
    FormField,
    FormItem,Checkbox,
    FormMessage, Input,
  } from "@/components"

  import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
    username: z.string({
      required_error: "O nome é obrigatorio",
      message: "O nome é obrigatorio"
    }).min(2, {message: "O minimo de caracteres 2.",}).max(255, {
      message: "O maximo de caracteres de 255.",
    }),
    user_bi: z.string({
      required_error: "O nome é obrigatorio",
      message: "O B.I é obrigatorio"
    }).regex(/^00\d{7}[A-Z]{2}\d{3}$/, {
      message: "O verifica seu B.I",
    }),
  
    user_email: z.string({
      required_error: "O email é obrigatorio",
      message: "O email é obrigatorio"
    }).email({
      message: "Verifica o seu email"
    }),
    user_phone: z.string({
      required_error: "O numero de telefone é obrigatorio",
      message: "O numero de telefone é obrigatorio"
    }).regex(/^9\d{8}$/, { message: "O número deve conter exatamente 9 dígitos" }),

    user_password: z.string({
      required_error: "A palavra passe é obrigatorio",
      message: "A palavra passe é obrigatorio"
    }).min(6, {
   message: "A palavra passe deve conter pelo menos 6 caracteres"
    }).max(16, {
      message: "A palavra passe deve conter no maximo 16 caracteres"
    }),
    user_terms: z.literal(true,{
      errorMap: () => ({ message: "Você deve aceitar os termos para continuar" }),
    })
  
  })
function FormSignup() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          user_email:"",
          user_password:"",
          user_bi:"",
          user_phone:""
        },
      })
    
      const onSubmit = (values: z.infer<typeof formSchema>) => {
    
        console.log(values)
      }
  return (
    <React.Fragment>
         <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className='grid grid-cols-2 gap-4'>
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Nome completo" {...field} className="bg-zinc-50 py-6" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                                        <FormField
                      control={form.control}
                      name="user_bi"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Numero BI" {...field} className="bg-zinc-50 py-6" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="user_email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email" {...field} className="bg-zinc-50 py-6" type="email"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="user_phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Numero  de telefone" {...field} className="bg-zinc-50 py-6" type="tel"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                   <FormField
                    control={form.control}
                    name="user_password"
                    render={({ field }) => (
                      <FormItem>

                        <FormControl>
                          <Input placeholder="Senha" {...field} className="bg-zinc-50 py-6" type='password' />
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
                  
                 
                  <Button type="submit" className='w-full py-6 bg-blue-700 ease-in-out duration-300 hover:bg-blue-800 hover:opacity-90'>Criar conta</Button>
                </form>
              </Form>
    </React.Fragment>
  )
}

export {FormSignup}