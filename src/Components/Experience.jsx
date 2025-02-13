import timeLineElements from "../assets/Timeline";
import work from "../assets/work.jpg";
import edu from "../assets/education.jpg";
import exp from "../assets/exp.jpg";
import { motion } from "framer-motion";
function Experience() {
  return (
    <div
      id="Experience"
      className="pt-7  bg-black  text-white text-base sm:text-lg "
    >
      <div className="justify-self-center">
        <h1 className="text-2xl align-middle  mb-5 flex justify-center">
          <img src={exp} className="size-7" />
          {`  Experience & Education`}
        </h1>
        {timeLineElements.map((exp, index) => {
          return (
            <>
              <div key={exp.id} className=" flex flex-initial  ">
                <div className="max-sm:hidden md:p-5 md:w-1/5">{exp.date}</div>
                {exp.type === "work" ? (
                  <div className="max-sm:hidden md: bg-orange-300 w-px h-51 border-.5 translate-x-10 translate-y-10 opacity-30"></div>
                ) : (
                  ""
                )}
                <img
                  src={exp.type === "work" ? work : edu}
                  className="max-sm:hidden md:w-12 h-8 m-5 "
                />

                {exp.type === "work" ? (
                  <motion.div
                    className="ml-8 mb-5 p-5 border-1 w-xs  md:w-2xl md:m-4  bg-dark md:p-3.5 md:text-left border-blue-950 md:border-4 rounded-sm "
                    initial={{ opacity: 0, x: 60 }} // Slide left or right alternately
                    whileInView={{ opacity: 1, x: 0 }} // Animate when in view
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="text-sm/7 font-bold md:text-lg">{`${
                      exp.company ? exp.company : ""
                    }`}</div>
                    <div className="text-xs md:text-sm">{`${
                      exp.role ? exp.role : ""
                    } ,  ${exp.location ? exp.location : ""}`}</div>
                    <div className="text-[.6rem] md:text-sm">
                      {exp.activity ? exp.activity : ""}
                    </div>
                    <div className="text-[.6rem] md:text-xs">{` ${
                      exp.skills ? exp.skills : ""
                    }`}</div>
                  </motion.div>
                ) : (
                  <div className="ml-5   p-5  w-xs  md:w-2xl   md:bg-dark md:p-5 text-left">
                    <div className="text-lg">{`${
                      exp.company ? exp.company : ""
                    }`}</div>
                    <div className="text-sm">{`${
                      exp.role ? exp.role : ""
                    }`}</div>
                    <div className="text-sm">{`${
                      exp.location ? exp.location : ""
                    }`}</div>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
