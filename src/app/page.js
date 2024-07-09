import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="space-x-4">
        <Link href="/addproduct">Add Product</Link>
        <Link href="/getproduct">Get Product</Link>
         <Link href="/image">Image Here</Link>
      </div>
      
    </main>
  );
}
