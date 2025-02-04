function About() {
    return ( <div className=" bg-black text-white text-left flex">
        <div className=" p-10 m-1.5 pr-5 w-1/2 text-center" >
        <h1 className="text-center"> About Me</h1>
        <p>Hi,I’m a Fullstack developer with five years of experience in building applications that solve real-world problems. 
            I worked at Cognizant for five years as an ASP.NET developer for a well-known insurance client. During my first four years at Cognizant,
             I focused on developing applications with technologies like SQL, ASP.NET, SSRS, and TypeScript. 
             During that time, I was also part of an automation team generating automated reports. In my last year,
              I transitioned to an application support engineer role, supporting multiple C# applications
         </p>
         <br/>
        <p>After that, I took a four-year career break to focus on my family. During this time, I earned certifications in UiPath and MEAN Stack development.
             I also worked as a freelance React developer, creating user-friendly applications.</p>
             <br/>
             <p>Now, I’m actively upskilling in React to stay updated with the latest trends and enhance my expertise. 
                I’m excited to bring my experience, adaptability, and problem-solving mindset to new opportunities in software development. </p>
             <br/>
             <p>Let’s connect and build something great together!</p>
        </div>
        <div className=" p-4 w-1/2  pl-6">
            <img src={'https://cdni.iconscout.com/illustration/premium/thumb/female-web-developer-writing-code-lines-illustration-download-in-svg-png-gif-file-formats--website-development-programming-business-activities-pack-illustrations-5501007.png'}/>
        </div>
       
    </div> );
}

export default About;