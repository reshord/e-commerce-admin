'use client'

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const BillboardClient = () => {

    const router = useRouter()
    const params = useParams()


    return ( 
        <>
            <div className="flex flex-center justify-between">
                <Heading
                    title={`Billboards (0)`} 
                    description="Manage billboards for your store" 
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2" />
                    Add new
                </Button>
            </div> 
        </>
    );
}
 
export default BillboardClient;