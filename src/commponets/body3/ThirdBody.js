import React from 'react'
import "./thirdBody.css"
import {TbBrandGmail,TbBrandGithub,TbBrandFacebook,TbBrandInstagram,TbBrandLinkedin,TbBrandWhatsapp,TbBrandUpwork,TbBrandTwitter} from "react-icons/tb"

const ThirdBody = () => {
  return (
    <div className='third-body'>
     <div className='third-body-text-section'>
        <blockquote>
            building great website is not  just a job it my passion as a front-end web developer i strive to reach to the extreme and acquire the latest news/trend about front-end web developer and moving forward to acquire experience in back-end developer 
        </blockquote>
        <div className='third-body-btn'>
            <button> contact me </button>
        </div>
     </div>
     <div className='third-body-link-section'>
        <div className='icon-div'>
            {/* <div><TbBrandGmail /></div> */}
            <div><TbBrandTwitter /></div>
            <div><TbBrandGithub /></div>
            <div><TbBrandFacebook /></div>
            <div><TbBrandInstagram /></div>
            <div><TbBrandLinkedin /></div>
            <div><TbBrandUpwork /></div>
            <div><TbBrandWhatsapp /></div>
        </div>
        <div>
            <ul>
                {/* <li><a href="#">GMAIL</a></li> */}
                <li><a href="#">TWITTER</a></li>
                <li><a href="#">GITHUB</a></li>
                <li><a href="#">FACEBOOK</a></li>
                <li><a href="#">INSTAGRAM</a></li>
                <li><a href="#">LINKEDEN</a></li>
                <li><a href="#">UPWORK</a></li>
                <li><a href="#">WHATSAPP</a></li>
            </ul>
        </div>
     </div>
    </div>
  )
}

export default ThirdBody
