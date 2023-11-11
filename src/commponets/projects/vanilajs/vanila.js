import React from 'react'
import Plainjs from './Plainjs'
import {Link} from "react-router-dom"
import Geedesktop from "../../image/gee-destop-.jpg"
import Geetablet from "../../image/gee-tablet.jpg"
import Geemobile from "../../image/gee-mobile.jpg"
import newsdesktop from "../../image/news-desktop.jpg"
import newstablet from "../../image/news-tablet.jpg"
import newsmobile from "../../image/news-mobile.jpg"
import reviewdesktop from "../../image/review-desktop.jpg"
import reviewtablet from "../../image/review-tablet.jpg"
import reviewmobile from "../../image/review-mobile.jpg"

const vanila = () => {
  return (
    <div>
        <div className='project-nav'>
                <h1>Project page</h1>
        </div>
        <div className='plain'>
            <h2>Vanila js</h2>
        </div>
        <div className='main-plain-div'>
            <Plainjs 
                 liveLink={"https://gee-project.vercel.app/"} 
                 sourceCode={"https://github.com/Ezeh0415/Gee-project-"}
                 desktop={Geedesktop} 
                 tablet={Geetablet} 
                 mobile={Geemobile} 
                 quote={"this is one of the project i worked for my mentor with just reguler html css javaScript and which i could say was no that hard to complete but is not hard dose not mean it was asy either but i got pass it as always "}
            />
            <Plainjs 
               liveLink={"https://newstella-signup.vercel.app/"} 
               sourceCode={"https://github.com/Ezeh0415/newstella-signup"}
               desktop={newsdesktop} 
               tablet={newstablet} 
               mobile={newsmobile}
               quote={"this is on on my work given to me by front end mentor a newsteller site i completed with flying coolors the site function is a kinda form but not a form site the input button is trigerd to send an email if an email is enterd and will notify you that an email has been sent to you "}
            />
            <Plainjs 
                liveLink={"https://intractive-rating-card.vercel.app/"} 
                sourceCode={"https://github.com/Ezeh0415/intractive-rating-card"}
                desktop={reviewdesktop} 
                tablet={reviewtablet} 
                mobile={reviewmobile}
                quote={"this is a rating site though the js is a bit roughed up but i tried my best as a JavaScript beginner as of that month but i did do it the way i know best and look what came out"}
            />
        </div>
        <div className='last-plain-link'>
             <ul>
                 <li><a href="https://github.com/Ezeh0415">GITHUB PAGE</a></li>
                 <li><Link to="/react">React js</Link></li>
             </ul>
        </div>
    </div>
  )
}

export default vanila
