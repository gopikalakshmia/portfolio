import bgvideo from "./assets/bg6.mp4";
import About from './Components/About';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
 

  return (
    <div className='bg-black font-sans '>
      <div className="">
      <video
        src={bgvideo}
        autoPlay
        loop
        muted
        className=" absolute min-h-screen max-w-screen"
      ></video>
      <Navbar/>
      <Home/>
      </div>
    
     <About/>
     <Skills/>
     <Experience/>
    <Project/>
    <Contact/>
    </div>
  )
}

export default App
