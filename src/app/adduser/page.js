"use client";

import { useState } from "react";

export default function Page() {
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");

    // const addUser=()=>{
    //     console.log(name,age,email)
    // }

    const addUser = async () => {
        let data = await fetch("http://localhost:3000/user", {
          method: "POST",
          body: JSON.stringify({ name, age, email })
        });
        data = await data.json();
        if(data.success){
            alert("new user added")
        }
        else{
            alert("No user add")
        }
        console.log(data);
      };
      
  return (
    <>
      <div>
        <h2 className="flex justify-center mt-36 font-bold">Add new user</h2>
        <div className="display-block flex  justify-center items-center flex-col gap-5 mt-5 ">
          <input type="text" placeholder="Enter Your Name" className="border border-black rounded px-12" value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="text" placeholder="Enter Your Age" className="border border-black rounded px-12" value={age} onChange={(e)=>setAge(e.target.value)} />
          <input type="text" placeholder="Enter Your Email" className="border border-black rounded px-12" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="flex justify-center mt-4 ">
          <button onClick={addUser} className=" bg-black text-white rounded px-4 py-1" >
            Add here
          </button>
        </div>
      </div>
    </>
  );
}
