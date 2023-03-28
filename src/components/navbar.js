import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useState } from "react";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="tweetnavbar">
      <div className="links">
            <Link to="/tweet" className=" p-2" onClick={toggleMenu} >
              AlertFeed
            </Link>
            <Link to="/createpost" className="p-2" onClick={toggleMenu}>
              Create-Post
            </Link>
          </div>
        </div>
  );
};
