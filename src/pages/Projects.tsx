import RetroCard from "@/components/RetroCard";
import ProjectCard from "@/components/ProjectCard";
import { 
  minesweeperAscii, 
  weatherAscii, 
  taskTrackerAscii, 
  calculatorAscii, 
  pixelArtAscii 
} from "@/components/AsciiArt";

const Projects = () => {
  return (
    <section id="projects" className="mb-8">
      <RetroCard title="MY PROJECTS">
        {/* Featured project */}
        <ProjectCard
          title="Minesweeper Game"
          description="A classic implementation of the Minesweeper game using vanilla JavaScript. Features include multiple difficulty levels, custom game settings, and a high score system. This project demonstrates DOM manipulation, event handling, and game logic implementation."
          asciiArt={minesweeperAscii}
          projectLink="#"
          codeLink="#"
          isFeatured={true}
        />
        
        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="Weather Dashboard"
            description="A weather application that fetches and displays forecast data using a public API."
            asciiArt={weatherAscii}
            projectLink="#"
          />
          
          <ProjectCard
            title="Task Tracker"
            description="A simple task management application with local storage persistence."
            asciiArt={taskTrackerAscii}
            projectLink="#"
          />
          
          <ProjectCard
            title="Retro Calculator"
            description="A functional calculator with a retro-styled interface and keyboard support."
            asciiArt={calculatorAscii}
            projectLink="#"
          />
          
          <ProjectCard
            title="Pixel Art Maker"
            description="A tool for creating and exporting pixel art using a customizable grid."
            asciiArt={pixelArtAscii}
            projectLink="#"
          />
        </div>
        
        <div className="text-center mt-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block pixel-border bg-[var(--retro-purple)] text-white font-['VT323'] p-2 hover:bg-[var(--retro-magenta)]"
          >
            VIEW ALL PROJECTS ON GITHUB
          </a>
        </div>
      </RetroCard>
    </section>
  );
};

export default Projects;
