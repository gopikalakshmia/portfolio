import resume from "../assets/Gopika_Resume.pdf";
import { connect } from "../assets/Connect.js";
  import { motion, spring } from "framer-motion";
  import Navbar from "./Navbar.jsx";
  import bgvideo from "../assets/bg6.mp4";


function Home() {
  return (
    <div id="Home" className=" text-white ">
     <video
        src={bgvideo}
        autoPlay
        loop
        muted
        className=" absolute min-h-screen max-w-screen"
      ></video>
      <Navbar/>
      <div
        className=" relative flex items-left 
        justify-left h-screen overflow-hidden " 
      >
        <div className="flex">
          <div className="py-20 px-20 mb-20">
            <p className="font-mono text-2xl py-4">
              <strong>Hey 👋! This is</strong>
            </p>
            <p className="font-mono text-6xl py-4">
              <strong>Gopikalakshmi </strong>
            </p>
            <p className="font-mono text-xl">
              <strong>Full-Stack Developer</strong>
            </p>
            <div className="p-2 flex flex-row">
              {connect.map((item, index) => (
                <div key={index} className="p-2">
                  <button
                    className=""
                    onClick={() => {
                      window.open(item.link);
                    }}
                  >
                    <img
                      className="size-8"
                      src={item.img}
                      title={`Checkout my ${item.title}`}
                    />
                  </button>
                </div>
              ))}
              {/* <img src={mypic}  className='w-xs rounded-full hover:border-r-20 hover:border-b-20 border-amber-500'/> */}
            </div>
            <div className="p-1">
              <a href={resume} download="Gopika_Resume" target="_blank">
                <motion.button className=" p-3 text-white border-1 border-solid font-bold rounded-md" 
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
