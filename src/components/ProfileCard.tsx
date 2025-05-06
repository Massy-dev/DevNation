
import prisma from "@/lib/client";
import React from "react"
import { auth } from "@clerk/nextjs/server";

const ProfileCard = async() => {

  const { userId } = auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          follower: true,
        },
      },
    },
  });

  if (!user) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <img src={user.cover || "/images/noCover.png"}
        alt=""
        className="rounded-md object-cover"/>

        <img src={user.avatar || "/images/noAvatar.png"}
        alt=""
        width={48}
        height={48}
        className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto top-13 ring-1 ring-white z-5"
        />

      </div>
      <div className="h-40  flex flex-col gap-3 items-center">
        <span className="font-semibold mt-6">
          {
            user.name && user.surname 
            ? user.name + " " + user.surname 
            : user.username
          }
          
          </span>
        <div className="flex items-center top-10 gap-4">
          <div className="flex">
            <img src="/images/olia.jpg" alt="" 
              width={12} 
              height={12}
              className="rounded-full object-cover w-3 h-3" 
            />

            <img src="/images/olia.jpg" alt="" 
              width={12} 
              height={12}
              className="rounded-full object-cover w-3 h-3" 
            />

            <img src="/images/olia.jpg" alt="" 
            width={12} 
            height={12}
            className="rounded-full object-cover w-3 h-3" 
          />
          </div>
          <span className="text-xs text-gray-500">{user._count.follower}</span>
        </div>
        <button className="bg-blue-500 text-white  text-xs p-2 rounded-md">Mon profil</button>
      </div>
    </div>
  )
}

export default ProfileCard