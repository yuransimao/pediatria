import React from 'react'
import {
    Button, Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage, Input,
  } from "@/components"

  import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
    
  
    user_email: z.string({
      required_error: "O email é obrigatorio",
      message: "O email é obrigatorio"
    }).email({
      message: "Verifica o email"
    }),
    user_password: z.string({
      required_error: "A palavra passe é obrigatorio",
      message: "A palavra passe é obrigatorio"
    }).min(1,{
      message: "A palavra passe é obrigatorio"
    })
  
  })
function FormLogin() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          user_email: "",
          user_password: "",
        },
      })
    
      const onSubmit = (values: z.infer<typeof formSchema>) => {
    
        console.log(values)
      }
  return (
    <React.Fragment>
         <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  
                  <FormField
                    control={form.control}
                    name="user_email"
                    render={({ field }) => (
                      <FormItem>

                        <FormControl>
                          <Input placeholder="Digita seu email" {...field} className="bg-zinc-50 py-6" type="email"/>
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="user_password"
                    render={({ field }) => (
                      <FormItem>

                        <FormControl>
                          <Input placeholder="Digita sua senha" {...field} className="bg-zinc-50 py-6" type='password' />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <p className='text-sm'>Perdeu senha ?  <span className='text-blue-700 underline'>Recuperar</span></p>

                  
                  <Button type="submit" className='w-full py-6 bg-blue-700 ease-in-out duration-300 hover:bg-blue-800 hover:opacity-90'>Entrar</Button>
                </form>
              </Form>
    </React.Fragment>
  )
}

export {FormLogin}