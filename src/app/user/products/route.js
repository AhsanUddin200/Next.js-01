import { connectionStr } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
    console.log(data)
  } catch (error) {
    data = { success: false };
  }

  return NextResponse.json({ result: data });
}


//For static data
// export async function POST(requset){
  
//   await mongoose.connect(connectionStr)  // Here Making connection
//   let product = new Product({
//     name:"Note 19",
//     company:"Redme",
//     color:"Grey",
//     price:"$809"
//   })

//   //console.log(product)

//   const result = await product.save();  //Save from here

//   return NextResponse.json({result,success:true}) //result of data
// }


export async function POST(requset){
  const payload = await requset.json();
  await mongoose.connect(connectionStr)  // Here Making connection
  let product = new Product(payload)

  //console.log(product)

  const result = await product.save();  //Save from here

  return NextResponse.json({result,success:true}) //result of data
}
