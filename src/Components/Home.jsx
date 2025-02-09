import mypic from "../assets/picture1.jpg";
import bgvideo from "../assets/bg5.mp4";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/insta.jpg";
import resume from '../assets/Gopika_Resume.pdf';
function Home() {
 
  return (
    <div id="Home" className=" text-white">
      <video
        src={bgvideo}
        autoPlay
        loop
        muted
        className="absolute min-w-full h-full "
      ></video>
      <div
        className="relative flex items-center 
        justify-center h-screen overflow-hidden "
      >
        <div className="flex">
          <div className="py-20 px-20 mb-20">
            <p className="font-mono text-2xl py-4">
              <strong>Hey 👋! This is</strong>
            </p>
            <p className="font-mono text-5xl py-4">
              <strong>Gopikalakshmi Asok Kumar</strong>
            </p>
            <p className="font-mono text-xl">
              <strong>Full-Stack Developer</strong>
            </p>

            <div className="py-5">
              <a href={resume} download="Gopika_Resume" target='_blank'>
              <button
                className="bg-black p-3 text-white border-1 border-solid rounded-md"
              >
                Get Resume
              </button>
              </a>
            </div>
          </div>
          <div className="py-20">
          <img src={github} className='size-7'/>
          <img src={linkedin} className='size-7'/>
          <img src={insta} className='size-7'/>
            {/* <img src={mypic}  className='w-xs rounded-full hover:border-r-20 hover:border-b-20 border-amber-500'/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
