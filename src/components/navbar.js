import React, { useEffect, useState } from 'react';
import '../components/nav.css';

const Navbar = () => {

  // const [show, handleShow] = useState(false);

  // useEffect(() => {
  //     window.addEventListener("scroll", () =>{
  //         if(window.scrollY > 100){
  //             handleShow(true);
  //         }else handleShow(false);
  //     });
  //     return () => {
  //         window.removeEventListener("scroll");
  //     }
    
  // }, [])

  return (
    <div className="navbar">
      <img className="nav_logo"
      src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
      alt="NETFLIX"/>
      <img className="nav_avatar"
       src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
       alt="AVATAR"/>
    </div>
  )
}

export default Navbar;



