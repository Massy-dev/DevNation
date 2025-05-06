//import Image from "next/image";
//import styles from "./page.module.css";
import React from 'react';
import LeftMenu from './../components/menu/LeftMenu';
import Stories from '@/components/Stories';
import RightMenu from '@/components/menu/RightMenu';
import PostFeed from '@/components/PostFeed';
import AddPost from '@/components/AddPost';

const Home= () =>{
  return (
   
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type={'home'}/>
      </div>

      <div className="w-full lg:w-[80%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories/>
          <AddPost/>
          <PostFeed/>
        </div>
      </div>

      <div className="hidden lg:block w-[30%]">
        <RightMenu/>
      </div>
    </div>
    
  );
}

export default Home