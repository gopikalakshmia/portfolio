// import mypic from '../assets/Picture1.jpg';
function Home() {
const handleResume=()=>{
  const pdfUrl = "../assets/Gopika_Resume.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "document.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
  
  return (
    <div className="bg-black text-white">
      <div className="flex">
        <div className="py-20 px-20 mb-20">
          <p className='font-mono text-2xl py-4'><strong>Hey 👋! This is</strong></p>
          <p className='font-mono text-5xl py-4'><strong>Gopikalakshmi Asok Kumar</strong></p>
          <p className='font-mono text-xl'><strong>Full-Stack Developer</strong></p>
          <div className="py-5">
         
            <button className='bg-black p-3 text-white border-1 border-solid rounded-md' onClick={handleResume}>Get Resume</button>
         
          </div>
         
        </div>
        <div className="py-20">
          {/* <img src={mypic} /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
