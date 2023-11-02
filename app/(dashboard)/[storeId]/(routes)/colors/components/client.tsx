'use client'

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { ColorColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

interface ColorClientProps {
    colors: ColorColumn[]
}

const ColorsClient: React.FC<ColorClientProps> = ({colors}) => {

    const router = useRouter()
    const params = useParams()


    return ( 
        <>
            <div className="flex flex-center justify-between">
                <Heading
                    title={`Colors (${colors.length})`} 
                    description="Manage colors for your store" 
                />
                <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
                    <Plus className="mr-2" />
                    Add new
                </Button>
            </div> 
            <Separator />

            <DataTable 
                columns={columns} 
                data={colors} 
                searchKey="name"
            />
            <Heading title="API" description="API calls for Colors" />
            <Separator />
            <ApiList entityName="colors" entityIdName="colorId" />
        </>
    );
}
 
export default ColorsClient;