import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import React from "react"

const AddPost = () => {

const { userId } = auth();

const testAction = async (formdata: FormData) => {
  "use server";

  if (!userId) return;
  const description = formdata.get("descr") as string;
  try{
    const resp =  await prisma.post.create({
      data:{
        userId:userId,
        desc:description,
      },
    });
    console.log(resp)
  } catch(err){
    console.log(err);
  }
}


  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <img
        src="/images/macbook.jpg"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form action={testAction} className="flex gap-4">
          <textarea
            placeholder="Qu'est-ce que tu as en tête ?"
            name="descr"
            className="flex-1 bg-slate-100 rounded-lg p-2">
           
          </textarea>
          <img
              src="/images/emoji.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            <button> Send </button>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
            <div className="flex gap-2 items-center cursor-pointer">
              <img src="/images/addimage.png" alt="" width={20} height={20} />
              Photo
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <img src="/images/addVideo.png" alt="" width={20} height={20} />
              Vidéo
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <img src="/images/poll.png" alt="" width={20} height={20} />
              Sondage
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <img src="/images/addevent.png" alt="" width={20} height={20} />
              Évènement
            </div>
            
        </div>
      </div>
      
    </div>
  )
}

export default AddPost