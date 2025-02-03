import mypic from '../assets/Picture1.jpg';
function Home() {

    const handleResume=()=>{
        window.location.href="../assets/Gopika_CV_2024_V1.5.pdf";
    }
  return (
    <div className="bg-black text-white">
      <div className="flex">
        <div className="py-20 px-20 mb-20">
          <p className='font-mono text-2xl py-4'><strong>Hey 👋! This is</strong></p>
          <p className='font-mono text-5xl py-4'><strong>Gopikalakshmi Asok Kumar</strong></p>
          <p className='font-mono text-xl'><strong>Full-Stack Developer</strong></p>
          <div className="py-5">
         
            <a className='bg-black p-3 text-white border-1 border-solid rounded-md' href='../assets/Gopika_CV_2024_V1.5.pdf' download={'Gopika_Resume.pdf'}>Get Resume</a>
         
          </div>
         
        </div>
        <div className="py-20">
          <img src={mypic} />
        </div>
      </div>
    </div>
  );
}

export default Home;
