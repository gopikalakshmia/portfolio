import { easeIn, easeInOut, easeOut, motion, MotionConfig, spring } from "framer-motion";
function Navbar() {
    return ( 
        
       <nav className=" text-white w-full px-8 ">
        <div className="flex relative items-left 
        justify-left  ">
        <div className="flex flex-auto  font-extrabold py-6"
        >{`< G O P I K A />`}</div>
        <MotionConfig  whileHover={{ scale:1.3 }}transition={{ type:"tween",stiffness:500 }}>
        <div className="flex flex-nowrap py-6  text-lg font-extrabold">
            <motion.a href="#About" className="mb-2 px-2 mr-5"
            >About</motion.a>
            <motion.a href="#Skills" className="mb-2 px-2 mr-4"> Skills</motion.a>
            <motion.a href="#Experience" className="mb-2 px-2 mr-4">Experience</motion.a>
            <motion.a href="#Project" className="mb-2 px-2 mr-4">Project</motion.a>
            <motion.a href="#Contact" className="mb-2 px-2 mr-4">Contact</motion.a>
        </div>
        </MotionConfig>
        </div>

       </nav>
     );
}

export default Navbar;