import prismadb from "@/lib/prismadb";
import BillboardClient from "./components/client";
import { useRouter } from "next/navigation";
import { ColorColumn } from "./components/columns";
import {format} from 'date-fns'
import SizesClient from "./components/client";

const ColorsPage = async ({params}: {params: {storeId: string}}) => {

    const colors = await prismadb.size.findMany({
        where: {
            storeId: params.storeId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    const formattedColors: ColorColumn[] = colors.map(item => ({
        id: item.id,
        name: item.name,
        value: item.value,
        createdAt: format(item.createdAt, 'MMMM do, yyyy')
    }))

    return ( 
        <div className="flex-col ">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SizesClient colors={formattedColors} />
            </div>
            
        </div>
     );
}
 
export default ColorsPage;