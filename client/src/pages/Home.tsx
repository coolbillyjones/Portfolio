import RetroCard from "@/components/RetroCard";
import AsciiArt, { developerAscii, serverRackAscii } from "@/components/AsciiArt";
import VisitorCounter from "@/components/VisitorCounter";
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
                  <p className="mb-2">Hello, visitor! Welcome to my retro-styled developer portfolio.</p>
                  <p className="mb-4">I create web applications and coding projects with a passion for clean code and user experience.</p>
                  <div className="blink text-[var(--retro-magenta)] font-bold">
                    *** Site under construction! ***
                  </div>
                </div>
                <div className="w-full md:w-1/3 text-center">
                  <AsciiArt 
                    art={developerAscii} 
                    bgColor="bg-[var(--retro-silver)]" 
                    textColor="text-[var(--retro-navy)]" 
                    caption="ASCII Developer" 
                  />
                </div>
              </div>
            </RetroCard>
          </div>
          
          <div className="col-span-1">
            <RetroCard title="LATEST UPDATES">
              <ul className="list-disc list-inside">
                <li className="mb-2">Added new Minesweeper project [06/15/23]</li>
                <li className="mb-2">Updated portfolio design [05/22/23]</li>
                <li className="mb-2">Started GitHub Pages deployment [05/01/23]</li>
              </ul>
              <VisitorCounter />
            </RetroCard>
          </div>
        </div>
      </section>
      
      {/* ASCII Art server rack section */}
      <section className="mb-8 overflow-hidden">
        <RetroCard className="bg-[var(--retro-silver)] p-4">
          <pre className="text-[var(--retro-navy)] text-center text-xs md:text-sm font-mono whitespace-pre overflow-x-auto">
            {serverRackAscii}
          </pre>
          <div className="text-center mt-2 font-['VT323']">INFRASTRUCTURE ONLINE</div>
        </RetroCard>
      </section>
      
      {/* Featured Projects Section */}
      <section className="mb-8">
        <RetroCard title="FEATURED PROJECTS">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <div className="pixel-border p-3 bg-white">
              <h4 className="font-['VT323'] text-[var(--retro-navy)] text-lg mb-1">Minesweeper Game</h4>
              <div className="flex items-start">
                <div className="mr-2 pixel-border-inset bg-[var(--retro-silver)] p-1 text-center">
                  <pre className="text-xs text-[var(--retro-navy)]">
                    ┌───┬───┬───┐
                    │ 1 │   │ 1 │
                    ├───┼───┼───┤
                    │ 1 │ 1 │ 1 │
                    ├───┼───┼───┤
                    │ * │ 1 │   │
                    └───┴───┴───┘
                  </pre>
                </div>
                <div>
                  <p className="text-sm mb-2">Classic Minesweeper game with multiple difficulty levels.</p>
                  <a href="#" className="text-blue-700 underline text-sm">
                    Play Game &gt;&gt;
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="pixel-border p-3 bg-white">
              <h4 className="font-['VT323'] text-[var(--retro-navy)] text-lg mb-1">Weather Dashboard</h4>
              <div className="flex items-start">
                <div className="mr-2 pixel-border-inset bg-[var(--retro-silver)] p-1 text-center">
                  <pre className="text-xs text-[var(--retro-navy)]">
                    \\\\  //
                   ---- ☼ ----
                     //  \\\\
                  </pre>
                </div>
                <div>
                  <p className="text-sm mb-2">Weather application with forecast data from a public API.</p>
                  <a href="#" className="text-blue-700 underline text-sm">
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
    </>
  );
};

export default Home;
