import { timeLineElements } from "../assets/Timeline";
import  work from '../assets/work.jpg';
function Experience() {
    return ( <div className="bg-black text-white text-base sm:text-lg justify-center items-center ">
        <div className="justify-center items-center">
            {timeLineElements.map((exp)=>{
                return(<div key={exp.id} className="flex flex-initial align-middle">
                    <div className="m-5">{exp.date}</div>
                    <img src={work} className="w-15 py-5 px-2.5 m-8 "/>
                    <div className="container border-2 w-2xl m-5 border-amber-400">
                        <div>{exp.role}</div>
                        <div>{exp.activity}</div>
                    </div>
                </div>)
            })}
        </div>
    </div> );
}

export default Experience;