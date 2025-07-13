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
          title="My work on the Florida Resource Map"
          description="As a backend developer, I have had several tasks ranging from new features to writing scripts that fill gaps in the data for the map. I have learned how to construct and work on MongoDB pipelines. Recently my work has been focusing on data cleansing/enhancing in order to improve the data shown to users of the map. I have used tools such as OpenAI's ChatGPT API to add tags to resources and Postman to test routes that I create."
          asciiArt={minesweeperAscii}
          projectLink="https://www.floridaresourcemap.org/"
          codeLink=""
          isFeatured={true}
        />
        
        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="Minesweeper"
            description="Done for my Programming Fundamentals 2 Class. This project is a classic take on Minesweeper written in C++."
            asciiArt={minesweeperAscii}
            projectLink="https://github.com/coolbillyjones/Minesweeper"
          />
          
          <ProjectCard
            title="Expenses Tracker"
            description="A simple expenses tracker site that a user can input data into and recieve formatted charts showing how their expenses are being used. Written in Javascript and uses MongoDB to store user data with a simple login and authentication screen when first opening the site. User data is stored and can be accessed again when going back into the site."
            asciiArt={calculatorAscii}
            projectLink="https://github.com/coolbillyjones/Expense-Tracker"
          />
          
          <ProjectCard
            title="Andrew Ng's Machine Learning Specialization"
            description="Recently, I have been working on Andrew Ng's machine learning specialization on coursera. This consists of 3 courses that are meant to cover the basic principles needed to begin working on machine learning projects. So far, I have completed the first course and am currently working on the second one."
            asciiArt= {""}
            projectLink=""
          />
          
          <ProjectCard
            title="Introduction to Geospatial Raster and Vector Data with Python"
            description="I have recently started this short workshop about raster and vector data in python. My intent with this is to learn how Geospatial data is represented and used in python in order to eventually start applying data science and machine learning principles to this data."
            asciiArt= {""}
            projectLink="https://github.com/coolbillyjones/Geospatial-Workshop#"
          />
        </div>
        
        <div className="text-center mt-6">
          <a 
            href="https://github.com/coolbillyjones" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block pixel-border bg-[var(--retro-purple)] text-white font-['VT323'] p-2 hover:bg-[var(--retro-magenta)]"
          >
            View the code to all my projects on my Github
          </a>
        </div>
      </RetroCard>
    </section>
  );
};

export default Projects;
