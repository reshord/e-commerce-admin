import BillboardForm from "../[billboardId]/components/billboard-form";

const newBillboardPage = () => {
    return ( 
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardForm initialData={null} />
            </div>
        </div>
     );
}
 
export default newBillboardPage;