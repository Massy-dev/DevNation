import React from "react"
import Comments from "./Comments"


const Post = () => {
  return (
    <><div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/moi.jpg"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full" />
          <span className="font-medium">
            Meite Yakouba
          </span>
        </div>
        <img src="/images/more.png" alt="" width={16} height={16} className="cursor-pointer" />
      </div>

      {/* DESC */}
      <div className="flex flex-col gap-4">
        <p>
          Bienvenue sur le simulateur Google Pixel. Découvrez davantage sur les fonctionnalités les plus récentes et les meilleures de votre téléphone Pixel.

        </p>
        <div className="w-full relative"> {/*min-h-96*/}
          <img src="/images/olia.jpg" alt="" className="object-cover rounded-md" />
        </div>

      </div>

      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <img src="/images/liked.png" alt="" className="object-cover rounded-md cursor-pointer"
              width={16}
              height={16} />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>
            </span>

          </div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <img src="/images/comment.png" alt="" className="object-cover rounded-md cursor-pointer"
              width={16}
              height={16} />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Commentaires</span>
            </span>

          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <img src="/images/share.png" alt="" className="object-cover rounded-md cursor-pointer"
              width={16}
              height={16} />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Partages</span>
            </span>

          </div>
        </div>
        
      </div>
      <Comments/>
    </div><hr /></>
    
  )
}

export default Post