import React from 'react'

const Footer = ({basic}) => {
    return ( 
        <footer className="footer ">
        <div className="footer_bg">
            <div className="footer_container container grid">
                <div>
                    <h1 className="footer_title">{basic.name}</h1>
                    <span className="footer_subtitle">{basic.rol}</span>
                </div>
                <ul className="footer_links">
                    <li>
                       <a href="#services" className="footer_link">Services</a> 
                    </li>
                    <li>
                       <a href="#portfolio" className="footer_link">Portfolio</a> 
                    </li>
                </ul>
                <div className="footer_socials">
                        <a href={basic.github} target="_blank" className="footer_social">
                            <i className="uil uil-github-alt"></i>
                        </a>
                        <a href={basic.linkedin} target="_blank" className="footer_social">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                </div>
            </div>
        </div>

    </footer>
     );
}
 
export default Footer;