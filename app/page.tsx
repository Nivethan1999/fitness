import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function HomePage(){
    const session = await getServerSession(authOptions)
    const userRole = session?.user?.role
    return (<h1>
            hi mom {userRole}
    </h1> );
}
