"use client";

import React, { useState } from "react";
import useActionState from './useActionState'
import { User } from "@prisma/client";
import Image from "next/image";
import { updateProfile } from "@/lib/actions";
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from "next/navigation";
import UpdateButton  from "./UpdateButton"

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(null);

  const [state, formAction] = useActionState(() => updateProfile, {
    success: false,
    error: false
  });

const router = useRouter();

const handleClose = () => {
  setOpen(false); 
  if (state?.success) {
    router.refresh();
  }
};


  return (
    <div className="">
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Mettre à jour
      </span>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            action={(formData)=>
              formAction({formData, cover: cover?.secure_url || ""})
          }
            className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
          >
            <h1>Update profile</h1>
            <div className="mt-4 text-xs text-gray-500">
              Use the navbar profile 
            </div>
            {/* Upload file */}
           
 
            <CldUploadWidget uploadPreset="Social" onSuccess={(result)=>setCover(result.info)}>
              {({ open }) => {
                return (
                  <div className=" flex flex-col gap-4 my-4" onClick={()=>open && open()}>
                    <label htmlFor="">Cover picture</label>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <Image 
                          src={user?.cover || "/defaut/cover.png"}
                          alt=""
                          width={100} 
                          height={100} 
                          
                          className="w-12 h-8 rounded-md object-cover" 
                        />
                        <span className="text-xs underline text-gray-600">Change</span>
                      </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            

            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              <div className="flex flex-col gap-4"> 
                <label htmlFor="" className="text-xs text-gray-500">
                  Firs name
                </label>
                <input 
                  type="text" 
                  placeholder={user?.name && user.surname ? user.name + " " + user?.surname: user?.username} 
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="name"
                />
              </div>
            

            
              <div className="flex flex-col gap-4"> 
                <label htmlFor="" className="text-xs text-gray-500">
                  Surname
                </label>
                <input type="text" name="surname" placeholder={user?.surname || "Doe"}className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"/>
              </div>
            

            
              <div className="flex flex-col gap-4"> 
                <label htmlFor="" className="text-xs text-gray-500">
                  Description
                </label>
                <input type="text" name="descr" placeholder={user?.descr || "Doe"}className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"/>
              </div>
            

            
              <div className="flex flex-col gap-4"> 
                <label htmlFor="" className="text-xs text-gray-500">
                  Ville
                </label>
                <input type="text" name="city" placeholder={user?.city || "Doe"}className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"/>
              </div>
          

            
              <div className="flex flex-col gap-4"> 
                <label htmlFor="" className="text-xs text-gray-500">
                  Ecole
                </label>
                <input type="text" name="school" placeholder={user?.school || "Doe"}className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"/>
              </div>


              <div className="flex flex-col gap-4"> 
                <label htmlFor="" className="text-xs text-gray-500">
                  Work
                </label>
                <input type="text" name="work" placeholder={user?.work || "Doe"}className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"/>
              </div>

            
              <div className="flex flex-col gap-4"> 
                <label htmlFor="" className="text-xs text-gray-500">
                  Site web
                </label>
                <input type="text" name="website" placeholder={user?.website || "Doe"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"/>
              </div>
            </div>
            <UpdateButton/>
            {state.success && <span className="text-green-500">Profile has been updated ! </span>}
            {state.error && <span className="text-red-500">Something went wrong ! </span>}

            <div
              className="absolute text-xl right-2 top-3 cursor-pointer"
              onClick={handleClose}
            >
              x
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
