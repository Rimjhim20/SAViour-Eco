import React from 'react';
import { useState } from "react";
import { auth } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  z-index: 1;
  flex-flow: row nowrap;
  padding: 15px 5px;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 220px;
    padding: 50px 5px;
    transition: transform 0.3s ease-in-out;
  }

 
`;


const RightNav = ({ open }) => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    if (index === openMenuIndex) {
      // If the same menu is clicked again, close it
      setOpenMenuIndex(null);
    } else {
      // If a different menu is clicked, close the currently open menu (if any) and open the new menu
      setOpenMenuIndex(index);
    }
  };

  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <Ul open={open} className="mt-2">
      <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
        <div className="d-flex align-items-center flex-column flex-md-row">
          {user && (
            <>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" onClick={() => toggleMenu(1)}>
                  Alerts
                </button>
                <div className={`dropdown-menu ${openMenuIndex === 1 ? 'show' : ''}`}>
                  <Link to="/tweet" className="dropdown-item" onClick={() => toggleMenu(1)}>
                    AlertFeed
                  </Link>
                  <Link to="/createpost" className="dropdown-item" onClick={() => toggleMenu(1)}>
                    Post-Alerts
                  </Link>
                </div>
              </div>
              <Link to="/donate" className="text-decoration-none text-black m-4">
                Donate
              </Link>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" onClick={() => toggleMenu(2)}>
                  Preparedness
                </button>
                <div className={`dropdown-menu ${openMenuIndex === 2 ? 'show' : ''}`}>
                  <Link to="/safety" className="dropdown-item" onClick={() => toggleMenu(2)}>
                    Safeguard
                  </Link>
                  <Link to="/post" className="dropdown-item" onClick={() => toggleMenu(2)}>
                    DisasterPost
                  </Link>
                  <Link to="/kit" className="dropdown-item" onClick={() => toggleMenu(2)}>
                    Kit
                  </Link>
                </div>
              </div>
  
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" onClick={() => toggleMenu(3)}>
                  Map
                </button>
                <div className={`dropdown-menu ${openMenuIndex === 3 ? 'show' : ''}`}>
                  <Link to="/map" className="dropdown-item" onClick={() => toggleMenu(3)}>
                    MapView
                  </Link>
                  <Link to="/api" className="dropdown-item" onClick={() => toggleMenu(3)}>
                    DisasterInfo
                  </Link>
                  <Link to="/detect" className="dropdown-item" onClick={() => toggleMenu(3)}>
                    Detect
                  </Link>
                </div>
              </div>
  
              <Link to="/prepare" className="text-decoration-none text-black m-4">
                Disasterpedia
              </Link>
            </>
          )}
        </div>
        <div className="user">
          {user && (
            <>
              <div className="mt-2 flex justify-between">
                {/* <p>{user?.displayName}</p> */}
                
                <img className=''  src={user?.photoURL || ''} alt="User" style = {{height:'40px' , width:'42px'}}  />
                
                <div>
                  <button className="btn btn-primary ml-2" onClick={signUserOut}>
                    Log Out
                  </button>

                </div>
              </div>
            </>
          )}
          {!user && <Link to="/" className="text-decoration-none text-black m-4">Login</Link>}
        </div>
      </div>
    </Ul>
  );
  
}

export default RightNav
