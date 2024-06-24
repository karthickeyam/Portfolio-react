import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { SlDocs } from "react-icons/sl";
import { TiContacts } from "react-icons/ti";
import "./nav.css";
const NavBar = () => {
  return (
    <nav>
    <div className="outterNav">
      <div className="li">
        <ul className='ul'>
          <li><a href="#home">  <i className='icon-home'><IoHomeOutline /></i></a></li>
          <li><a href="#about"> <i className='icon-user'><IoPersonOutline /></i></a></li>
          <li><a href="#education"> <i className='icon-graduation'><RiGraduationCapLine /></i></a></li>
          <li><a href="#project"> <i className='icon-docs'><SlDocs /></i></a></li>
          <li><a href="#contact"> <i className='icon-info'><TiContacts /></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar