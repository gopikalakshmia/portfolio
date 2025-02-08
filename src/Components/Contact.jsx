import mail from '../assets/mail.jpg';
function Contact() {
    return (  <div className="align-middle p-5 w-4xl ml-60">
        <div className="text-white bg-gray-950 border-gray-900 ">
                  <h1 className="text-2xl  text-justify mb-5  flex justify-center"><img src={mail} className='size-7'/>{`  Get In Touch`}</h1>
            <p>{`I'm actively looking for any new opportunities, my inbox is always open. Whether you have a question or want to hire me or just want to say hello, I'll try my best to get back to you!`}</p>
            <div>
                <div className="ml-20">
                   
                    <div>
                    <input type="text" placeholder={"FULL NAME"} className="border-1 rounded-sm border-grey-900 hover:border-blue-800 w-xs h-9 m-3 p-2"/>
                    <input type="text" placeholder={"EMAIL"} className="border-1 rounded-sm border-grey-900 hover:border-blue-800 focus:border-blue-800 w-xs h-9 m-2 p-2"/>
                    </div>
                    <div>
                        <textarea  placeholder={"Message"} defaultValue={"Hi Gopika,"}  className="border-1 rounded-sm border-grey-900 hover:border-blue-800 focus:border-blue-800 w-2xl h-44 p-2 m-2"/>
                    </div>
                    <button className='bg-black p-3 text-white border-1 border-solid rounded-md '> Send Message</button>
                   
                </div>
            </div>
        </div>
    </div>);
}

export default Contact;