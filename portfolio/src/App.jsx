import "./App.css";
import Porfile from "./assets/Photo.png";
import Project1 from "./assets/Project1.png";
import Project2 from "./assets/Project2.png";
import Project3 from "./assets/Project3.png";
import Project4 from "./assets/Project4.png";
import facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";


function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-xl">Joshua's Portfolio</h1>
            </div>
          </div>
          <ul className="flex gap-4">
            <li>
              <a className="text-gray-400 hover:text-white cursor-pointer">
                {" "}
                Projects
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white cursor-pointer">
                {" "}
                Experience
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white cursor-pointer">
                {" "}
                About Me
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white cursor-pointer">
                {" "}
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        {/*Intro Banner Section */}
        <section>
        <div className="container m-auto px-4 py-30 flex gap-6">
          <div>
            <h2 className="font-bold text-4xl">Hey There! I'm Joshua King, </h2>
            <h2 className="font-bold text-4xl mt-1 gradiant-text">A Junior Web Developer</h2>
            <p className="mt-4 text-gray-400">Former contruction worker, seeking to apply competent development skills with focus on collaboration, communication and passion.</p>
          </div>
          <div className="relative">
            <img src={Porfile} width={420} className="relative z-10" />
          </div>
        </div>
        </section>
        {/*Projects section */}
        <section>
          <div className="container m-auto px-4 py-12"></div>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="flex gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5">
               <img src={Project1} className="w-full h-auto"/>
                <h3 className="text-2xl font-semibold mt-8">
                  The AMAZON NAVIGATOR is designed for customers to view item reviews and pricing.
                </h3>
              <p className="text-gray-400 text-sm mt-4">Amazon Navigator</p>
              <div className="flex justify-evenly mt-12">
                <button className="px-6 py-3 text-lg bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:from-orange-700 hover:to-yellow-700">
                  Live preview
                </button>
                <button className="px-6 py-3 border rounded-full hover:border-orange-500 hover:text-yellow-500">
                  Checkout github
                </button>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5">
              <img src={Project2} className="w-full h-auto"/>
              <h3 className="text-2xl font-semibold mt-8">
              Plant Parenthood is the application to help the those who are new to the hobby or just maybe even a weekend plantsitter or award winning growers. Nothing to make the novice grower anxious, just the basic facts to the plant.
              </h3>
              <p className="text-gray-400 text-sm mt-4">🌱 Plant Parenthood: The free application to support the needs of your growing plants from any sprouts of life.</p>
              <div className="flex justify-evenly mt-12">
                <button className="px-6 py-3 text-lg bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:from-orange-700 hover:to-yellow-700">
                  Live preview
                </button>
                <button className="px-6 py-3 border rounded-full hover:border-orange-500 hover:text-yellow-500">
                  Checkout github
                </button>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5">
              <img src={Project1} />
              <h3 className="text-2xl font-semibold mt-8">
                Project Description
              </h3>
              <p className="text-gray-400 text-sm mt-4">Project Name</p>
              <div className="flex justify-evenly mt-12">
                <button className="px-6 py-3 text-lg bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:from-orange-700 hover:to-yellow-700">
                  Live preview
                </button>
                <button className="px-6 py-3 border rounded-full hover:border-orange-500 hover:text-yellow-500">
                  Checkout github
                </button>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5">
              <img src={Project1} />
              <h3 className="text-2xl font-semibold mt-8">
                Project Description
              </h3>
              <p className="text-gray-400 text-sm mt-4">Project Name</p>
              <div className="flex justify-evenly mt-12">
                <button className="px-6 py-3 text-lg bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:from-orange-700 hover:to-yellow-700">
                  Live preview
                </button>
                <button className="px-6 py-3 border rounded-full hover:border-orange-500 hover:text-yellow-500">
                  Checkout github
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies */}
        <section className="py-10">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font semi-bold">Experience</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Sass & Bootstrap</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, TypeScript, JQuery
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">UI design in Figma</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Angular</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React Native</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section*/}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex justify-between mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Mongo DB
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Team Work
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Engagement
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  API
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Node
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font semi-bold">About Me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 before:w-1 before:bg-white">
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute -left-0 text-lg font-semibold">2023</h3>
                <p>
                  Prior to enrolling into the UTA Coding Bootcamp, I've worked on multiple warehouse sites and public facilities primarily specializing in customer service. 
                </p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute -left-0 text-lg font-semibold">2024</h3>
                <p>
                  I graduated UTA (University of Texas at Austin) and have
                  experience in web development for approximately 1 year. I am
                  passionate about creating user-friendly and visually appealing
                  websites. I am self-motivated and a team player to help acheive goals
                  and beyond.
                </p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute -left-0 text-lg font-semibold">2024</h3>
                <p>
                  Lastly adept at staying up-to-date with the latest web
                  development trends and technologies, and excited to contribute
                  to a dynamic team and deliver high-quality web solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4">
          <div>
            <p className="text-gray-300 text-sm">
            Copyright @ 2024
            </p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a> <img src={facebook} className="w-5"/></a>
              </li>
              <li>
                <a> <img src={LinkedIn} className="w-5"/></a>
              </li>
              <li>
                <a> <img src={Instagram} className="w-5"/></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
 