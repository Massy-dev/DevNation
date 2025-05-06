import React from "react";
import MobileMenu from "./menu/MobileMenu";
import Link from "next/link";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
//import { Image } from 'next/image';

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* left */}
      <div className="md:hidden lg:block w-[20%]">
      <Link href="/" className="font-bold text-xl text-blue-600"> 
          <img
            id="devNation"
            className="w-1/3 min-w-40 ml-[-7px]"
            src="../images/devnation.png"
            alt="DevNation()"
          />
      </Link>
      </div>

      {/* center */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        <div className="flex gap-6 text-gray-600">
          <Link href="" className="flex items-center gap-2">
            <img
              src="../images/home.png"
              width={16}
              height={16}
              className="w-4 h-4"
              alt="homepage"
            ></img>
            <span>Accueil</span>
          </Link>

          <Link href="" className="flex gap-2">
            <img
              src="/images/friends.png"
              width={16}
              height={16}
              className="w-4 h-4"
              alt="friends"
            ></img>
            <span>Amis</span>
          </Link>

          <Link href="" className="flex gap-2">
            <img
              src="/images/stories.png"
              width={16}
              height={16}
              className="w-4 h-4"
              alt="stories"
            ></img>
            <span>Statut</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none"
          />
          <img src="/images/search.png" alt="" width={14} height={14} />
        </div>
      </div>

      {/* Right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <img src="/images/people.png" alt="" width={24} height={24} />
            </div>

            <div className="cursor-pointer">
              <img src="/images/messages.png" alt="" width={20} height={20} />
            </div>

            <div className="cursor-pointer">
              <img
                src="/images/notifications.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <img src="/images/login.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
