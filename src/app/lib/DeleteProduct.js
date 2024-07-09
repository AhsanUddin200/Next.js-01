"usse client"
import { useRouter } from 'next/router'
import React from 'react'

export default function DeleteProduct(props) {
    console.log(props._id)
     const router = useRouter()
    const deleteData = async ()=> {
        let api = await fetch("http://localhost:3000/api/products/"+props.id,
            {
                method:"delete"
            }
        )
          api = await api.json()
          if(api.success){
            alert("Product Delete")
            router.push("/products")
          }
    }

    return (
    
    <div>
      <button onClick={deleteData}>Delete Product</button>
    </div>
  )
}
