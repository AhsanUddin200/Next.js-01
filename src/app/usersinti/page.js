import Link from "next/link";
import React from "react";
import DeleteUser from "../utility/DeleteUser";

async function getUsers() {
  let data = await fetch("http://localhost:3000/user");
  data = await data.json();
  return data;
}
export default async function page() {
  const users = await getUsers();
  //console.log(users)
  return (
    <div>
      <h3>User list</h3>
      {users.map((item) => (
        <div className=" px-6 mt-2 flex flex-row justify-normal gap-2">
         
          <span className="inline-block w-[100px]">
            {" "}
            <Link className="underline " href={`usersinti/${item.id}`}>
              {item.name}
            </Link>
          </span>
          <span>
            {" "}
            <Link className="underline " href={`usersinti/${item.id}/update`}>
              Edit
            </Link>
          </span>
          <DeleteUser id={item.id} />
        </div>
      ))}
    </div>
  );
}
