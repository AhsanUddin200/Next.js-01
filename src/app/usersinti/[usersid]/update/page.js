"use client";

import { useEffect, useState } from "react";

export default function Page({ params }) {
  let id = params.usersid;
  console.log(id);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let data = await fetch(`http://localhost:3000/user/` + id);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };

  const updateUser = async () => {
    let result = await fetch(`http://localhost:3000/user/` + id, {
      method: "PUT",
     
      body: JSON.stringify({ name, age, email })
    });

    result = await result.json();
    console.log(result);

    if (result.success) {
      alert("User Information Updated");
    } else {
      alert("Update Failed");
    }
  };

  return (
    <div>
      <h2 className="flex justify-center mt-36 font-bold">Update Here Users</h2>
      <div className="display-block flex justify-center items-center flex-col gap-5 mt-5">
        <input 
          type="text" 
          placeholder="Enter Your Name" 
          className="border border-black rounded px-12" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Enter Your Age" 
          className="border border-black rounded px-12" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Enter Your Email" 
          className="border border-black rounded px-12" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={updateUser} className="bg-black text-white rounded px-4 py-1">
          Update Here
        </button>
      </div>
    </div>
  );
}
