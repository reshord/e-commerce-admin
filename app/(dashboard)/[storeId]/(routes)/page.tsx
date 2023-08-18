import prismadb from "@/lib/prismadb";
import React from "react";

interface DashBoardPageProps {
    params: {
        storeId: string
    }
}

const DashBoardPage: React.FC<DashBoardPageProps> = async ({
    params
}) => {

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    })

    return ( 
        <div>
            dashboard {store?.name}
        </div>
     );
}
 
export default DashBoardPage;