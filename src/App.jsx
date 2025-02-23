
import About from './Components/About';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import { useEffect } from "react";
import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

function App() {
  useEffect(() => {
    logEvent(analytics, "portfolio_opened"); // Custom event to track visits
  }, []);

  return (
    <div className='bg-black font-sans '>
      
      <Home/>
     
     <About/>
     <Skills/>
     <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
