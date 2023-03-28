import { addDoc, getDocs, collection, query, where, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../firebase";

export const Post = ({ post }) => {
  const [user] = useAuthState(auth);
  const [likes, setLikes] = useState(null);

  const likesRef = collection(db, "likes");
  const likesQuery = query(likesRef, where("postId", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesQuery);
    setLikes(data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id })));
  };

  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesRef, { userId: user?.uid, postId: post.id });
      const newLike = { userId: user?.uid, likeId: newDoc.id };
      setLikes((prevLikes) => (prevLikes ? [...prevLikes, newLike] : [newLike]));
    } catch (error) {
      console.log(error);
    }
  };

  const removeLike = async () => {
    try {
      const likeToDeleteQuery = query(likesRef, where("postId", "==", post.id), where("userId", "==", user?.uid));
      const likeToDeleteData = await getDocs(likeToDeleteQuery);
      const likeToDeleteId = likeToDeleteData.docs[0].id;
      const likeToDelete = doc(db, "likes", likeToDeleteId);
      await deleteDoc(likeToDelete);
      setLikes((prevLikes) => prevLikes && prevLikes.filter((like) => like.likeId !== likeToDeleteId));
    } catch (error) {
      console.log(error);
    }
  };

  const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div class="m-auto w-fit">
  <div class="col-sm-4 mx-auto w-fit">
    <div className="card m-2 w-fit p-2" >
      <div className="card-title">
        <h3>{post.title}</h3>
      </div>
      <div className="card-text">
        <p>{post.description}</p>
      </div>

      <div className="footer">
        <p>@{post.username}</p>
        <button onClick={hasUserLiked ? removeLike : addLike}>
          {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
        </button>
        {likes && <p>Likes: {likes?.length}</p>}
      </div>
    </div>
    </div>
    </div>
  );
};
