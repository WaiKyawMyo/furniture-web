"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "./icons"
import { useState } from "react"

const EmailSchema = z.object({
  email: z.email( {
    message: "Please enter a valid email address.",
  }),
})

export default function New_letterform() {
   // 1. Define your form.
  const form = useForm<z.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof EmailSchema>) {
    
    console.log(values)
    setloading(true)
    //call api
  }
  const [loading,setloading]=useState(false)


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full pr-8 lg:pr-0" autoComplete="off">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative space-y-0">
              <FormLabel className=" sr-only">Email</FormLabel>
              <FormControl>
                <Input placeholder="furniture@gmail.com" {...field} className="pr-12" />
              </FormControl>
             
              <FormMessage />
              <Button className=" absolute right-[3.5px] top-[4px] size-7" size="icon">
                {
                    loading? <Spinner/>:<Icons.paperPlain className="size-3 " aria-hidden="true"/>
                }
                
                <span className=" sr-only">Join newsLetter</span>
              </Button>
            </FormItem>
          )}
        />
        
      </form>
    </Form>
  )
}