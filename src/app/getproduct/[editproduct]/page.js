"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
   
    console.log(props.params.editproduct);
    
    getProductDetail();
  
}, []);

  const getProductDetail = async () => {
   
    let productId = props.params.editproduct
    productData = await fetch("http://localhost:3000/api/products"+productId);
    productData = await productData.json();
    
    if(productData.success){
        let result = productData.result
        setName(result.name);
        setPrice(result.price);
        setColor(result.color);
        setCompany(result.Company);
        seyCategory(result.category)
    }

  };
  const editproduct = async () => {
    console.log(name, price, color, company, category);
    let result = await fetch("http://localhost:3000/user/products", {
      method: "POST",
      body: JSON.stringify({ name, price, color, company, category }),
    });
    result = await result.json();
    if (result.success) {
      alert("Added");
    }
  };

  return (
    <div>
      <h1 className=" flex justify-center mt-4 mb-4 ">Update Product</h1>
      <div className="flex flex-col  justify-center items-center mt-4 mb-4 ">
        <input
          className="text-center rounded-sm  mt-3"
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="text-center rounded-sm  mt-3"
          type="text"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="text-center rounded-sm  mt-3"
          type="text"
          placeholder="Enter Product Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          className="text-center rounded-sm  mt-3"
          type="text"
          placeholder="Enter Product Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          className="text-center rounded-sm  mt-3"
          type="text"
          placeholder="Enter Product Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button
          onClick={editproduct}
          className="mt-5 bg-gray-600 px-5 rounded-md text-white hover:scale-90 hover:text-175"
        >
          Update Here
        </button>
        <Link className="mt-12  w-full text-right" href="/">
          Go to main Page
        </Link>
      </div>
    </div>
  );
}
