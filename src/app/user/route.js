import { NextResponse } from "next/server";
import { user } from "../utility/db";

export function GET(){
    const data = user;
    return NextResponse.json(
        data,{status:200}
    )
}

export async function POST(request,response){
    let payload = await request.json()
    console.log(payload)
    if( !payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"Your data not in database"},{status:400})
    }
    return NextResponse.json({result:"New user created", success:true},{status:201})
}