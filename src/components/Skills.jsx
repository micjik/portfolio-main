import React from 'react';
import { AiTwotoneHtml5, AiOutlineJavaScript } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { SiMongodb, SiMysql } from "react-icons/si";
import './skills.css';


const Skills = () => {
  return (
    <div className='skills'>
      <h5>Skills</h5>
        <ul>
            <li><span><AiTwotoneHtml5/></span>HTML</li>
            <li><span><FaCss3/></span>CSS</li>
            <li><span><FaBootstrap/></span>Bootstrap</li>
            <li><span><RiTailwindCssFill/></span>Tailwind</li>
            <li><span><AiOutlineJavaScript/></span> JavaScript</li>
            <li><span><IoLogoReact/></span>React</li>
            <li><span><DiNodejs/></span>Node</li>
            <li><span><SiMongodb/></span>MongoDB</li>
            <li><span><SiMysql/></span>MySql</li>
        </ul>
    </div>
  )
}

export default Skills
