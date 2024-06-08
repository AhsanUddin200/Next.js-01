"use client"
import React from 'react'

export default function DeleteUser(props) {
    const userId = props.id;
    console.log(userId)

    const deletedetail = async()=>{
       let result = await fetch("http://localhost:3000/user/"+userId,
        {
            methode:"DELETE",
        }
       );
       result = await result.json();
       if (result.success){
        alert("User Deleted")

       }
    }
  return (
 

    <div>
      <button onClick={deletedetail}>Delete</button>
    </div>
  )
}
