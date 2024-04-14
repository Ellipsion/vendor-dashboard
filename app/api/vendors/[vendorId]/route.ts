
import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server"

export async function PATCH(req: Request, {params}: {params: {vendorId: string}}) {
    try {
        const session = await auth();
        const {vendorId} = params;
        const values = await req.json()

        if (!session?.user) {
            return new NextResponse("Unauthorized", {status: 401})
        }
        
        if (!values) {
            return new NextResponse("Missing values", {status: 400})
        }
        
        const vendor = await prisma.vendor.update({
            where: {
                id: vendorId,
            }, data: {
                ...values
            }
        })

        if (!vendor) {
            return new NextResponse("Vendor not found.", {status: 404})
        }

        return NextResponse.json(vendor)

    } catch (error) {
        console.log("/api/vendors/{id} [PATCH]", error)
        return new NextResponse("Internal server error", {status: 500})
    }
}