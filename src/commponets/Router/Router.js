import React from 'react'
import Header from '../Header/Header'
import Footer from '../footer/Footer'
import Home from './Home'
import Projects from '../projects/Projects'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Vanila from '../projects/vanilajs/vanila'
import Reactjs from '../projects/react/Reactjs'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
          <div>
            <Header />
          </div>
              <div>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/project' element={<Projects />} />
                    <Route path='/plain' element={<Vanila />} />
                    <Route path='/react' element={<Reactjs />} />
                  </Routes>
              </div>
          <div>
            <Footer />
          </div>
        </BrowserRouter>
    </div>
  )
}

export default Router
