
import skillsIcon from '../assets/Images/skills.jpg'
import { skill } from "../assets/JS/skills";
import { motion } from 'framer-motion';
function skills() {
  return (
    <section  id="Skills" className=" font-sans bg-black p-5 text-white  md:p-18 mb-5 h-5xl">
       <h1 className="text-2xl  text-justify mb-5 flex"><img src={skillsIcon} className='size-7'/>{`  Skills`}</h1>
      <div className="grid grid-col-1 md:grid-col-4 lg:grid-cols-3">
        {skill.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="border-1 border-gray-800 rounded-xs  m-1 p-1 lg:w-75 md:p-2 md:m-2.5 flex  hover:border-gray-500   "
              initial={{ opacity: 0, y: 50 }} // Start hidden and below
            whileInView={{ opacity: 1, y: 0 }} // Animate when scrolled into view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay each box animation
            >
              <div>
                {/* <img src={item.img} className="size-8 pt-2" /> */}
              </div>
              <div className="p-1 pl-2">
                <h1 className="text-sm">{item.title}</h1>
                <p className="text-xs">{item.skills}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default skills;
