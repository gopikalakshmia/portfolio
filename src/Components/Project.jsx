import dev from '../assets/Images/dev.jpg';
import github from '../assets/Images/github.png';
import openWindow from '../assets/Images/openWindow.png';
import { Projects } from '../assets/JS/Project';
import { motion } from "framer-motion";
function Project() {
  return (
    <div id="Project" className=" font-sans bg-black text-white p-5  md:p-15 md:mb-5">
            <h1 className="text-2xl align-middle  mb-5 flex"><img src={dev} className='size-7'/>{`  Projects`}</h1>
      <div className='grid grid-col-1  md:grid-cols-2 lg:grid-cols-3 md:p-2 m-5 '>
      {Projects.map((item,index)=>{
        return(
          <motion.div key={index} className='bg-gray-900 m-0.5 mb-2  w-80 md:p-2.5 md:m-5 rounded-sm'
          initial={{ opacity: 0, y: 50 }} // Start hidden and below
            whileInView={{ opacity: 1, y: 0 }} // Animate when scrolled into view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger effect
            whileHover={{ scale: 1.05 }} // Hover effect
         >
        <img src={item.img} className=''/>
        <div className=''>
        <h1 className='text-sm font-bold'>{item.title}</h1>
        <p className='text-xs '>
          {item.skills}
        </p>
        </div>
        {item.visit &&<button  className='' onClick={()=>{window.open(item.visit)}}><img className='size-8 p-1' src={openWindow} title="Checkout Website"/></button>}
        <button  className='' onClick={()=>{window.open(item.githubLink)}}><img className='size-8' src={github} title="Checkout GitHub"/></button>
      </motion.div>

        )})}
      
      </div>
    </div>
  );
}

export default Project;
