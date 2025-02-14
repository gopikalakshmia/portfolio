import { useRef } from "react";
import mail from "../assets/mail.jpg";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    //EmailJs : https://dashboard.emailjs.com/admin
    emailjs
      .sendForm("service_dx4j09r", "template_h8iqlwi", form.current, {
        publicKey: "7Raq0nVnPQC5O_lqj",
      })
      .then(
        (result) => {
          console.log(result, "SUCCESS!");
          alert("Email Send Successfully !!!")
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="Contact" className="justify-self-center p-5 md:w-4xl ">
      <div className="text-white border-2 rounded-xs border-gray-900 p-3 ">
        <h1 className="text-2xl  text-justify mb-5  flex justify-center">
          <img src={mail} className="size-7" />
          {`  Get In Touch`}
        </h1>
        <p>{`I'm actively looking for any new opportunities, my inbox is always open. Whether you have a question or want to hire me or just want to say hello, I'll try my best to get back to you!`}</p>
        <div>
          <form ref={form} onSubmit={handleSubmit} className="md:ml-20">
            <div>
              <input
                type="text"
                placeholder={"FULL NAME"}
                name="user_name"
                required
                className="border-1 rounded-sm border-grey-900 hover:border-blue-800 md:w-xs h-9 m-3 p-2"
              />
              <input
                type="text"
                placeholder={"EMAIL"}
                required
                name="user_email"
                className="border-1 rounded-sm border-grey-900 hover:border-blue-800 focus:border-blue-800 md:w-xs h-9 m-3 p-2"
              />
            </div>
            <div>
              <textarea
                placeholder={"Message"}
                name="message"
                required
                defaultValue={"Hi Gopika,"}
                className="border-1 rounded-sm border-grey-900 hover:border-blue-800 focus:border-blue-800  md:w-2xl h-44 p-2 m-3"
              />
            </div>
            <div className="p-1 m-2">
            <button
              type="submit"
              className="bg-black p-2 text-white border-1 border-solid rounded-md  hover:border-blue-800 focus:border-blue-800 "
            >
              
              Send Message
            </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
