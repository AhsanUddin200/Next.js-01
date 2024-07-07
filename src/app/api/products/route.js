// export async function GET(request) {
//     return new Response('Hello, The new journey of NEXT!');
// }

import { connectionStr } from "@/app/lib/db";
import mongoose,{isValidObjectId} from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "../../lib/model/product";

export async function GET() {
    let data = [];
    let success = true;

  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
} catch (error) {
    console.error("Error fetching products:", error);
    data = { result: "error fetching products" };
    success = false;
}


return NextResponse.json({ result: data, success: success });

}

export async function POST(request){
    const payload = await request.json();
    await mongoose.connect(connectionStr)
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({result,success:true})



}