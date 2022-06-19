import React from 'react'

const App = () => {
  return ( 
    <>
    <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav_logo">Wixa</a>
            <div className="nav_menu" id="nav-menu">
                <ul className="nav_list grid">
                    <li className="nav_item">
                        <a href="#home" className="nav_link active-link">
                            <i className="uil uil-estate nav_icon"></i> Home
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#about" className="nav_link">
                            <i className="uil uil-user nav_icon"></i> About
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#skills" className="nav_link">
                            <i className="uil uil-heart nav_icon"></i> Skills
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#services" className="nav_link">
                            <i className="uil uil-suitcase-alt nav_icon"></i> Services
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#portfolio" className="nav_link">
                            <i className="uil uil-scenery nav_icon"></i> Portfolio
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                            <i className="uil uil-location-arrow nav_icon"></i> Contact Me
                        </a>
                    </li>
                </ul>
                <i className="uil uil-multiply nav_close" id="nav-close"></i>
            </div>
            <div className="nav_btns">
                <i className="uil uil-moon change-theme" id="theme-button"></i>
                <div className="nav_toggle" id="nav-toggle">
                    <i className="uil uil-apps"></i>
                </div>
            </div>
        </nav>

    </header>

    <main className="main">
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <div className="home_social">
                        <a href="#" target="_blank" className="home_social-icon">
                            <i className="uil uil-github-alt"></i>
                        </a>
                        <a href="#" target="_blank" className="home_social-icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="#" target="_blank" className="home_social-icon">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                    </div>

                    <div className="home_img">
                        <svg className="home_blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <mask id="mask0" mask-type="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                    <image className="home_blob-img" x={12} y={18} href="https://dev.dakidarts.com/wixa/assets/img/asset.png"/>
                                </g>
                            </svg>
                    </div>
                    <div className="home_data">
                        <h1 className="home_title">Hi, I am Beniro</h1>
                        <h3 className="home_subtitle">Full Stack Developer</h3>
                        <p className="home_description">High level experience in web design and development knowledge, producing quality work.</p>
                        <a href="#contact" className="button button--flex">
                                Hire Me <i className="uil uil-message button_icon"></i>
                            </a>
                    </div>
                </div>
                <div className="home_scroll">
                    <a href="#about" className="home_scroll-button button--flex">
                        <i className="uil uil-mouse-alt home_scroll-mouse"></i>
                        <span className="home_scroll-name">
                                Scroll down
                            </span>
                        <i className="uil uil-arrow-down home_scroll-arrow"></i>
                    </a>
                </div>
            </div>

        </section>

        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>
            <div className="about_container container grid">
                <img src="https://dev.dakidarts.com/wixa/assets/img/asset.jpg" alt="" className="about_img" />
                <div className="about_data">
                    <p className="about_description">Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.</p>
                    <div className="about_info">
                        <div>
                            <span className="about_info-title">+4</span>
                            <span className="about_info-name">Years <br /> experience</span>
                        </div>
                        <div>
                            <span className="about_info-title">+41</span>
                            <span className="about_info-name">Completed <br /> project</span>
                        </div>
                        <div>
                            <span className="about_info-title">+6</span>
                            <span className="about_info-name">Companies <br /> worked</span>
                        </div>

                    </div>

                    <div className="about_buttons">
                        <a download="" href="https://dev.dakidarts.com/wixa/assets/file/my-cv.pdf" className="button button--flex">
                                Download Resume<i className="uil uil-download-alt button_icon"></i>
                            </a>
                    </div>
                </div>
            </div>

        </section>


        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My Technical Level</span>
            <div className="skills_container container grid">
                <div>
                    <div className="skills_content skills_close">
                        <div className="skills_header">
                            <i className="uil uil-brackets-curly skills_icon"></i>
                            <div>
                                <h1 className="skills_title">Front End Development</h1>
                                <span className="skills_subtitle">
                                       More than 4 years of experience.
                                    </span>
                            </div>
                            <i className="uil uil-angle-down skills_arrow"></i>
                        </div>
                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">HTML</h3>
                                    <span className="skills_number">95%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_html"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">CSS</h3>
                                    <span className="skills_number">90%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_css"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">JavaScript</h3>
                                    <span className="skills_number">85%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_js"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">React</h3>
                                    <span className="skills_number">90%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_react"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills_content skills_close">
                        <div className="skills_header">
                            <i className="uil uil-server-connection skills_icon"></i>
                            <div>
                                <h1 className="skills_title">Backend End Development</h1>
                                <span className="skills_subtitle">
                                    More than 3 years of experience.
                                    </span>
                            </div>
                            <i className="uil uil-angle-down skills_arrow"></i>
                        </div>
                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">PHP</h3>
                                    <span className="skills_number">85%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_php"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Node JS</h3>
                                    <span className="skills_number">70%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_node"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Python</h3>
                                    <span className="skills_number">80%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_python"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Firebase</h3>
                                    <span className="skills_number">80%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_firebase"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="skills_content skills_close">
                        <div className="skills_header">
                            <i className="uil uil-illustration skills_icon skills_icon "></i>
                                <div>
                                    <h1 className="skills_title ">Design</h1>
                                    <span className="skills_subtitle ">
                                    More than 5 years of experience.
                                    </span>
                                </div>
                                <i className="uil uil-angle-down skills_arrow "></i>
                            </div>
                            <div className="skills_list grid ">
                                <div className="skills_data ">
                                    <div className="skills_titles ">
                                    <h3 className="skills_names ">Photoshop</h3> 
                                    <span className="skills_number ">95%</span>
                                    </div>
                                    <div className="skills_bar ">
                                        <span className="skills_percentage skills_photoshop "></span>
                                    </div>
                                </div>
                                <div className="skills_data ">
                                    <div className="skills_titles ">
                                    <h3 className="skills_name ">Illustrator</h3> 
                                    <span className="skills_number ">90%</span>
                                    </div>
                                    <div className="skills_bar ">
                                        <span className="skills_percentage skills_illustrator "></span>
                                    </div>
                                </div>
                                <div className="skills_data ">
                                    <div className="skills_titles ">
                                    <h3 className="skills_name ">Figma</h3> 
                                    <span className="skills_number ">95%</span>
                                    </div>
                                    <div className="skills_bar ">
                                        <span className="skills_percentage skills_figma "></span>
                                    </div>
                                </div>
                                <div className="skills_data ">
                                    <div className="skills_titles ">
                                    <h3 className="skills_name ">Sketch</h3> 
                                    <span className="skills_number ">80%</span>
                                    </div>
                                    <div className="skills_bar ">
                                        <span className="skills_percentage skills_sketch "></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        
            </section>
            <section className="qualification section">
                <h2 className="section_title ">Qualification</h2>
                <span className="section_subtitle ">My personal journey</span>

                <div className="qualification_container container ">
                    <div className="qualification_tabs ">
                        <div className="qualification_button button--flex qualification_active" data-target='#education'>
                            <i className="uil uil-graduation-cap qualification_icon "></i>
                            Education
                        </div>
                        <div className="qualification_button button--flex" data-target='#work'>
                            <i className="uil uil-suitcase qualification_icon "></i>
                            Work
                        </div>
                    </div>
                    <div className="qualification_sections ">
                        <div className="qualification_content qualification_active" data-content id='education'>
                            <div className="qualification_data ">
                                <div>
                                    <h3 className="qualification_title ">Computer Engineering</h3>
                                    <span className="qualification_subtitle ">University of Buea</span>
                                    <div className="qualification_calendar ">
                                        <i className="uil uil-schedule "></i>
                                        2014 - 2018
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification_rounder "></span>
                                    <span className="qualification_line "></span>
                                </div>
                            </div>
                            <div className="qualification_data ">
                                <div></div>
                                <div>
                                    <span className="qualification_rounder "></span>
                                    <span className="qualification_line "></span>
                                </div>
                                <div>
                                    <h3 className="qualification_title ">Web Design</h3>
                                    <span className="qualification_subtitle ">Molyko - Design Institute</span>
                                    <div className="qualification_calendar ">
                                        <i className="uil uil-schedule "></i>
                                        2016 - 2021
                                    </div>
                                </div>
                            </div>
                            <div className="qualification_data ">
                                <div>
                                    <h3 className="qualification_title ">Web Development</h3>
                                    <span className="qualification_subtitle ">Molyko - Design Institute</span>
                                    <div className="qualification_calendar ">
                                        <i className="uil uil-schedule "></i>
                                        2017 - 2021
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification_rounder "></span>
                                    <span className="qualification_line "></span>
                                </div>
                            </div>
                            <div className="qualification_data ">
                                <div></div>
                                <div>
                                    <span className="qualification_rounder "></span>
                                    <span className="qualification_line "></span>
                                </div>
                                <div>
                                    <h3 className="qualification_title ">Masters in UI/UX</h3>
                                    <span className="qualification_subtitle ">Molyko - Design Institute</span>
                                    <div className="qualification_calendar ">
                                        <i className="uil uil-schedule "></i>
                                        2018 - 2021
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="qualification_content" data-content id='work'>
                            <div className="qualification_data ">
                                <div>
                                    <h3 className="qualification_title ">Front-End Developer</h3>
                                    <span className="qualification_subtitle ">Magiko Creative Agency</span>
                                    <div className="qualification_calendar ">
                                        <i className="uil uil-schedule "></i>
                                        2017 - 2022
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification_rounder "></span>
                                    <span className="qualification_line "></span>
                                </div>
                            </div>
                            <div className="qualification_data ">
                                <div></div>
                                <div>
                                    <span className="qualification_rounder "></span>
                                </div>
                                <div>
                                    <h3 className="qualification_title ">Software Developer</h3>
                                    <span className="qualification_subtitle ">Brisco Softtech</span>
                                    <div className="qualification_calendar ">
                                        <i className="uil uil-schedule "></i>
                                        2018 - 2022
                                    </div>
                                </div>
                            </div>
                            <div className="qualification_data ">
                                <div>
                                    <h3 className="qualification_title ">Graphics Designer</h3>
                                    <span className="qualification_subtitle ">Magiko Creative Agency</span>
                                    <div className="qualification_calendar ">
                                        <i className="uil uil-schedule "></i>
                                        2016 - 2022
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification_rounder "></span>
                                    <span className="qualification_line "></span>
                                </div>
                            </div>
                            <div className="qualification_data ">
                                <div></div>
                                <div>
                                    <span className="qualification_rounder "></span>
                                </div>
                                <div>
                                    <h3 className="qualification_title ">UX Supervisor</h3>
                                    <span className="qualification_subtitle ">Magiko Creative Agency</span>
                                    <div className="qualification_calendar ">
                                        <i className="uil uil-schedule "></i>
                                        2020 - 2022
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </section>

        <section className="services section " id="services">
            <h3 className="section_title">Services</h3>
            <span className="section_subtitle">What I Offer</span>

            <div className="services_container container grid">
            
                <div className="services_content">
                    <div>
                        <i className="uil uil-object-group services_icon"></i>
                        <h3 className="services_title">UI/UX <br />Design</h3>
                    </div>
                    
                    <span className="button button--flex button--small button--link services_button">
                            View more 
                            <i className="uil uil-arrow-right button_icon"></i>
                    </span>
                    <div className="services_modal">
                        
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">UI/UX <br />Designer</h4>
                            <i className="uil uil-times services_modal-close"></i>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>Web page development.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I create ux element interactions.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services_content">
                    <div>
                        <i className="uil uil-window services_icon"></i>
                        <h3 className="services_title">Front-End <br />Development</h3>
                    </div>
                    <span className="button button--flex button--small button--link services_button">
                            View more 
                            <i className="uil uil-arrow-right button_icon"></i>
                    </span>
                    <div className="services_modal">
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Front-End <br />Development</h4>
                            <i className="uil uil-times services_modal-close"></i>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>Web page development.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I create ux element interactions.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services_content">
                    <div>
                        <i className="uil uil-server-connection services_icon"></i>
                        <h3 className="services_title">Back-End <br />Development</h3>
                    </div>
                    <span className="button button--flex button--small button--link services_button">
                            View more 
                            <i className="uil uil-arrow-right button_icon"></i>
                    </span>
                    <div className="services_modal">
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Back-End <br />Development</h4>
                            <i className="uil uil-times services_modal-close"></i>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>Web page development.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I create ux element interactions.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services_content">
                    <div>
                        <i className="uil uil-illustration services_icon"></i>
                        <h3 className="services_title">Brand<br />Design</h3>
                    </div>
                    <span className="button button--flex button--small button--link services_button">
                            View more 
                            <i className="uil uil-arrow-right button_icon"></i>
                    </span>
                    <div className="services_modal">
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Brand<br />Design</h4>
                            <i className="uil uil-times services_modal-close"></i>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>Web page development.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I create ux element interactions.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                <div className="services_content">
                    <div>
                        <i className="uil uil-chart-line services_icon"></i>
                        <h3 className="services_title">SEO/SEM<br />Marketing</h3>
                    </div>
                    <span className="button button--flex button--small button--link services_button">
                            View more 
                            <i className="uil uil-arrow-right button_icon"></i>
                    </span>
                    <div className="services_modal">
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">SEO/SEM<br />Marketing</h4>
                            <i className="uil uil-times services_modal-close"></i>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>Web page development.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I create ux element interactions.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services_content">
                    <div>
                        <i className="uil uil-layers-alt services_icon"></i>
                        <h3 className="services_title">Ads y Spot<br />Animation</h3>
                    </div>
                    <span className="button button--flex button--small button--link services_button">
                            View more 
                            <i className="uil uil-arrow-right button_icon"></i>
                    </span>
                    <div className="services_modal">
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Ads y Spot<br />Animation</h4>
                            <i className="uil uil-times services_modal-close"></i>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>Web page development.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I create ux element interactions.</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle service_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="portfolio section " id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">Most recent work</span>

            <div className="portfolio_container container swiper-container">
                <div className="swiper-wrapper">
                    <div className="portfolio_content grid swiper-slide">
                        <img src="https://dev.dakidarts.com/wixa/assets/img/portfolio1.jpg" alt="" className="portfolio_img" />

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Modern Web Design</h3>
                            <p className="portfolio_description">
                                Website adaptable to all devices, with ui components and animated interactions.
                            </p>
                            <a href="#" className="button button--flex button--small portfolio_button">
                                View
                                <i className="uil uil-eye button_icon"></i>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio_content grid swiper-slide">
                        <img src="https://dev.dakidarts.com/wixa/assets/img/portfolio2.jpg" alt="" className="portfolio_img" />

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Modern Web Design</h3>
                            <p className="portfolio_description">
                                Website adaptable to all devices, with ui components and animated interactions.
                            </p>
                            <a href="#" className="button button--flex button--small portfolio_button">
                                View
                                <i className="uil uil-eye button_icon"></i>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio_content grid swiper-slide">
                        <img src="https://dev.dakidarts.com/wixa/assets/img/portfolio5.jpg" alt="" className="portfolio_img" />

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Modern Web Design</h3>
                            <p className="portfolio_description">
                                Website adaptable to all devices, with ui components and animated interactions.
                            </p>
                            <a href="#" className="button button--flex button--small portfolio_button">
                                View
                                <i className="uil uil-eye button_icon"></i>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio_content grid swiper-slide">
                        <img src="https://dev.dakidarts.com/wixa/assets/img/portfolio3.jpg" alt="" className="portfolio_img" />

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Modern Web Design</h3>
                            <p className="portfolio_description">
                                Website adaptable to all devices, with ui components and animated interactions.
                            </p>
                            <a href="#" className="button button--flex button--small portfolio_button">
                                View
                                <i className="uil uil-eye button_icon"></i>
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div className="swiper-button-next">
                    <i className="uil uil-angle-right swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-button-prev ">
                    <i className="uil uil-angle-left swiper-portfolio-icon"></i>
                </div>
                 
            </div>
        </section>

        <section className="project section">
            <div className="project_bg">
                <div className="project_container container grid">
                    <div className="project">
                        <h2 className="project_title">
                            You got a new project?
                        </h2>
                        <p className="project_description">
                            Contact me now and get a 25% discount on your new project.
                        </p>
                        <a href="#contact" className="button button--flex button--white">
                            Contact Me <i className="uil uil-location-arrow project_icon button_icon"></i> 
                        </a>
                    </div>
                    <img src="https://dev.dakidarts.com/wixa/assets/img/asset2.png" alt="" className="project_img" />
                </div>
            </div>

        </section>

        <section className="testimonial section ">
                <h2 className="section_title">Testimonial</h2>
                <span className="section_subtitle">What my clients are saying</span>
                <div className="testimonial_container container swiper-container">
                    <div className="swiper-wrapper">
                     <div className="testimonial_content swiper-slide">
                        <div className="testimonial_data">
                            <div className="testimonial_header">
                                <img src="https://dev.dakidarts.com/wixa/assets/img/testimonial1.jpg" alt="" className="testimonial_img" />
                                <div>
                                    <h3 className="testimonial_name">Michel Parker</h3>
                                    <span className="testimonial_client">Client</span>
                                </div>
                            </div>
                            <div>
                                <i className="uil uil-star testimonial_icon-star"></i>  
                                <i className="uil uil-star testimonial_icon-star"></i>  
                                <i className="uil uil-star testimonial_icon-star"></i>  
                                <i className="uil uil-star testimonial_icon-star"></i>  
                                <i className="uil uil-star testimonial_icon-star"></i>  
                            </div>
                           
                        </div>
                        <p className="testimonial_description">I get a good impression, 
                            I carry out my project with all the possible quality 
                            and attention and support 24 hours a day.</p>
                     </div> 
                        <div className="testimonial_content swiper-slide">
                            <div className="testimonial_data">
                                <div className="testimonial_header">
                                    <img src="https://dev.dakidarts.com/wixa/assets/img/testimonial2.jpg" alt="" className="testimonial_img" />
                                    <div>
                                        <h3 className="testimonial_name">Eric Alfredo</h3>
                                        <span className="testimonial_client">Client</span>
                                    </div>
                                    
                                </div>
                                    <div>
                                        <i className="uil uil-star testimonial_icon-star"></i>  
                                        <i className="uil uil-star testimonial_icon-star"></i>  
                                        <i className="uil uil-star testimonial_icon-star"></i>  
                                        <i className="uil uil-star testimonial_icon-star"></i>  
                                        <i className="uil uil-star testimonial_icon-star"></i>  
                                    </div>
                                
                            </div>
                            <p className="testimonial_description">I get a good impression, 
                                I carry out my project with all the possible quality 
                                and attention and support 24 hours a day.</p>
                         </div>
                     <div className="testimonial_content swiper-slide">
                        <div className="testimonial_data">
                            <div className="testimonial_header">
                                <img src="https://dev.dakidarts.com/wixa/assets/img/testimonial3.jpg" alt="" className="testimonial_img" />
                                <div>
                                    <h3 className="testimonial_name">Orlando Smith</h3>
                                    <span className="testimonial_client">Client</span>
                                </div> 
                            </div>
                            <div>
                                <i className="uil uil-star testimonial_icon-star"></i>  
                                <i className="uil uil-star testimonial_icon-star"></i>  
                                <i className="uil uil-star testimonial_icon-star"></i>  
                                <i className="uil uil-star testimonial_icon-star"></i>  
                                <i className="uil uil-star testimonial_icon-star"></i>  
                            </div>
                            
                        </div>
                        <p className="testimonial_description">I get a good impression, 
                            I carry out my project with all the possible quality 
                            and attention and support 24 hours a day.</p>
                     </div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-testimonial"></div>
                </div>

        </section>
        <section className="contact section " id="contact">
            <h2 className="section_title">Contact Me</h2>
            <span className="section_subtitle">Get in touch</span>

            <div className="contact_container container grid">
                <div>
                    <div className="contact_info">
                        <i className="uil uil-phone contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Call Me</h3>
                            <span className="contact_subtitle">222-333-444</span>
                        </div>
                    </div>
                    <div className="contact_info">
                        <i className="uil uil-envelope contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Email</h3>
                            <span className="contact_subtitle">wixa@dakidarts</span>
                        </div>
                    </div>
                    <div className="contact_info">
                        <i className="uil uil-map-marker contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Location</h3>
                            <span className="contact_subtitle">Rue 123 Logpom, Douala, CM</span>
                        </div>
                    </div>
                </div>
                <form action="" className="contact_form grid">
                    <div className="contact_inputs grid">
                        <div className="contact_content">
                            <label for="" className="contact_label">
                                Name
                            </label>
                            <input type="text" className="contact_input" />
                        </div>
                        <div className="contact_content">
                            <label for="" className="contact_label">
                                Email
                            </label>
                            <input type="email" className="contact_input" />
                        </div>
                        
                    </div>
                    <div className="contact_content">
                        <label for="" className="contact_label">
                            Project
                        </label>
                        <input type="text" className="contact_input" />
                    </div>
                    <div className="contact_content">
                        <label for="" className="contact_label">
                            Message
                        </label>
                        <textarea name="" id="" cols="0" rows="7" className="contact_input"></textarea>
                    </div>
                    <div>
                    <a href="#" className="button button--flex">
                        Send Message
                        <i className="uil uil-message button_icon"></i>
                    </a>
                     </div>
                </form>
            </div>
        </section>
    </main>
    <footer className="footer ">
        <div className="footer_bg">
            <div className="footer_container container grid">
                <div>
                    <h1 className="footer_title">Wixa</h1>
                    <span className="footer_subtitle">Web Developer</span>
                </div>
                <ul className="footer_links">
                    <li>
                       <a href="#services" className="footer_link">Services</a> 
                    </li>
                    <li>
                       <a href="#portfolio" className="footer_link">Portfolio</a> 
                    </li>
                    <li>
                       <a href="#contact" className="footer_link">Contact</a> 
                    </li>
                </ul>
                <div className="footer_socials">
                    <a href="https://www.facebook.com/" target="_blank" className="footer_social">
                        <i className="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="footer_social">
                        <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://twitter.com/
                    " target="_blank" className="footer_social">
                        <i className="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div>
            <p className="footer_copy">&#169;Designed By Dakidarts. All Rights Reserved</p>
        </div>

    </footer>
    <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
    </>
   );
}
 
export default App;