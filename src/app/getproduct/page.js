"use client";
import React, { useState, useEffect } from "react";
import DeleteProduct from "../lib/DeleteProduct";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"});
  data = await data.json();

  if (data.success) {
    return data.result;
  } else {
    return [];
  }
};

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="flex justify-center items-center mt-4">Get Products</h1>
      <div className="px-4 mt-4 flex justify-center items-center">
        <table className="border-collapse border-8">
          <thead>
            <tr>
              <td className="px-4 py-2">Name</td>
              <td className="px-4 py-2">Price</td>
              <td className="px-4 py-2">Color</td>
              <td className="px-4 py-2">Company</td>
              <td className="px-4 py-2">Category</td>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-2">{item.color}</td>
                <td className="px-4 py-2">{item.company}</td>
                <td>
                  {" "}
                  <Link href={"getproduct/" + item._id}>Edit</Link>
                  <DeleteProduct id={item._id}/>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
