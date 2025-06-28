import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
const client = new PrismaClient();

export async function POST(req: NextResponse) {

    const body = await req.json();
    await client.user.create({
        data:{
            username: body.username,
            password: body.password
        }
    })

  return Response.json({
    msg: "You are logged in"
  });
}



