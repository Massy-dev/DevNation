import React from "react"


const Comments = () => {
  return (
    <div className=""> 
      {/*text*/}
      <div className="flex items-center gap-4">
        <img src="/images/moi.jpg" alt="" 
          className="w-8 h-8 rounded-full" 
          width={32} height={32}
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input type="text" placeholder="Votre opinion... " 
            className="bg-transparent outline-none flex-1"
          />
          <img src="/images/emoji.png" width={16} height={16} className="cursor-pointer"/>

        </div>
      </div>

      {/*Comment list */}
      <div className="">
        {/*Comments*/}
        <div className=" flex gap-4 justify-between mt-6">
          {/* Avatar*/}
            <img src="/images/moi.jpg" 
            className="w-8 h-8 rounded-full" 
            width={40} 
            height={40} 
            alt=""   
          />
          {/* description */}
          <div className=" flex flex-col gap-2 flex-1 ">
            <span className="font-medium">Meite Yakouba</span>
            <p>
            Rendez-vous
              dans les Canal+ Store
              Playce Marcory
              Playce Palmeraie
              Plateau
              et 2 Plateaux vallons
              ou chez les distributeurs agréés Canal+
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <img src="/images/liked.png" alt="" 
                width={12} 
                height={12} 
                className="w-4 h-4 cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Repondre</div>
            </div>
          </div>
          {/* icons */}
          <img src="/images/more.png" alt="" 
            width={16} 
            height={16} 
            className="w-4 h-4 cursor-pointer" 
          />
        </div>
      </div>
    </div>
  )
}

export default Comments