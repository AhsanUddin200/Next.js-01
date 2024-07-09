"use client";
import React, { useState } from "react";

export default function page() {
  const [file, setfile] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(file)

    const data = new FormData();
    data.set('file',file);
    let result = await fetch ("api/upload",{
        method:"POST",
        body:data
          
    })
    result = await result.json();
    console.log(result)
    if(result.success){
        alert("File uploaded")
    }

  };
  return (
    <div>
      <h1>Upload Image</h1>
      <form  onSubmit={onSubmit}>
        <input
         
          type="file"
          name="file"
          onChange={(e) => setfile(e.target.files?.[0])}
        />

        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}
