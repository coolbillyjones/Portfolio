import RetroCard from "@/components/RetroCard";
import AsciiArt, { workingDeveloperAscii } from "@/components/AsciiArt";

const About = () => {
  return (
    <section id="about" className="mb-8">
      <RetroCard title="ABOUT ME">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <p className="mb-3">I'm a passionate student currently studying computer science and statistics at the University of Florida. I enjoy learning about machine learning and the math that powers the powerful tools used everyday worldwide. Currently, I am interning as a backend developer for Florida Community Innovation on their Florida Resource Map. The Resource Map is a project that aims to make a comprehensive, easy to use, and constantly updated list of resources for social workers throughout Florida. As a backend developer, I work with Javascript, Node.js, React, and MongoDB to add new features, fix bugs, and clean/improve the data that is shown on the map. </p>
            <p className="mb-3">My main interests include:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Backend Development (JavaScript, Node.js, MongoDB)</li>
              <li>Machine Learning (Pytorch, Scikit Learn)</li>
              <li>The Theory Behind Learning Algorithms</li>
              <li>Data Visualization</li>
              <li>Statistics and Probability</li>
            </ul>
            <p>When I'm not working on a project or a course, I enjoy learning about fashion, sewing, and playing basketball. </p>
          </div>
          <div className="text-center">
            <AsciiArt 
              art={workingDeveloperAscii} 
              bgColor="bg-[var(--retro-silver)]" 
              textColor="text-[var(--retro-navy)]"
              className="mb-2" 
            />
            
            <div className="mt-4 pixel-border p-2 bg-[var(--retro-silver)]">
              <h3 className="font-['VT323'] text-[var(--retro-navy)] underline">SKILLS:</h3>
              <div className="grid grid-cols-2 gap-1 mt-2">
                <div className="bg-white pixel-border-inset p-1 text-xs">Pytorch</div>
                <div className="bg-white pixel-border-inset p-1 text-xs">JavaScript</div>
                <div className="bg-white pixel-border-inset p-1 text-xs">React</div>
                <div className="bg-white pixel-border-inset p-1 text-xs">Node.js</div>
                <div className="bg-white pixel-border-inset p-1 text-xs">MongoDB</div>
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
