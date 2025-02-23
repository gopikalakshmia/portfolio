
import About from './Components/About';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
 

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
