import prismadb from "@/lib/prismadb";
import BillboardClient from "./components/client";
import { useRouter } from "next/navigation";

const BillboardsPage = async ({params}: {params: {storeId: string}}) => {


    
    const billboards = await prismadb.billboard.findMany({
        where: {
            storeId: params.storeId
        }
    })



    return ( 
        <div className="flex-col ">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardClient />
            </div>
            billboards
        </div>
     );
}
 
export default BillboardsPage;