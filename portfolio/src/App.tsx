import clsx from "clsx";

import Profile from "./assets/Photo.png";
import facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";

import "./App.css";

import {
  additionalSkills,
  experienceWidthByLevel,
  headerOptions,
  inputClassName,
  projects,
  technologies,
} from "./constants";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Section } from "./components/Section";

const App = () => {
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
        <Section id="hero">
          <div className="container m-auto px-4 py-40 flex gap-6 items-center justify-between">
            <div>
              <h2 className="font-bold text-4xl">
                Hey There! I'm Joshua King,
              </h2>
              <h2 className="font-bold text-4xl my-1 gradient-text">
                A Junior Web Developer
              </h2>
              <p className="mt-4 text-gray-500">
                Seeking to apply competent development skills with focus on
              </p>
              <p className="mt-2 text-gray-500">
                collaboration, communication, and passion.
              </p>
            </div>
            <div className="relative">
              <img src={Profile} width={420} className="relative z-10" />
            </div>
          </div>
        </Section>

        <Section id="projects">
          <div className="container m-auto p-4">
            <h2 className="text-2xl font semi-bold">Projects</h2>
            <div className="flex flex-col sm:flex-col gap-12 mt-11">
              {projects.map(
                ({ id, imgSrc, description, githubHref, livePreviewHref }) => (
                  <div key={id} className="border border-gray-500 rounded-md">
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
                            <Button label="Live Preview" />
                          </a>
                        )}

                        <a href={githubHref} target="_blank">
                          <Button
                            styleVariant="secondary"
                            label="Checkout on Github"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </Section>

        {/* Technologies */}
        <Section id="experience">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font semi-bold">Experience</h2>
            <div className="grid grid-cols-2 gap-x-8 mt-6">
              {technologies.map(({ name, level }) => (
                <div
                  key={name}
                  className="col-span-1 py-4 odd:border-r odd:border-r-white/20 pr-8"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">{name}</h2>
                    <p className="text-gray-500">{level}</p>
                  </div>
                  <span
                    style={{ width: `${experienceWidthByLevel[level]}%` }}
                    className="h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"
                  ></span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Additional skills section*/}
        <Section id="skills">
          <div className="container px-4">
            <h2 className="text-2xl font-semibold">Additional Skills</h2>
            <div className="grid grid-cols-4 gap-4 mt-8">
              {additionalSkills.map((skill) => (
                <div key={skill} className="cols-span-1">
                  <p
                    className={clsx(
                      "font-bold relative left-8",
                      "before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500",
                      "before:w-4 before:h-4 before:block before:rounded-full before:mt-1 before:-left-8 before:absolute "
                    )}
                  >
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="about-me">
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
                  I graduated January 30th from the University of Texas Coding
                  Bootcamp and have experience in web development for
                  approximately 1 year. I am passionate about creating
                  user-friendly and visually appealing websites. I am
                  self-motivated and a team player to help achieve goals and
                  beyond.
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
        </Section>

        <Section id="contact">
          <div className="px-4">
            <form
              action="https://formspree.io/f/xbjngaap"
              method="POST"
              className="flex flex-col gap-y-4"
            >
              <h2 className="text-2xl font semi-bold">Contact Me</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4">
                <Input
                  type="text"
                  name="First"
                  placeholder="First Name"
                  autoComplete="off"
                  required
                />
                <Input
                  type="text"
                  name="Last"
                  placeholder="Last Name"
                  autoComplete="off"
                  required
                />
              </div>
              <Input
                type="email"
                name="Email"
                placeholder="Email Address"
                autoComplete="off"
                required
              />
              <textarea
                rows={5}
                cols={60}
                name="message"
                placeholder="Enter text"
                autoComplete="off"
                className={inputClassName}
                required
              />
              <div className="flex justify-end">
                <Button type="submit" label="Send Message" />
              </div>
            </form>
          </div>
        </Section>
      </main>

      <footer>
        <div className="flex justify-between items-center p-4">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
