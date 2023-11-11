import React from 'react'
import "./reactjs.css"
import img from "../../image/img.jpg"
import {Swiper,SwiperSlide} from "swiper/react";
import { EffectFade } from 'swiper/modules';
import "swiper/swiper-bundle.css"

const ReactList = ({liveLink,sourceCode,desktop,tablet,mobile,quote}) => {

    const image = [
        desktop,
        tablet,
        mobile
    ]
  return (
    <div >
          <div>
            <div className='react-card'>
                   <Swiper 
                        spaceBetween={20} 
                        sliderPerView={1}
                        modules={[EffectFade]}
                        effect='Cube'
                      >
                        {image.map((img,index) => {
                          return (
                            <SwiperSlide key={index}>
                              <img src={img} alt={`slide ${index + 1}`} />
                            </SwiperSlide>
                          )
                        })}
                    </Swiper>
                <span>
                  <blockquote>{quote}</blockquote>
                </span>
                <div className='react-link'>
                  <a href={liveLink}>live link</a>
                  <a href={sourceCode}>source code</a>
                </div>
            </div>
              
          </div>
          
    </div>
  )
}

export default ReactList