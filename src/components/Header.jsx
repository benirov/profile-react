import React from 'react'

const Header = () => {

    const changeTheme = () => {
        
        if(document.body.classList.contains('dark-theme')){
            document.body.classList.remove('dark-theme');
            document.querySelector(".change-theme").classList.remove('uil-sun');
            document.querySelector(".change-theme").classList.add('uil-moon ');
        }else{
            document.body.classList.add('dark-theme');
            document.querySelector(".change-theme").classList.add('uil-sun');
            document.querySelector(".change-theme").classList.remove('uil-moon ');
        }
    }
    return ( 
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav_logo">Beniro</a>
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
                    <i className="uil uil-moon change-theme" id="theme-button" onClick={() =>  { changeTheme()}}></i>
                    <div className="nav_toggle" id="nav-toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>

        </header>
     );
}
 
export default Header;