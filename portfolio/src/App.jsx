import './App.css';
import Porfile from "./assets/Photo.png";
import Project1 from "./assets/Project1.png";
import Project2 from "./assets/Project2.png";
import Project3 from "./assets/Project3.png";
import Project4 from "./assets/Project4.png";

function App() {
  return (
    <>
     <header>
      <div className= 'container m-auto px-4 py-6'>
        <div className= 'flex justify-between items-center'>
          <div>
            <h1 className= 'font-bold text-xl'>Joshua's Portfolio</h1>
          </div>
        </div>
        <ul className= 'flex gap-4'>
          <li>
            <a className='text-gray-400 hover:text-white cursor-pointer'> Projects</a>
          </li>
          <li>
            <a className='text-gray-400 hover:text-white cursor-pointer'> Technologies</a>
          </li>
          <li>
            <a className='text-gray-400 hover:text-white cursor-pointer'> About Me</a>
          </li>

        </ul>
      </div>
     </header>
     <main>
      {/*Intro Banner Section */}
      <section>
        <div className='container m-auto px-4 py-10 flex gap-6'></div>
        <div>
        <h1 className= 'font-bold text-4xl'>Hey There! I'm Joshua King, </h1>
        <h2 className= 'font-bold text-4xl mt-1 gradiant-text'>a junior Web Developer</h2>
        <p className= 'mt-4 text-gray-400'>Former contruction worker, seeking to apply competent development skills with focus on collaboration, communication and passion. </p>
        </div>
        <div className='relative'>
          <img src={Porfile} width={520} className='relative z-10'/>
        </div>
      </section>
      {/*Projects section */}
      <section>
        <div className='container m-auto px-4'></div>
          <h2 className='text-2xl font-semibold'>Projects</h2>
          <div className='flex gap-10 mt-11'>
            <div className='border border-gray-500 rounded-md p-5'>
              <img src={Project1} />
              <h3 className='text-2xl font-semibold mt-8'>Project Description</h3>
              <p className= 'text-gray-400 text-sm mt-4'>Project Name</p>
              <div className='flex justify-evenly mt-12'>
                <button className='px-4 py-2 text-lg bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:from-orange-700 hover:to-yellow-700'>Live preview</button>
                <button className='px-4 py-2 border rounded-full hover:border-orange-500 hover:text-yellow-500'>Checkout github</button>
              </div>
            </div>
            <div className='border border-gray-500 rounded-md p-5'>
              <img src={Project1} />
              <h3 className='text-2xl font-semibold mt-8'>Project Description</h3>
              <p className= 'text-gray-400 text-sm mt-4'>Project Name</p>
              <div className='flex justify-evenly mt-12'>
                <button className='px-4 py-2 text-lg bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:from-orange-700 hover:to-yellow-700'>Live preview</button>
                <button className='px-4 py-2 border rounded-full hover:border-orange-500 hover:text-yellow-500'>Checkout github</button>
              </div>
            </div>
            <div className='border border-gray-500 rounded-md p-5'>
              <img src={Project1} />
              <h3 className='text-2xl font-semibold mt-8'>Project Description</h3>
              <p className= 'text-gray-400 text-sm mt-4'>Project Name</p>
              <div className='flex justify-evenly mt-12'>
                <button className='px-4 py-2 text-lg bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:from-orange-700 hover:to-yellow-700'>Live preview</button>
                <button className='px-4 py-2 border rounded-full hover:border-orange-500 hover:text-yellow-500'>Checkout github</button>
              </div>
            </div>
            <div className='border border-gray-500 rounded-md p-5'>
              <img src={Project1} />
              <h3 className='text-2xl font-semibold mt-8'>Project Description</h3>
              <p className= 'text-gray-400 text-sm mt-4'>Project Name</p>
              <div className='flex justify-evenly mt-12'>
                <button className='px-4 py-2 text-lg bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:from-orange-700 hover:to-yellow-700'>Live preview</button>
                <button className='px-4 py-2 border rounded-full hover:border-orange-500 hover:text-yellow-500'>Checkout github</button>
              </div>
            </div>
        </div>
      </section>
     </main>
    </>
  )
}

export default App
