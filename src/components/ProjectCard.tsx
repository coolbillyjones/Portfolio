import { ReactNode } from "react";
import AsciiArt from "./AsciiArt";

interface ProjectCardProps {
  title: string;
  description: string;
  asciiArt: string;
  projectLink?: string;
  codeLink?: string;
  isFeatured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  asciiArt,
  projectLink,
  codeLink,
  isFeatured = false
}: ProjectCardProps) => {
  if (isFeatured) {
    return (
      <div className="mb-8">
        <h3 className="font-['VT323'] text-[var(--retro-purple)] text-xl">★ FEATURED PROJECT ★</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div className="md:col-span-2 pixel-border-inset p-3 bg-[var(--retro-silver)]">
            <h4 className="font-['VT323'] text-[var(--retro-navy)] text-lg mb-2">{title}</h4>
            <p className="mb-3">{description}</p>
            <div className="flex space-x-2 mt-4">
              {projectLink && (
                <a 
                  href={projectLink} 
                  className="pixel-border bg-[var(--retro-navy)] text-white font-['VT323'] p-1 text-sm hover:bg-[var(--retro-purple)]"
                >
                  PLAY GAME
                </a>
              )}
              {codeLink && (
                <a 
                  href={codeLink} 
                  className="pixel-border bg-[var(--retro-navy)] text-white font-['VT323'] p-1 text-sm hover:bg-[var(--retro-purple)]"
                >
                  VIEW CODE
                </a>
              )}
            </div>
          </div>
          <div className="scanlines pixel-border-inset bg-[var(--retro-silver)] p-1">
            <div className="bg-[var(--retro-silver)] pixel-border-inset p-2">
              <pre className="text-xs text-[var(--retro-navy)] font-mono">
                {asciiArt}
              </pre>
            </div>
            <div className="mt-2 text-center">
              <div className="bg-[var(--retro-navy)] text-white font-['VT323'] p-1 text-xs">
                {title.toUpperCase()} v1.0
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pixel-border p-3 bg-white">
      <h4 className="font-['VT323'] text-[var(--retro-navy)] text-lg mb-1">{title}</h4>
      <div className="flex items-start">
        <div className="mr-2 pixel-border-inset bg-[var(--retro-silver)] p-1 text-center">
          <pre className="text-xs text-[var(--retro-navy)]">
            {asciiArt}
          </pre>
        </div>
        <div>
          <p className="text-sm mb-2">{description}</p>
          {projectLink && (
            <a href={projectLink} className="text-blue-700 underline text-sm">
              View Project &gt;&gt;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
