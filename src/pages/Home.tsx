import RetroCard from "@/components/RetroCard";
import AsciiArt, { developerAscii, serverRackAscii } from "@/components/AsciiArt";
import headshotImage from '../assets/headshot.jpg';
import { Link } from "wouter";

const Home = () => {
  return (
    <>
      <section id="home" className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <RetroCard title="WELCOME!">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-2/3 mb-4 md:mb-0 md:mr-4">
                  <p className="mb-2">Hi! Welcome to my portfolio. Here you can find my projects, interests, and what I'm currently working on.</p>
                  <p className="mb-4">I'm passionate about machine learning algorithms and am currently aiming to acquire a student researcher position in a lab where I can develop and apply my knowledge.</p>
                  <div className="blink text-[var(--retro-magenta)] font-bold">
                    *** New projects always being added! ***
                  </div>
                </div>
                <div className="w-full md:w-1/3 text-center">
                  <img src = {headshotImage} alt='Headshot' className="rounded w-48 h-48"/>
                  {/* <AsciiArt 
                    art={developerAscii} 
                    bgColor="bg-[var(--retro-silver)]" 
                    textColor="text-[var(--retro-navy)]" 
                    caption="ASCII Developer" 
                  /> */}
                </div>
              </div>
            </RetroCard>
          </div>
          
          <div className="col-span-1">
            <RetroCard title="LATEST UPDATES">
              <ul className="list-disc list-inside">
                <li className="mb-2">Began an introductory workshop in Geospatial Raster and Vector Data with Python [07/10/25]</li>
                <li className="mb-2">Completed the first course in Andrew Ng's Machine Learning Spcecialization [07/07/25]</li>
                <li className="mb-2">Started GitHub Pages deployment [05/01/25]</li>
              </ul>
            </RetroCard>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="mb-8">
        <RetroCard title="FEATURED PROJECTS">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <div className="pixel-border p-3 bg-white">
              <h4 className="font-['VT323'] text-[var(--retro-navy)] text-lg mb-1">Minesweeper Game</h4>
              <div className="flex items-start">
                <div>
                  <p className="text-sm mb-2">Classic Minesweeper game written in C++.</p>
                  <a href="https://github.com/coolbillyjones/Minesweeper" className="text-blue-700 underline text-sm" target = "_blank">
                    View Project &gt;&gt;
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="pixel-border p-3 bg-white">
              <h4 className="font-['VT323'] text-[var(--retro-navy)] text-lg mb-1">Backend Intern At Florida Community Innovatio</h4>
              <div className="flex items-start">
                <div>
                  <p className="text-sm mb-2">As a backend intern I fix bugs, develop new features, and cleanse the data being displayed on the sight. For a more in depth description, check the projects tab!</p>
                  <a href="https://www.floridaresourcemap.org/" className="text-blue-700 underline text-sm" target="_blank">
                    View Project &gt;&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Link href="/projects">
              <a className="pixel-border bg-[var(--retro-purple)] text-white font-['VT323'] p-2 inline-block hover:bg-[var(--retro-magenta)]">
                VIEW ALL PROJECTS
              </a>
            </Link>
          </div>
        </RetroCard>
      </section>

      {/* Quick links to other sections */}
      <div className="text-center mb-8">
        <div className="pixel-border bg-[var(--retro-silver)] p-3 inline-block">
          <h3 className="font-['VT323'] text-[var(--retro-navy)] mb-2 underline">EXPLORE MY SITE</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/about">
              <a className="pixel-border bg-[var(--retro-navy)] text-white font-['VT323'] p-2 hover:bg-[var(--retro-purple)]">
                ABOUT ME
              </a>
            </Link>
            <Link href="/projects">
              <a className="pixel-border bg-[var(--retro-navy)] text-white font-['VT323'] p-2 hover:bg-[var(--retro-purple)]">
                MY PROJECTS
              </a>
            </Link>
            <Link href="/contact">
              <a className="pixel-border bg-[var(--retro-navy)] text-white font-['VT323'] p-2 hover:bg-[var(--retro-purple)]">
                CONTACT ME
              </a>
            </Link>
          </div>
        </div>
      </div>
      
      {/* ASCII Art server rack section */}
      <section className="mb-8 overflow-hidden">
        <RetroCard className="bg-[var(--retro-silver)] p-4">
          <pre className="text-[var(--retro-navy)] text-center text-xs md:text-sm font-mono whitespace-pre overflow-x-auto">
            {serverRackAscii}
          </pre>
          <div className="text-center mt-2 font-['VT323']">INFRASTRUCTURE ONLINE</div>
        </RetroCard>
      </section>
    </>
  );
};

export default Home;
