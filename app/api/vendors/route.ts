import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const vendors = await prisma.vendor.findMany();

        return NextResponse.json({status: 200, data: vendors});
    } catch (error) {
        return new NextResponse("Internal server error", {status: 500})
    }
}

export async function POST(req: Request) {
    try {
        const session = await auth();
        const data = await req.json();
        const {vendorName, bankName, bankAccountNumber, addressLine1} = data;

        if (!session?.user) {
            return new NextResponse("Unauthorized", {status: 401})
        }
        
        if (!(vendorName || bankName || bankAccountNumber || addressLine1)) {
            return new NextResponse("Missing Fields", {status: 400})
        }

        const course = await prisma.vendor.create({
            data
        })

        return NextResponse.json(course, {status: 201})

    } catch (error) {
        console.log("/api/courses [POST]", error);
        return new NextResponse("Internal server error", {status: 500})
    }
}

export async function DELETE(req: Request) {
    try {
        const session = await auth();
        const {id} = await req.json();

        if (!session?.user) {
            return new NextResponse("Unauthorized", {status: 401})
        }

        if (!id) {
            return new NextResponse("Missing Fields", {status: 400})
        }
        

        await prisma.vendor.delete({
            where: {
                id
            }
        });

        return NextResponse.json({status: 200, message: "Vendor deleted successfuly"});

    } catch (error) {
        return new NextResponse("Internal server error", {status: 500})
    }
}