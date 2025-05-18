import  aboutme from '../assets/Images/aboutme.png';
import { motion } from 'framer-motion';

function About() {
    
    return ( <motion.section  id="About" className=" font-sans  text-white text-center  bg-black  md:p-18 md:mt-4 md:text-left flex "
        initial={{ opacity: 0.3, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }} // Animates when in view
        transition={{ duration: .8 }}
    >
        <div className="text-xs  text-justify p-5 md:text-base md:w-3/4 lg:text-md" >
        <h1 className=" text-2xl md:text-justify  pb-2 md:mb-5 flex"><img src={aboutme} className='size-7'/>{`  About Me`}</h1>
        <p>I'm a passionate Software Developer with over five years of professional experience, specializing in ASP.NET MVC, SSRS, SQL, and TypeScript. I began my journey at Cognizant, where I contributed to impactful enterprise solutions, and later expanded my skills through freelancing and continuous learning.
         </p>
         <br/>
        <p>As life led me across countries and into new roles, I embraced every transition as a chance to grow—personally and professionally. I expanded my skill set with certifications in UiPath and MEAN Stack development, and explored modern frameworks like React and Next.js through freelance projects and advanced coursework.
        </p>
             <br/>
             <p>My enthusiasm for technology has only deepened over the years. I’m currently volunteering as a web developer on platforms like Catchafire and VolunteerMatch, contributing to nonprofit projects that make a real difference. These experiences have strengthened my communication, adaptability, and problem-solving skills, while keeping me hands-on with the latest tools and best practices. </p>
             <br/>
             <p>Alongside actively upskilling in React, I’m also refreshing and deepening my expertise in .NET technologies, including .NET Core and API development, to stay aligned with modern backend development standards. I love applying what I learn to build clean, efficient, and impactful web applications.</p>
             <br/>
             <p>I’m excited to connect with like-minded professionals and explore opportunities to collaborate, learn, and make a meaningful impact together. 😊</p>
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