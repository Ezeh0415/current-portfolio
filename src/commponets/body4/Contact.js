import React from 'react'
import "./contact.css"
import {TbBrandGmail} from "react-icons/tb"
import { IoCallSharp } from "react-icons/io5"

const Contact = () => {
  return (
    <div className='fourth-section'>
      <div className='fourth-section-text'>
            <h1>get in touch</h1>
            <h3>hello i appreciate your interest in reaching out you can easliy reach out via gmail</h3>
            <h5>send me a mail for potential collaboration,project or just friendly chat am always open</h5>
            <h5>while gmail is my primary mode of communication you can also find me on any of the social network listed above</h5>
            <h5>while sending a message through mail or any social media platform please make sure u include the purpose of your message</h5>
            <h5>and please provide a brief overview of what you`d like us to discuss and we can take it from there  looking forward to our conversation</h5>
      </div>
       <div className='fourth-section-mails'>
          <div className='fourth-section-mail'>
                <a href="mailto:ezehgodwin3942@gmail.com"><i><TbBrandGmail /></i></a>
                <p><a href="mailto:ezehgodwin3942@gmail.com"> send me a mail</a></p>
          </div>
           <h1>OR</h1>
          <div className='fourth-section-mail'>
             <h4> <a href='tel:07049174473'><IoCallSharp /></a></h4>
             <p>call me</p>
          </div>
       </div>
    </div>
  )
}

export default Contact
