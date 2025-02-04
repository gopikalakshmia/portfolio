import  timeLineElements  from "../assets/Timeline";
import  work from '../assets/work.jpg';
function Experience() {
    return ( <div className="bg-black text-white text-base sm:text-lg ">
        
        <div className="align-middle justify-self-center">
        <h1 className="align-middle"> Experience</h1>
            {timeLineElements.map((exp)=>{
                return(<div key={exp.id} className=" flex flex-initial ">
                    <div className="p-5 w-1/5">{exp.date}</div>
                    <div className="bg-orange-300 w-px h-51 border-.5 translate-x-10 translate-y-10 opacity-30"></div>
                    <img src={work} className="w-12 h-8 m-5 "/>
                  <div></div>
                    <div className=" w-2xl m-5  bg-dark p-5 text-left">
                        <div>{`${exp.company}`}</div>
                        <div>{`${exp.role} , ${exp.location}`}</div>
                        <div>{exp.activity}</div>
                        <div>{`Key Focus : ${exp.skills}`}</div>
                    </div>
                </div>)
            })}
        </div>
    </div> );
}

export default Experience;