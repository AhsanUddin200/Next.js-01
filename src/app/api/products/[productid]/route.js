import { connectionStr } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req,content){

 const productId = content.params.productid;
 const filter = {_id:productId}
 console.log(filter);
 const payload = await req.json();
 console.log(payload);

 //making connection
 await mongoose.connect(connectionStr);
 const result = await Product.findOneAndUpdate(filter,payload)

 
 //const result= [];

 return NextResponse.json({result,success:true})
}

export async function GET(req,content){

    const productId = content.params.productid;
    const record = {_id:productId}
    console.log(record);
    
   
    //making connection
    await mongoose.connect(connectionStr);
    const result = await Product.findById(record)
   
    
    //const result= [];
   
    return NextResponse.json({result,success:true})
   }

   export async function DELETE(request,content){
    const productId = content.params.productid;
    const record = {_id:productId};

    await mongoose.connect(connectionStr);
    const result = await Product.deleteOne(record);

    return NextResponse.json({result,success:true})

   }
