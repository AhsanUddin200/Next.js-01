import { NextResponse } from "next/server";

export async function GET(request,response){
    console.log(response)
    const studentsDetails = response.params.student;
    console.log(studentsDetails)
    return NextResponse.json({result:StudentDetails,success:true})
}

