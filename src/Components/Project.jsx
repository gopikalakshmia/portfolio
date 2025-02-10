import dev from '../assets/dev.jpg';
import github from '../assets/github.png';
import { Projects } from '../assets/Project';
function Project() {
  return (
    <div id="Project" className=" font-sans bg-black text-white  p-15 mb-5 mt-28">
            <h1 className="text-2xl align-middle  mb-5 flex"><img src={dev} className='size-7'/>{`  Projects`}</h1>
      <div className='grid grid-cols-3 p-3'>
      {Projects.map((item,index)=>{
        return(
          <div key={index} className='bg-gray-900  w-xs p-2.5 rounded-sm'>
        <img src={item.img} className=''/>
        <div className=''>
        <h1 className='text-sm font-bold'>{item.title}</h1>
        <p className='text-xs '>
          {item.skills}
        </p>
        </div>
        
        <button  className='' onClick={()=>{window.open(item.githubLink)}}><img className='size-8' src={github} title="Checkout GitHub"/></button>
      </div>

        )})}
      
      </div>
    </div>
  );
}

export default Project;
