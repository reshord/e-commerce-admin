import prismadb from "@/lib/prismadb";
import CategoryForm from "../[categoryId]/components/category-form";

const newCategoriesPage = async ({params}: {params: {storeId: string}}) => {

    const billboards = await prismadb.billboard.findMany({
        where: {
            storeId: params.storeId
        }
    })

    console.log('hello3')


    return ( 
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm billboards={billboards} initialData={null} />
            </div>
        </div>
     );
}
 
export default newCategoriesPage