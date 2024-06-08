import { NextResponse } from "next/server";
import { user } from "../../utility/db";

export function GET(request,Response){
     const data = user;
     console.log(data,Response.params.id)

    const userdata = data.filter((item)=>item.id==Response.params.id)
    return NextResponse.json(
        userdata.length==0?{result:"No data",success:false} : {result:userdata,success:true}
        ,{status:200}
    )
}

export async function PUT(request, response) {
    let payload = await request.json();
    payload.id = response.params.id;
    
    
    console.log(payload);
    if(!payload.id || !payload.name || !payload.age || !payload.email)
        {
            return NextResponse.json({ result:"Your data is not valid", success:false},{status:400} );

        }
    

    return NextResponse.json({ result:payload, success:true},{status:200} );
}


export  function DELETE(request, response) {
    let id = response.params.id;
    console.log(id)
    if (id) {
        return response.json({ result: "User Deleted", success: true }, {status:200});
    } else {
        return response.json({ result: "User not deleted. Something is wrong", success: false }, {status:401});
    }
}

