import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';
import Pic from '../../assets/images/illustration/handhold.jpeg'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo d-flex">
      <Link to="/home" className='font-weight-bold text-decoration-none   text-black'>
      <p><b style={{color:"green"}}>SAV</b>iour-<b style={{color:"green"}}>E</b>co</p></Link>
     <img src={Pic} alt='' className='ml-2'/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
