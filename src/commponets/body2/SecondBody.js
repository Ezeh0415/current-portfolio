import React from 'react'
import "./secondBody.css"
import img from "../image/myimg.jpg"

const SecondBody = () => {
  return (
    <div className='second-body'>
       <div className='first-div'>
            <div className='first-div-1'>
                <h2>hi my name is ezeh chigozie godwin  a front-end web developer</h2>
                <blockquote>at the age of i9 i embarked on a journey into the dynamic world of front-end web development as of now. i am a 20 years old boy wielding html5, css3, javaScript, bootstraps. my designs ensuring responsiveness. in the dynamic realm of web development, react.js is my go-to for building scalable and efficent user interfaces i am not just coding i`m crafting digital experiences,constantly adapting to the latest trends</blockquote>
                <div className='first-div-btn'>
                    <button>view profile</button>
                </div>
            </div>
       </div>
       <div className='second-div'>
          <img src={img} alt={img} />
       </div>
    </div>
  )
}

export default SecondBody
