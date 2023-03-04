import React from 'react'
import  CreateForm  from "./createform";
import { Navbar } from './navbar';
export const CreatePost = () => {
  return (
    <>
    <Navbar/>
    <div className="create-post">
      <CreateForm />
    </div>
    </>
  );
};

 
 