import React, { useState } from 'react'
import "./plainjs.css"
import img1 from "../../image/img.jpg"
import myimg from "../../image/myimg.jpg"
import { useSelector, useDispatch } from "react-redux"
import { SLIDE } from '../../slice/slider'
import {Swiper,SwiperSlide} from "swiper/react";
import { EffectFade } from 'swiper/modules';
import "swiper/swiper-bundle.css"

const Plainjs = ({desktop,tablet,mobile,liveLink,sourceCode,quote}) => {


  const image = [
     desktop,
     tablet,
     mobile
  ]


  const slider = useSelector((state) => state.slider.slider)
  const dispatch = useDispatch()

  // console.log(image)

 

  return (
      <div>
       
            <div>
              <div className='plain-card'>
                    <div className='image-slider'>
                      <Swiper 
                        spaceBetween={20} 
                        sliderPerView={1}
                        modules={[EffectFade]}
                        effect='fade'
                      >
                        {image.map((img,index) => {
                          return (
                            <SwiperSlide key={index}>
                              <img src={img} alt={`slide ${index + 1}`} />
                            </SwiperSlide>
                          )
                        })}
                      </Swiper>
                    </div>
                  <div className='plain-text'> 
                    <blockquote>
                      {quote}
                    </blockquote>
                  </div>
                  <div className='plain-link'>
                    <ul>
                      <li><a href={liveLink}>Live link</a></li>
                      <li><a href={sourceCode}>Source code</a></li>
                    </ul>
                  </div>
                  </div>
            </div>
      </div>
  )
}

export default Plainjs
