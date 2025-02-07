import web from "../assets/web.jpg";
import react from "../assets/react.jpg"

function skills() {
    return ( <div className="bg-black text-white">
         <h1 className="text-2xl  text-justify mb-5 flex"><img src="" className='size-7'/>{`  Skills`}</h1>
         <div className="flex">
           
         <div className="border-1 border-white  w-xs p-2 m-2.5 flex ">
         <div><img src={web} className="size-8 pt-2"/></div>
         <div className="p-1">
         <h1 className="text-sm">Web Design & Development</h1>
         <p className="text-xs">(HTML, CSS, JavaScript, TypeScript)</p>
         </div>
            
         </div>
         <div className="border-1 border-white  w-xs p-2 m-2.5 flex">
            <div> <div><img src={react} className="size-8 pt-2"/></div></div>
            <div>
            <h1 className="text-sm">Frontend Javascript Frameworks</h1>
            <p className="text-xs"> (Angular, React)</p>
            </div>
         </div>
         </div>
         
    </div> );
}

export default skills;