import prisma from "@/lib/client";
import { User } from "@prisma/client"
import Link from "next/link"
import React from "react"


const UserMediCard = async ({ user }:{user?:User}) => {

  const postsWithMedia= await prisma.post.findMany({
    where:{
      userId: user?.id,
      img:{
        not:null,
      },

    },
    take:8,
    orderBy:{
      createdAt:"desc",
    },
  });




  return (
    <div className="p-4 bg-white rounded-lg shadow-lg text-sm flex flex-col gap-4"> 
        {/* Top */}
      
        <div className="flex justify-between items-center font-medium">
          <span className="text-gray-500">Medias</span>
            <Link href="/" className="text-blue-500">Voire tout</Link>  
        </div>

      {/* Bottom */}
      <div className="flex justify-between gap-4 flex-wrap">
      {
        postsWithMedia.length ? postsWithMedia.map((post) => (
          <div className="relative w-1/5 h-24" key={post.id}>
            <img className="object-cover rounded-md" 
              src={post.img!}
              
              alt="" />
            </div>
        ))
        :"No image found"
      }
        
      </div>

      
    </div>

  )
}

export default UserMediCard