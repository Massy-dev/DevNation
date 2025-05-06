import React from "react"

const Ad = ({size}:{size:"sm" | "md" |  "lg"}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg text-sm"> 
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500"> Publicité</span>
        <img src="/images/more.png" alt="" width={16} height={16} className="cursor-pointer"/>
      </div>
      <div className={`flex flex-col mt-4 ${size ==='sm' ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${
          size==="sm" ? "h-24" : size === "md" ? "h-36":"h-48"}`}>
          <img src="/images/olia.jpg" alt="" 
          
          className="rounded-lg object-cover"/> 
        </div>
        <div className="flex items-center gap-4">
          <img src="/images/moi.jpg" alt="" 
          width={24}
          height={24}
          className="rounded-full w-6 h-6 object-cover"/>
          <span className="text-blue-500 font-medium">Meite Yakouba</span>
        </div>
        <p className={size === "sm" ? "test-xs" : "text-sm"}>
          {size === "sm" 
            ? "can't detect usage of clerkMiddleware() (or the deprecated" 
            : size === "md" 
            ? "-  clerkMiddleware() (or the deprecated authMiddleware()) is used in your Next.js Middleware."
            : "but Clerk can't detect usage of clerkMiddleware() (or the deprecated authMiddleware()). Please ensure the following"
          }
         
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Voir plus</button>
      </div>
         
     
    </div>
  )
}

export default Ad