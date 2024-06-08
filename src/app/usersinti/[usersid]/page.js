import React from "react";

async function getUser(id) {
  let data = await fetch(`http://localhost:3000/user/${id}`);
  data = await data.json();
  return data.result;
}
export default async function Page({ params }) {
  //console.log(params);
  const user = await getUser(params.usersid);
 console.log(user)
  return (
    <div>
      <h4>Users Details</h4>
      <h6>id: {user.id}</h6>
      <h6>Name: {user.name}</h6>
      <h6>age: {user.age}</h6>
      <h6>email: {user.email}</h6>
      
    </div>
  );
}
