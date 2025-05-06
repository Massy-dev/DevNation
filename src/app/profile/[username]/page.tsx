import React from "react";
import PostFeed from "../../../components/PostFeed";
import LeftMenu from "@/components/menu/LeftMenu";
import RightMenu from "@/components/menu/RightMenu";
import prisma from "@/lib/client";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: {
      username
    },
    include: {
      _count: {
        select: {
          posts: true,
          follower: true,
          following: true,
        },
      },
    },
  });

  if (!user) return notFound();

  const { userId: currentUserId } = auth();

  let isBlocked;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full rounded-md h-25 bg-white shadow-md">
        <div className="w-full h-50 relative">
          <img
            src={user.cover || "/images/noCover.png"}
            alt=""
            className="baniere rounded-t-md object-cover"
          />

          <img
            src={user.avatar || "/images/noAvatar.png"}
            alt=""
            width={128}
            height={128}
            className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-6 ring-4 ring-white object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center mt-[30px] md:mt-[5px]">
          <div className="md:w-2/5   p-8 flex items-center justify-center gap-12 ">
            <div className="flex flex-col items-center">
              <span className="font-bold">{user._count.posts}</span>
              <span className="text-slate-500 text-sm	">Post</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">{user._count.follower}</span>
              <span className="text-slate-500 text-sm ">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">{user._count.following}</span>
              <span className="text-slate-500 text-sm ">Wollowing</span>
            </div>
          </div>
          <div className="order-first md:order-none md:w-1/5  p-8  flex flex-col justify-center">
            <h1 className="text-center items-center text-xl font-bold">
              {" "}
              {user.name && user.surname
                ? user.name + " " + user.surname
                : user.username}
            </h1>
            <span className="text-slate-500 text-sm text-center items-center ">
              massy1833.dev@gmail.com
            </span>
          </div>
          <div className="p-8 md:w-2/5 flex justify-center">
            <span className="text-center">right</span>
          </div>
        </div>
      </div>

      <div className="flex gap-8 pt-6 flex-col md:flex-row">
        <div className=" lg:block md:w-[30%]">
          <RightMenu user={user} />
          
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <PostFeed />
          </div>
        </div>
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type="profile" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
