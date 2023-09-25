'use client'

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import {CategoryColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

interface CategoriesClientProps {
    categories: CategoryColumn[]
}

const CategoriesClient: React.FC<CategoriesClientProps> = ({categories}) => {

    const router = useRouter()
    const params = useParams()

    return ( 
        <>
            <div className="flex flex-center justify-between">
                <Heading
                    title={`Categories (${categories.length})`} 
                    description="Manage categories for your store" 
                />
                <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                    <Plus className="mr-2" />
                    Add new
                </Button>
            </div> 
            <Separator />

            <DataTable 
                columns={columns} 
                data={categories} 
                searchKey="label"
            />
            <Heading title="API" description="API calls for Categories" />
            <Separator />
            <ApiList entityName="categories" entityIdName="categories" />
        </>
    );
}
 
export default CategoriesClient;