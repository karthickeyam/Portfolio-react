import React from 'react'
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";

import "./home.css";

const Home = () => {
  return (
<>
      <div className="outterHome" id='home'>
        <div className="innerHome">
        <div className="profile"></div>
        <div className="name"> <h1>Karthickeyan M</h1></div>
        <div className="para"><p>I'm a front-end developer</p></div>
        <div className="links">
          <ul className='homeLi'>
            <li><a href="https://karthi.manik22@gmail.com"><AiOutlineMail className="icon" /></a></li>
            <li><a href="https://www.instagram.com/k_a_r_t_h_i_c_k_e_y_an/"> <FaInstagram className="icon"/></a></li>
            <li><a href="https://www.linkedin.com/in/karthick1234"> <FaLinkedin className="icon" /></a> </li>
            <li><a href="https://github.com/karthickeyam"><AiFillGithub className="icon"/></a> </li>
            </ul>
          </div>
        </div>
      </div>
    </>

    
  );
}

export default Home