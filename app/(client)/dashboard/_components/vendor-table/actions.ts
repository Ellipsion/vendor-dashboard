"use server";

import prisma from "@/prisma/client";

export const deleteVendor = async ({id}: {id: string}) => {
    try {
    const response = await prisma.vendor.delete({
        where: {
            id
        }
    });

    if (!response) {
        return false;
    }

    return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}