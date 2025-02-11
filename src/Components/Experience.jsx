import  timeLineElements  from "../assets/Timeline";
import  work from '../assets/work.jpg';
import  edu from '../assets/education.jpg';
import  exp from '../assets/exp.jpg';

function Experience() {
    return ( <div id="Experience" className="pt-7  bg-black  text-white text-base sm:text-lg ">
        
        <div className="justify-self-center">
         <h1 className="text-2xl align-middle  mb-5 flex justify-center"><img src={exp} className='size-7'/>{`  Experience & Education`}</h1>
            {timeLineElements.map((exp)=>{
                return(<div key={exp.id} className=" flex flex-initial  ">
                    <div className="p-5 w-1/5">{exp.date}</div>
                    {exp.type==='work'? <div className="bg-orange-300 w-px h-51 border-.5 translate-x-10 translate-y-10 opacity-30"></div>:''}
                    <img src={exp.type==='work'?work:edu} className="w-12 h-8 m-5 "/>
                  <div></div>
                    {exp.type==='work'?<div className=" w-2xl m-4  bg-dark p-3.5 text-left border-blue-950 border-4 rounded-sm ">
                        <div className="text-lg">{`${exp.company?exp.company:''}`}</div>
                        <div className="text-sm">{`${exp.role?exp.role:''} ,  ${exp.location?exp.location:''}`}</div>
                        <div className="text-sm">{exp.activity?exp.activity:''}</div>
                        <div className="text-xs">{` ${exp.skills?exp.skills:''}`}</div>
                    </div>:
                    <div className=" w-2xl   bg-dark p-5 text-left">
                    <div className="text-lg">{`${exp.company?exp.company:''}`}</div>
                    <div className="text-sm">{`${exp.location?exp.location:''}`}</div>
                   
                </div>}
                </div>)
            })}
        </div>
    </div> );
}

export default Experience;