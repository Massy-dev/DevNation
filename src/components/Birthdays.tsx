import Link from "next/link"
import React from "react"

const Birthdays = ({userId}:{userId?:string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg text-sm flex flex-col gap-4"> 

      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500"> Anniversaire</span>
      </div>

       <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <img src="/images/moi.jpg" alt="" width={40} height={40} 
          className="w-10 h-10 rounded-full object-cover"/>
          <span className="font-semibold">MEITE YAKOUBA</span>
        </div>
         <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-dm">Célébrer</button>
         </div>
         
      </div>
      {/** Up coming */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <img src="/images/gift.png" alt=""
        width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            A venir
          </span>
          <span className="text-gray-500">
            See other 16 have upcoming birthdays

          </span>
        </Link>
      </div>
    </div>
  )
}

export default Birthdays