import  aboutme from '../assets/aboutme.png';
import bgvideo from "../assets/bg5.mp4";
function About() {
    return ( <div  id="About" className="font-sans  text-white text-left flex">
        <div className="p-15 p w-3/4" >
        <h1 className="text-2xl  text-justify mb-5 flex"><img src={aboutme} className='size-7'/>{`  About Me`}</h1>
        <p>Hi, with five years of experience as an ASP.NET developer at Cognizant,  I specialize in ASP.NET MVC, SSRS, SQL, and TypeScript.
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
        <div className="w-2/4 ">
            <img src={'https://cdni.iconscout.com/illustration/premium/thumb/female-web-developer-writing-code-lines-illustration-download-in-svg-png-gif-file-formats--website-development-programming-business-activities-pack-illustrations-5501007.png'}/>
        </div>
       
    </div> );
}

export default About;