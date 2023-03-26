import React from 'react'
import "./App.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Post } from "./components/post";
import {Navbar} from "./components/navbar";
const Tweet = () => {
  const [postsList, setPostsList] = useState(null);
  const postsRef = collection(db, "posts");
  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
    <Navbar/>
    <div>
      {postsList?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
    </>
  );
};
export default Tweet