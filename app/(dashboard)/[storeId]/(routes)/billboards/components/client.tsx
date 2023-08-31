'use client'

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { BillboardColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

interface BillboardClientProps {
    billboards: BillboardColumn[]
}

const BillboardClient: React.FC<BillboardClientProps> = ({billboards}) => {

    const router = useRouter()
    const params = useParams()


    return ( 
        <>
            <div className="flex flex-center justify-between">
                <Heading
                    title={`Billboards (${billboards.length})`} 
                    description="Manage billboards for your store" 
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2" />
                    Add new
                </Button>
            </div> 
            <Separator />

            <DataTable 
                columns={columns} 
                data={billboards} 
                searchKey="label"
            />
        </>
    );
}
 
export default BillboardClient;