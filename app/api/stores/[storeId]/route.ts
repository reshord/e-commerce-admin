import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request, 
    {params}: {params: {storeId: string}}
) {
    try {
        const {userId} = auth()

        const body = await req.json()

        const {name} = body

        if(!userId) {
            return new NextResponse('Unauthenticated', {status: 401})
        }

        if(!name) {
            return new NextResponse('Name is required', {status: 400})
        }

        if(!params.storeId) {
            return new NextResponse('Store id is required', {status: 400})
        }

        const newStore = await prismadb.store.updateMany({
            where: {
                id: params.storeId
            },
            data: {
                name
            }
        })

        return NextResponse.json(newStore)
    }
    catch(e) {
        console.log('[STORES_PATCH]', e)
        return new NextResponse('Internal error', {status: 500})
    }
}
