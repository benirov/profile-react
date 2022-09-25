import React,{useEffect} from 'react'
import ReactGA from 'react-ga';
import  './App.css';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Qualifications from './pages/Qualifications';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';

//components

import Header from './components/Header';
import Footer from './components/Footer';

import info from './data/info-en.json';

const App = () => {

  useEffect(() => {
    ReactGA.initialize('G-YHKL73YG0Y');

    ReactGA.pageview('/');
  }, []);

  return ( 
    <>
      <main className="main">
          <Header/>
          <Home
            basic={info.basic}
          />
          <About
            about={info.about}
          />
          <Skills
            skills={info.skills}
          />
          <Qualifications
            educations={info.qualification.Education}
            works={info.qualification.work}
          />
          <Portfolio
              portfolios={info.portfolio}
            />
          <ContactMe contact={info.basic}/>
          <Footer
            basic={info.basic}
          />
      </main>
      <a href="#" className="scrollup" id="scroll-up">
          <i className="uil uil-arrow-up scrollup_icon"></i>
      </a>
    </>
   );
}
 
export default App;