import React from "react"
import FriendsRequest from './../FriendsRequest';
import Birthdays from "../Birthdays";
import Ad from "../Ad";
import UserInfoCard from "../UserInfoCard";
import UserMediCard from "../UserMediCard";
import { User } from "@prisma/client";


const RightMenu = ({user}:{user?:User}) => {
  return (
    <div className=" flex flex-col gap-6"> 
    {user ? (
      <>
      <UserInfoCard user={user} />
      <UserMediCard user={user}/>
      </>
    ): null}
      <FriendsRequest/>
      <Birthdays/>
      <Ad size="md"/>
    </div>
  )
}

export default RightMenu