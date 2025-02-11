
import skillsIcon from '../assets/skills.jpg'

import { skill } from "../assets/skills";


function skills() {
  return (
    <section  id="Skills" className=" font-sans bg-black p-5 text-white  md:p-18 mb-5 h-5xl">
       <h1 className="text-2xl  text-justify mb-5 flex"><img src={skillsIcon} className='size-7'/>{`  Skills`}</h1>
      <div className="grid grid-col-1 md:grid-col-3 lg:grid-cols-4">
        {skill.map((item, index) => {
          return (
            <div
              key={index}
              className="border-1 border-gray-800 rounded-sm  m-1 p-1 md:w-xs md:p-2 md:m-2.5 flex  hover:border-gray-500   "
            >
              <div>
                {/* <img src={item.img} className="size-8 pt-2" /> */}
              </div>
              <div className="p-1 pl-2">
                <h1 className="text-sm">{item.title}</h1>
                <p className="text-xs">{item.skills}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default skills;
