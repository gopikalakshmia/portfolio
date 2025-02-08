
import About from './Components/About';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Project from './Components/Project';

function App() {
 

  return (
    <div className='bg-black font-sans'>
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Experience/>
    <Project/>
    </div>
  )
}

export default App
