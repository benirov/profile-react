import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
const Portfolio = ({portfolios}) => {
    return ( 
        <section className="portfolio section " id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most recent work</span>

        <div className="portfolio_container container swiper-container">
        <Swiper
      spaceBetween={50}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
            {
                portfolios.map((portfolio) => {
                    return (
                        <SwiperSlide>
                    <div className="portfolio_content grid swiper-slide">
                        <img src={portfolio.img} alt="" className="portfolio_img" />

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">{portfolio.name}</h3>
                            {
                               portfolio.tecnologies.map((tecnologie) => {
                                return(<>{tecnologie}&nbsp;</>)
                               }) 
                            }
                            <br />
                            <br />
                            <p className="portfolio_description">
                            {portfolio.description}
                            </p>
                            {portfolio.url && (<a href={portfolio.url} target="_blank" className="button button--flex button--small portfolio_button">
                                View
                                <i className="uil uil-eye button_icon"></i>
                            </a>) }
                            &nbsp;
                            <a href={portfolio.repo} target="_blank" className="button button--flex button--small portfolio_button">
                                View
                                <i className="uil uil-github-alt button_icon"></i>
                            </a>
                        </div>
                    </div></SwiperSlide>)
                })
            }  
            </Swiper>
            
             
        </div>
    </section>
     );
}
 
export default Portfolio;