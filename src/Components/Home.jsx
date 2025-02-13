import resume from "../assets/Gopika_Resume.pdf";
import { connect } from "../assets/Connect.js";
  import { motion, spring } from "framer-motion";
  import Navbar from "./Navbar.jsx";
  import bgvideo from "../assets/bg6.mp4";

 


function Home() {
  return (
    <div id="Home" className="relative w-full h-screen text-white">
     <video
        src={bgvideo}
        autoPlay
        loop
        muted
        className=" absolute top-0 left-0 w-full h-full object-cover"
      ></video>
       {/* Dark Overlay (Optional) */}
       <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <Navbar/>
      <div
        className="relative text-center p-15  md:flex lg:text-left items-left 
        justify-left md:h-screen overflow-hidden " 
      >
        <div className="flex">
          <div className="p-7 pt-40 md:py-20 md:px-20 md:mb-20">
            <p className="font-mono text-md lg:text-2xl  md:py-4">
              <strong>Hey 👋! This is</strong>
            </p>
            <p className="font-mono text-2xl lg:text-6xl md:text-6xl md:py-4 ">
              <strong>Gopikalakshmi </strong>
            </p>
            <p className="font-mono text-sm md:text-xl">
              <strong>Full-Stack Developer</strong>
            </p>
            <div className="justify-center lg:justify-start md:p-2 flex flex-row ">
              {connect.map((item, index) => (
                <div key={index} className=" md:p-2">
                  <button
                    className="m-1"
                    onClick={() => {
                      window.open(item.link);
                    }}
                  >
                    <img
                      className="size-4 md:size-8"
                      src={item.img}
                      title={`Checkout my ${item.title}`}
                    />
                  </button>
                </div>
              ))}
              {/* <img src={mypic}  className='w-xs rounded-full hover:border-r-20 hover:border-b-20 border-amber-500'/> */}
            </div>
            <div className="p-0.5 ">
              <a href={resume} download="Gopika_Resume" target="_blank">
                <motion.button className=" p-1 font-light md:p-3 text-white border-1 border-solid md:font-bold rounded-md" 
                whileHover={{ scale:1.1 }}
                transition={{ type:spring,stiffness:500 }}> 
                  Get Resume
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
