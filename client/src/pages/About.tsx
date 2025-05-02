import RetroCard from "@/components/RetroCard";
import AsciiArt, { workingDeveloperAscii } from "@/components/AsciiArt";

const About = () => {
  return (
    <section id="about" className="mb-8">
      <RetroCard title="ABOUT ME">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <p className="mb-3">I'm a passionate web developer with a love for both modern technologies and retro computing aesthetics. My journey began with simple HTML sites (much like this one!) and has evolved to include modern frameworks and tools.</p>
            <p className="mb-3">My expertise includes:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Frontend Development (HTML, CSS, JavaScript)</li>
              <li>React and Vue.js applications</li>
              <li>Backend systems with Node.js</li>
              <li>Game development experiments</li>
              <li>Data visualization projects</li>
            </ul>
            <p>When I'm not coding, you can find me exploring vintage technology, playing retro games, or learning about computing history.</p>
          </div>
          <div className="text-center">
            <AsciiArt 
              art={workingDeveloperAscii} 
              bgColor="bg-[var(--retro-silver)]" 
              textColor="text-[var(--retro-navy)]"
              className="mb-2" 
            />
            
            <div className="bg-[var(--retro-yellow)] text-[var(--retro-navy)] blink font-['VT323'] p-1">
              DEVELOPER AT WORK
            </div>
            
            <div className="mt-4 pixel-border p-2 bg-[var(--retro-silver)]">
              <h3 className="font-['VT323'] text-[var(--retro-navy)] underline">SKILLS:</h3>
              <div className="grid grid-cols-2 gap-1 mt-2">
                <div className="bg-white pixel-border-inset p-1 text-xs">HTML</div>
                <div className="bg-white pixel-border-inset p-1 text-xs">JavaScript</div>
                <div className="bg-white pixel-border-inset p-1 text-xs">React</div>
                <div className="bg-white pixel-border-inset p-1 text-xs">Node.js</div>
                <div className="bg-white pixel-border-inset p-1 text-xs">CSS</div>
                <div className="bg-white pixel-border-inset p-1 text-xs">Git</div>
              </div>
            </div>
          </div>
        </div>
      </RetroCard>
    </section>
  );
};

export default About;
