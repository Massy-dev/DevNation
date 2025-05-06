import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Link from "next/link"
import React from "react"
import UserInfoCardInteraction from "./menu/UserInfoCardInteraction";
import UpdateUser from "./menu/UpdateUser";

const UserInfoCard = async ({ user }:{user: User}) => {

  const createdAtDate = new Date(user.createdAt);

  const formattedDate = createdAtDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = auth();

  if (currentUserId) {
      const blockRes = await prisma.block.findFirst({
        where: {
          blockerId: currentUserId,
          blockedId: user.id,
        },
      });

      if (blockRes) {
          isUserBlocked = true;
      } else {
          isUserBlocked = false;
      }

      const followRes = await prisma.follower.findFirst({
        where: {
          followerId: currentUserId,
          followingId: user?.id,
        },
      });

      if(followRes){
        isFollowing = true;
      } else{
          isFollowing = false;
        }


      const followReqRes = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: user.id,
        },
      });

      if(followReqRes){
        isFollowingSent = true;
      } else{
        isFollowingSent = false;
      }
    }
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg text-sm flex flex-col gap-4"> 
      <div className="flex justify-between items-center font-medium">
          <span className="text-gray-500"> Informations</span>
          {currentUserId === user.id 
          ? (<UpdateUser user={user} />) 
          : (
              <Link href="/" className="text-blue-500 text-xs">
                See all
              </Link>
            )
          }  
        </div>

      {/* Bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-xl text-black">
            {user?.name && user.surname
                ? user.name + " " + user.surname
                : user?.username}
            </span>
            <span className="text-sm">@{user?.username}</span>
          </div>
          {user?.descr && <p>{user?.descr}</p>}
        {user?.city && (
          <div className="flex items-center gap-2">
            <img src="/map.png" alt="" width={16} height={16} />
            <span>
              Living in <b>{user?.city}</b>
            </span>
          </div>
        )}
      
      {user?.school && (
          <div className="flex items-center gap-2">
            <img src="images/school.png" alt="" width={16} height={16} />
            <span>
              Went to <b>{user?.school}</b>
            </span>
          </div>
        )}
        {user?.work && (
          <div className="flex items-center gap-2">
            <img src="images/work.png" alt="" width={16} height={16} />
            <span>
              Works at <b>{user?.work}</b>
            </span>
          </div>
        )}

     
        <div className="flex gap-2 items-center">
          <img src="/images/link.png" alt="" width={16} height={16} />

          <Link href="" className="text-blue-500 font-medium">devnation.com</Link>
        </div>  
      
      <div className="flex gap-2 items-center">
          <img src="/images/date.png" alt="" width={16} height={16} />
          <span>Rejoint en {formattedDate}</span>
        </div>

        {currentUserId && currentUserId !== user?.id && (
          <UserInfoCardInteraction
            userId = {user?.id}
            isUserBlocked={isUserBlocked}
            isFollowing={isFollowing}
            isFollowingSent={isFollowingSent}
          />
        )}
      
      </div>
    </div>
  )
}

export default UserInfoCard