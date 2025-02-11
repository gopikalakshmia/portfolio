import  aboutme from '../assets/aboutme.png';
import { motion } from 'framer-motion';

function About() {
    return ( <div  id="About" className="font-sans mt-4  text-white text-left flex bg-gradient-to-r from-black-900  to-blue-400 h-screen p-18"
 
    >
        <div className="p-15 p w-3/4" >
        <h1 className="text-2xl  text-justify mb-5 flex"><img src={aboutme} className='size-7'/>{`  About Me`}</h1>
        <p>Hi  , with five years of experience as an ASP.NET developer at Cognizant,  I specialize in ASP.NET MVC, SSRS, SQL, and TypeScript.
         </p>
         <br/>
        <p>After taking a career break to focus on my family, I stayed connected to the tech world by earning certifications in UiPath and 
            MEAN Stack development. I also worked as a freelance React developer, creating user-friendly applications that enhance user experiences.
        </p>
             <br/>
             <p>Now, I’m actively upskilling in React through various courses to stay ahead in the ever-evolving tech landscape. 
                I love learning new technologies and applying them to build efficient, scalable solutions. </p>
             <br/>
             <p>Excited for new opportunities and challenges—let’s connect 😀 </p><p>Back with a fresh set of eyes 👁</p>
        </div>
        <motion.div className="w-2/4 "
           initial={{ opacity:0 }}
           whileInView={{ opacity:1 }}
           transition={{ duration:2 }}>
            <img src={'https://cdni.iconscout.com/illustration/premium/thumb/female-web-developer-writing-code-lines-illustration-download-in-svg-png-gif-file-formats--website-development-programming-business-activities-pack-illustrations-5501007.png'}/>
        </motion.div>
       
    </div> );
}

export default About;