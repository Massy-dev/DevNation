"use client"

import React, { useOptimistic, useState } from 'react'
import { FollowRequest, User} from "@prisma/client";
import Image from "next/image";
import { acceptFollowquest, declineFollowRequest } from '@/lib/actions';

type RequestWithUser = FollowRequest & {
  sender:User;
}

const FriendRequestListe = ({requests}:{requests:RequestWithUser[]}) => {
  const [requestState, setRequestState] = useState(requests);
  
  const accept = async (requestId:number,userId:string)=>{
    removeOptimisticRequest(requestId);
    try{
      await acceptFollowquest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));

    }catch (err){
      console.log(err);
    }
  };

  const decline = async (requestId:number,userId:string)=>{
    removeOptimisticRequest(requestId);
    try{
      await declineFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));

    }catch (err){
      console.log(err);
    }
  };

  const [optimisticRequest, removeOptimisticRequest] = useOptimistic(requestState,
    (state,value: number)=>state.filter((req)=>req.id !== value)
  );
  return (
    <div className=''>
      {optimisticRequest.map((request) =>(

        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4" >
            <Image
              src={request.sender.avatar || "image/noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">{request.sender.surname 
            ? request.sender.name +" "+ request.sender.surname
            : request.sender.username}</span>
          </div>
          <div className="flex gap-3 justify-end">
            <form action={() => accept(request.id, request.sender.id)}>
              <button>
                <Image 
                  src="/images/accept.png" 
                  alt="" width={20} 
                  height={20} 
                  className='cursor-pointer' 
                />
              </button>
            </form>
              
            <form action={() => decline(request.id, request.sender.id)}>
              <button>
              <Image src="/images/reject.png" 
              alt="" 
              width={20} 
              height={20} 
              className='cursor-pointer'/>
              </button>
            </form>

             
          </div>
        </div>
      ))}
    </div>
  )
}


export default  FriendRequestListe

