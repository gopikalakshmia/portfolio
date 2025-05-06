import timeLineElements from "../assets/JS/Timeline";
import work from "../assets/Images/blueball.png";
import edu from "../assets/Images/education.jpg";
import exp from "../assets/Images/exp.jpg";
import { motion } from "framer-motion";
function Experience() {
  return (
    <section
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
                 <motion.div
                 initial={{ scaleY: 0 }}
                 whileInView={{ scaleY: 1 }}
                 transition={{ duration: 2, ease: "easeInOut" }}
                 viewport={{ once: true, amount: 0.4 }} // adjust `amount` as needed
                 className="origin-top w-px h-20 bg-gradient-to-b from-blue-800 to-blue-950 opacity-80 translate-x-11 translate-y-18 mx-auto md:block hidden"
               />
               
                ) : (
                  ""
                )}
                <img
                  src={exp.type === "work" ? work : edu}
                  className=" max-sm:hidden md:w-12 w-10 h-10 m-5 "
                />

                {exp.type === "work" ? (
                  <div
                    className="ml-8 mb-5 p-5 border-1 w-xs  md:w-2xl md:m-4  bg-dark md:p-3.5 md:text-left border-blue-950 md:border-4 rounded-sm "
                  >
                    <div className="text-sm/7 font-bold md:text-lg">{`${
                      exp.company ? exp.company : ""
                    }`}</div>
                    <div className="text-xs md:text-sm">{`${
                      exp.role ? exp.role : ""
                    } ,  ${exp.location ? exp.location : ""}`}</div>
                    <div className="text-[.6rem] md:text-sm">
                      {exp.activity
                        ? exp.activity.map((act, index) => (
                            <li key={index}>{act}</li>
                          ))
                        : ""}
                    </div>
                    <div className="text-[.6rem] md:text-xs pt-2 text-amber-100">{`Focus : ${
                      exp.skills ? exp.skills : ""
                    }`}</div>
                  </div>
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
    </section>
  );
}

export default Experience;
