
import React from "react"
import ProfileCard from "../ProfileCard"
import Link from "next/link"
import Ad from "../Ad"

const LeftMenu = ({type}: {type:"home" | "profile"}) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard/>}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex  flex-col gap-2">
        <Link href="" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <img src="/images/posts.png" alt="" width={20} height={20}/>
          <span>Mes posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>

        <Link href="" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <img src="/images/activity.png" alt="" width={20} height={20}/>
          <span>Activités</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>

        <Link href="" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <img src="/images/videos.png" alt="" width={20} height={20}/>
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>

        <Link href="" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <img src="/images/news.png" alt="" width={20} height={20}/>
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>

        <Link href="" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <img src="/images/lists.png" alt="" width={20} height={20}/>
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        
        <Link href="" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <img src="/images/courses.png" alt="" width={20} height={20}/>
          <span>Cours</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        
        <Link href="" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <img src="/images/settings.png" alt="" width={20} height={20}/>
          <span>Parametre</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>

      </div> 
     <Ad size="sm"/>
    </div>
  )
}

export default LeftMenu