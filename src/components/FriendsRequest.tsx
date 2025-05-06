import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link"
import React from "react"
import FriendRequestListe from "./menu/FriendRequestListe";

const FriendsRequest = async() => {

  const {userId} = auth();
  if (!userId) return null;

  const request = await prisma.followRequest.findMany({

    where:{
      receiverId:userId
    },
    include:{
      sender:true
    }
  });
  console.log(userId);

  if(request.length === 0) return null

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg text-sm flex flex-col gap-4"> 

    {/* Top */}
     
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500"> Demande amis</span>
          <Link href="/" className="text-blue-500">Voire tout</Link>            
      </div>

      {/** User */}
      <FriendRequestListe requests={request} />
    </div>
  )
}

export default FriendsRequest