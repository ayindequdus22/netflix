import React, { useEffect, useState } from 'react'
import logo from './netflix-logo-0.png'
import './nav.css'
const Nav = () => {
const [show,handleShow] = useState(false);
    useEffect(()=>{
       window.addEventListener("scroll",() => {
  if(window.scrollY > 100){
            handleShow(true)
        } else handleShow(false)
        
     })
       return ()=>{ window.removeEventListener("scroll",handleShow(false))};
    })

    
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img src={logo} alt="netflix-logo" className='nav__logo'/>
        <img src="https://pbs.twimg.com/profile_images" className='nav__avatar' alt="Users" />
    </div>
  )
}

export default Nav