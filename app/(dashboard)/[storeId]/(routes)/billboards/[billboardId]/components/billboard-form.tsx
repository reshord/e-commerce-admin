'use client'

import AlertModal from "@/components/modals/alert-modal";
import ApiAlert from "@/components/ui/api-alert";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useOrigin } from "@/hooks/use-origin";
import { zodResolver } from "@hookform/resolvers/zod";
import { Billboard, Store } from "@prisma/client";
import axios from "axios";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
    label: z.string().min(1),
    imageUrl: z.string().min(1)
})

type BillboardFormValues = z.infer<typeof formSchema>


interface BillboardFormProps {
    initialData: Billboard | null
}

const BillboardForm: React.FC<BillboardFormProps> = ({initialData}) => {

    const [open, setOpen] = useState(false)
    const [loading, setIsLoading] = useState(false)

    const title = initialData ? 'Edit billboard' : 'Create billboard'
    const description = initialData ? 'Edit description' : 'Create description'
    const toastMessage = initialData ? 'Billboard updated.' : 'Billboard created.'
    const action = initialData ? 'Save changes' : 'Create'


    const router = useRouter()
    const params = useParams()

    const origin = useOrigin()

    const form = useForm<BillboardFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            label: '',
            imageUrl: ''
        }
    })

    const onSubmit = async (data: BillboardFormValues) => {
        try {
            setIsLoading(true)

            // await axios.patch(`/api/stores/${params.storeId}`, {
            //     name: data.name
            // })

            router.refresh()
            toast.success('Store updated successfull')
        }
        catch(e) {
            console.log(e)
            toast.error('Something went wrong')
        }
        finally {
            setIsLoading(false)
        }
    }

    const onDelete = async () => {
        try {
            setIsLoading(true)

            await axios.delete(`/api/stores/${params.storeId}`)

            router.refresh()
            router.push('/')

            toast.success('Store deleted')
        }
        catch(e) {
            toast.error('Make sure you removed all products and categories first')
        }
        finally {
            setIsLoading(false)
        }
    }

    return ( 
       <>
            <AlertModal 
                isOpen={open} 
                onClose={() => setOpen(false)} 
                onConfirm={onDelete} 
                loading={loading}
            />
            <div className="flex items-center justify-between">
                <Heading 
                    title="Billboard" 
                    description="Manage store preferences" 
                />
                <Button 
                    disabled={loading}
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                        setOpen(true)
                    }}
                >
                    <Trash className="h-4 w-4" />
                </Button>
            </div>
            <Separator />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <div className="grid grid-cols-3 gap-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input 
                                            disabled={loading} 
                                            placeholder="Store name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button disabled={loading} className="ml-auto" type="submit">
                        Save changes
                    </Button>
                </form>
            </Form>
            <Separator />
            <ApiAlert 
                title="NEXT_PUBLIC_API_URL" 
                description={`${origin}/api/${params.storeId}`} 
                variant="public"
            />
       </>
     );
}
 
export default BillboardForm;