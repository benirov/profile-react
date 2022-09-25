import React from 'react'
const About = ({about}) => {
    return ( 
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>
            <div className="about_container container grid">
                <img src="/img/about-2.jpg" alt="" className="about_img" />
                <div className="about_data">
                    <p className="about_description">{about.description}</p>
                    <div className="about_info">
                        <div>
                            <span className="about_info-title">{about.experience}</span>
                            <span className="about_info-name">Years <br /> experience</span>
                        </div>
                        <div>
                            <span className="about_info-title">{about.companies}</span>
                            <span className="about_info-name">Companies <br /> worked</span>
                        </div>
                        <div>
                            <span className="about_info-title">{about.remote}</span>
                            <span className="about_info-name">Years remote  <br /> work</span>
                        </div>

                    </div>

                    <div className="about_buttons">
                        <a download="" href="/assets/cv-beniro-vielma.pdf" className="button button--flex">
                            Download Resume<i className="uil uil-download-alt button_icon"></i>
                        </a>
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default About;