'use client'

import { useStoreModal } from "@/hooks/use-store-modal"

import Modal from "@/components/ui/modal"
import {
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage
} from '@/components/ui/form'

import {useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'

import * as z from 'zod'
import { Input } from "../ui/input"
import { Button } from "../ui/button"


const formSchema = z.object({
    name: z.string().min(1)
})

export const StoreModal = () => {

    const isOpen = useStoreModal(state => state.isOpen)
    const onClose = useStoreModal(state => state.onClose)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)


    }

    return (
        <Modal 
            title="Create store" 
            description="Add a nex store" 
            isOpen={isOpen} 
            onClose={onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-2">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField 
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="E-commerce" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} /> 
                            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                                <Button variant={"outline"} onClick={onClose}>Cancel</Button>
                                <Button type="submit">Continue</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
            

        </Modal>
    )
}