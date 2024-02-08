import React from "react";

import Profile from "./assets/Photo.png";
import AmazonNavigatorImgSrc from "./assets/Project1.png";
import PlantParenthoodImgSrc from "./assets/Project2.png";
import PasswordGeneratorImgSrc from "./assets/Project3.png";
import TextEditorImgSrc from "./assets/Project4.png";
import facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";

import "./App.css";

const headerOptions = [
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "About Me",
    href: "#about-me",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
 
];

const projects = [
  {
    imgSrc: AmazonNavigatorImgSrc,
    githubHref: "https://github.com/alla0810/Group9",
    livePreviewHref: "https://alla0810.github.io/AmazonNavigator/",
    description:
      "The AMAZON NAVIGATOR is designed for customers to view item reviews and pricing.",
  },
  {
    imgSrc: PlantParenthoodImgSrc,
    githubHref: "https://github.com/VictoriaSweet/scary-potato",
    livePreviewHref: "https://nameless-wave-14504-8d3cae4aaa8e.herokuapp.com/",
    description:
      "Plant Parenthood is the application to help the those who are new to the hobby or just maybe even a weekend plant-sitter or award winning growers.",
  },
  {
    imgSrc: PasswordGeneratorImgSrc,
    githubHref: "https://github.com/tfkjosh/Password-generator",
    livePreviewHref: "https://tfkjosh.github.io/Password-generator/",
    description:
      "This application is designed for an employee to generate a random password based on criteria they've selected.",
  },
  {
    imgSrc: TextEditorImgSrc,
    githubHref: "https://github.com/tfkjosh/PWA-Challenge",
    livePreviewHref: "https://pwa-challenge1-b508091ee337.herokuapp.com/",
    description:
      "This application features a number of data persistence techniques, insuring the application runs regardless of browser supported function.",
  },
];

function App() {
  return (
    <>
      <header>
        <div className="flex container m-auto px-4 py-6 justify-between items-center">
          <h1 className="font-bold text-xl">Joshua's Portfolio</h1>
          <ul className="flex gap-4">
            {headerOptions.map(({ href, name }) => (
              <li key={name}>
                <a
                  className="text-gray-400 hover:text-white cursor-pointer"
                  href={href}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main>
        <section>
          <div className="container m-auto px-4 py-32 flex gap-6 items-center">
            <div>
              <h2 className="font-bold text-4xl">
                Hey There! I'm Joshua King,
              </h2>
              <h2 className="font-bold text-4xl mt-1 gradient-text">
                A Junior Web Developer
              </h2>
              <p className="mt-4 text-gray-400">
                Seeking to apply competent development
                skills with focus on collaboration, communication and passion.
              </p>
            </div>
            <div className="relative">
              <img src={Profile} width={420} className="relative z-10" />
            </div>
          </div>
        </section>

        <section className="py-10" section id="projects">
          <div className="container m-auto p-4">
            <h2 className="text-2xl font semi-bold">Projects</h2>
            <div className="flex flex-col sm:flex-col gap-12 mt-11">
              {projects.map(
                ({ imgSrc, description, githubHref, livePreviewHref }) => (
                  <div className="border border-gray-500 rounded-md">
                    <a href={githubHref} target="_blank">
                      <img
                        src={imgSrc}
                        alt={githubHref}
                        className="w-full h-auto"
                      />
                    </a>
                    <div className="p-5">
                      <h3 className="text-2xl font-semibold">{description}</h3>
                      <div className="flex gap-4 justify-end mt-8">
                        {livePreviewHref && (
                          <a href={livePreviewHref} target="_blank">
                            <button className="px-6 py-3 text-lg transition opacity-100 bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:opacity-90">
                              Live preview
                            </button>
                          </a>
                        )}

                        <a href={githubHref} target="_blank">
                          <button className="px-6 py-3 rounded-full opacity-100 border border-white">
                            Checkout github
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-10" id="experience">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font semi-bold">Experience</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Beginner</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Tailwind & Bootstrap</h2>
                  <p className="text-gray-500">Beginner</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, TypeScript, JQuery
                  </h2>
                  <p className="text-gray-500">Beginner</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">UI design in Figma</h2>
                  <p className="text-gray-500">Beginner</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Angular</h2>
                  <p className="text-gray-500">Beginner</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Beginner</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React Native</h2>
                  <p className="text-gray-500">Beginner</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
            </div>
          </div>
        </section>

        {/* Additional skills section*/}
        <section id="skills">
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">Additional Skills</h2>
            <div className="flex justify-between mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Git Flow
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  MySQL
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Express
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Apollo Sever/Graph QL
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Model View Controller
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Server/Client Side API
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
        <section className="py-8" id="about-me">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font semi-bold">About Me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 before:w-1 before:bg-white">
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute -left-0 text-lg font-semibold">2023</h3>
                <p>
                  Prior to enrolling into the University of Texas Coding
                  Bootcamp, I was a general laborer. I have 2 years of customer
                  service experience and a proven track record of adaptability,
                  dedication, attentiveness to details, patience and great
                  communication. I am eager to continue learning and building my
                  knowledge to implement innovative solutions to challenging
                  local and global issues.
                </p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute -left-0 text-lg font-semibold">2024</h3>
                <p>
                  I graduated January 30th from the University of Texas Coding Bootcamp and have
                  experience in web development for approximately 1 year. I am
                  passionate about creating user-friendly and visually appealing
                  websites. I am self-motivated and a team player to help
                  achieve goals and beyond.
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
        <section className="py-8" id="contact">
          <div className="container m-auto flex justify-between px-4">
            <form action="https://formspree.io/f/xbjngaap" method="POST">
              <h2 className="text-2xl font semi-bold">Contact Me</h2>
              <input
                type="text"
                name="First"
                placeholder="First Name"
                autoComplete="off"
                required
              ></input>
              <input
                type="text"
                name="Last"
                placeholder="Last Name"
                autoComplete="off"
                required
              ></input>
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                autoComplete="off"
                required
              ></input>
              <textarea
                rows="5"
                cols="60"
                name="message"
                placeholder="Enter text"
                autoComplete="off"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto px-4">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  {" "}
                  <img src={facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
