import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=''>
      <footer className=" bg-light mt-2 m-8">
        <div className="container ">
    <section className="  text-center">
      <Link
        className="btn btn-floating m-1"
        to=" "
        role="button"
        ><i className="fab fa-facebook-f"></i></Link>

      <Link
        className="btn btn-floating m-1"
        to=" "
        role="button"
        ><i className="fab fa-twitter"></i></Link>
      <Link
        className="btn btn-floating m-1"
        to=" "
        role="button"
        ><i className="fab fa-google"></i></Link>
      <Link
        className="btn btn-floating m-1"
        to=" "
        role="button"><i className="fab fa-instagram"></i></Link>
      <Link
        className="btn btn-floating m-1"
        to=" "
        role="button"
        ><i className="fab fa-linkedin-in"></i></Link>
      <Link
        className="btn btn-floating m-1"
        to=" "
        role="button"
        ><i className="fab fa-github"></i></Link>
    </section>

  </div>
        <div className=" text-center mb-2">
      
          Google Solution Challenge © 2023 Copyright 
        </div>
      </footer>

    </div>
  )
}

export default Footer