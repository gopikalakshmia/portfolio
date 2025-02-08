import dev from '../assets/dev.jpg'
function Project() {
  return (
    <div className=" font-sans bg-black text-white  p-5 mb-5 mt-28">
            <h1 className="text-2xl align-middle  mb-5 flex"><img src={dev} className='size-7'/>{`  Projects`}</h1>
      <div className='grid grid-cols-3 p-3'>
      <div className=''>
        <h1>Portfoli</h1>
        <p>Made portfoli with React and Tailwind css</p>
      </div>
      <div>
        <h1>ECommerce App</h1>
        <p>
          MCreate a website for online purchase of groceries. Angaadi/GroKart is
          a Simple basic Grocery Store. Includes Home Page,User Login/Logout,New
          user Registration,Cart,Wishlist.. Angaadi is made up with Angular and
          Bootstrap.
        </p>
      </div>
      </div>
    </div>
  );
}

export default Project;
