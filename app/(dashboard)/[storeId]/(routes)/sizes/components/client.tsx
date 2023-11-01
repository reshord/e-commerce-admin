'use client'

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { SizeColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

interface SizesClientProps {
    sizes: SizeColumn[]
}

const SizesClient: React.FC<SizesClientProps> = ({sizes}) => {

    const router = useRouter()
    const params = useParams()


    return ( 
        <>
            <div className="flex flex-center justify-between">
                <Heading
                    title={`Sizes (${sizes.length})`} 
                    description="Manage sizes for your store" 
                />
                <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
                    <Plus className="mr-2" />
                    Add new
                </Button>
            </div> 
            <Separator />

            <DataTable 
                columns={columns} 
                data={sizes} 
                searchKey="name"
            />
            <Heading title="API" description="API calls for Sisez" />
            <Separator />
            <ApiList entityName="sizes" entityIdName="sizeId" />
        </>
    );
}
 
export default SizesClient;