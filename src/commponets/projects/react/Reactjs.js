import React from 'react'
import "./reactjs.css"
import ReactList from './ReactList'
import { Link } from "react-router-dom"
import recipeDesktop from "../../image/Recipe-for-desktop.jpg"
import recipeTablet from "../../image/Recipe-tablet.jpg"
import recipeMobile from "../../image/recipe-mobile.jpg"
import movieDesktop from "../../image/movie-desktop.jpg"
import movieTablet from "../../image/movie-tablet.jpg"
import movieMobile from "../../image/movie-mobile.jpg"

const Reactjs = () => {
  return (
    <div>
       <div className='project-nav'>
                <h1>Project page</h1>
              </div>
              <div className="react-page">
                <h2>React js</h2>
              </div>
                <div className="main-react-div">
                  <ReactList 
                    liveLink={"https://recipe-app-ezeh0415.vercel.app/"} 
                    sourceCode={"https://github.com/Ezeh0415/Recipe-app"}
                    desktop={recipeDesktop} 
                    tablet={recipeTablet} 
                    mobile={recipeMobile}
                    quote={"this is my first website with react the website evolves on picture of foods you can search on anytype if food you like to know the face or picture of the food and de cloud recioe won`t waste a second displaying the result to you this is a based on styling project with react.js"}
                  />
                  <ReactList 
                     liveLink={"https://movie-site-umber.vercel.app/"} 
                     sourceCode={"https://github.com/Ezeh0415/Movie-Site"}
                     desktop={movieDesktop} 
                     tablet={movieTablet} 
                     mobile={movieMobile} 
                     quote={"this is amother project with react and react-redux followed by redux/toolkit this website consist on movie pictures and the year it was created mt inspiration while creating this movie site was cut short due to the api i used in rhe creation"}
                  />
                  <ReactList 
                      liveLink={"https://movie-site-umber.vercel.app/"} 
                      sourceCode={"https://github.com/Ezeh0415/Movie-Site"}
                      desktop={movieDesktop} 
                      tablet={movieTablet} 
                      mobile={movieMobile} 
                  />
                </div>
              <div className='react-page-link'>
               <a href="https://github.com/Ezeh0415">GITHUB PAGE</a>
               <Link to="/plain">Vanila js</Link>
              </div>
    </div>
  )
}

export default Reactjs

