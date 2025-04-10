import  aboutme from '../assets/aboutme.png';
import { motion } from 'framer-motion';

function About() {
    
    return ( <motion.section  id="About" className=" font-sans  text-white text-center  bg-black  md:p-18 md:mt-4 md:text-left flex "
        initial={{ opacity: 0.3, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }} // Animates when in view
        transition={{ duration: .8 }}
    >
        <div className="text-xs  text-justify p-5 md:text-base md:w-3/4 lg:text-md" >
        <h1 className=" text-2xl md:text-justify  pb-2 md:mb-5 flex"><img src={aboutme} className='size-7'/>{`  About Me`}</h1>
        <p>With five years of experience as an ASP.NET developer at Cognizant,  I specialize in ASP.NET MVC, SSRS, SQL, and TypeScript.
         </p>
         <br/>
        <p>After taking a career break to focus on my family, I stayed connected to the tech world by earning certifications in UiPath and 
            MEAN Stack development. I have worked as a freelance React developer, creating user-friendly applications that enhance user experiences.
        </p>
             <br/>
             <p>Currently upskilling in React through various courses to stay ahead in the ever-evolving tech landscape. 
                I love learning new technologies and applying them to build efficient, scalable solutions. </p>
             <br/>
             <p>I am also actively volunteering as a web developer with Catchafire and VolunteerMatch, contributing to nonprofit projects and using my skills to make a positive impact in the community. </p>
             <br/>
             <p>I am back with a fresh set of eyes, excited for new opportunities and challenges—let’s connect 😀 </p>
        </div>
        <motion.div className="max-md:hidden md:visible w-2/4 "
           initial={{ opacity:0 }}
           whileInView={{ opacity:1 }}
           transition={{ duration:2 }}>
            <img src={'https://cdni.iconscout.com/illustration/premium/thumb/female-web-developer-writing-code-lines-illustration-download-in-svg-png-gif-file-formats--website-development-programming-business-activities-pack-illustrations-5501007.png'}/>
        </motion.div>
       
    </motion.section> );
}

export default About;