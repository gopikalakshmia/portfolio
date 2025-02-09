function Navbar() {
    return ( 
       <nav className="bg-black text-white w-full px-8">
        <div className="flex">
        <div className="flex flex-auto py-6">{`< G O P I K A />`}</div>
        <div className="flex flex-nowrap py-6">
            <a href="#About" className="mb-2 px-2">About</a>
            <a href="#Skills" className="mb-2 px-2"> Skills</a>
            <a href="#Experience" className="mb-2 px-2">Experience</a>
            <a href="#Project" className="mb-2 px-2">Project</a>
            <a href="#Contact" className="mb-2 px-2">Contact</a>
        </div>
        </div>

       </nav>
     );
}

export default Navbar;