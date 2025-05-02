import { cn } from "@/lib/utils";

interface AsciiArtProps {
  art: string;
  className?: string;
  textColor?: string;
  bgColor?: string;
  caption?: string;
}

const AsciiArt = ({ 
  art, 
  className, 
  textColor = "text-[var(--retro-cyan)]", 
  bgColor = "bg-black", 
  caption 
}: AsciiArtProps) => {
  return (
    <div className={cn("text-center", className)}>
      <div className={cn("pixel-border-inset p-2", bgColor)}>
        <pre className={cn("text-xs leading-tight whitespace-pre", textColor)}>
          {art}
        </pre>
      </div>
      {caption && (
        <div className="text-sm mt-2">{caption}</div>
      )}
    </div>
  );
};

// Predefined ASCII arts
export const developerAscii = `   __     __
  /  \\~~~/  \\
 (    . .    )
  \\  '-^-'  /
   '._____.'
  /'-_____-'\\
 /   '---'   \\`;

export const workingDeveloperAscii = `     .---.
    /     \\
    \\.@-@./
    /\`\\_/\`\\
   //  _  \\\\
  | \\     )|_
 /\`\\_\`>  <_/ \\
 \\__/'---'\\__/`;

export const minesweeperAscii = `┌───┬───┬───┬───┬───┐
│ 1 │   │   │ 1 │   │
├───┼───┼───┼───┼───┤
│ 1 │ 1 │ 1 │ 1 │   │
├───┼───┼───┼───┼───┤
│   │   │   │   │   │
├───┼───┼───┼───┼───┤
│ 1 │ 1 │   │   │   │
├───┼───┼───┼───┼───┤
│ * │ 1 │   │   │   │
└───┴───┴───┴───┴───┘`;

export const weatherAscii = `   \\\\  //
 ---- ☼ ----
   //  \\\\`;

export const taskTrackerAscii = ` ┌─────────┐
 │ ✓ Task 1│
 │ □ Task 2│
 │ □ Task 3│
 └─────────┘`;

export const calculatorAscii = ` ┌───────┐
 │ 42.00 │
 ├───┬───┤
 │ 7 │ 8 │
 ├───┼───┤
 │ + │ = │
 └───┴───┘`;

export const pixelArtAscii = ` ┌─┬─┬─┬─┐
 │█│█│ │ │
 ├─┼─┼─┼─┤
 │█│█│█│ │
 ├─┼─┼─┼─┤
 │ │█│█│█│
 └─┴─┴─┴─┘`;

export const helicopterAscii = `          +--^----------,--------,-----,--------^-,
          | |||||||||   \`--------'     |          O
          \`+---------------------------^----------|
            \`\\_,---------,---------,--------------'
              / XXXXXX /'|       /'
             / XXXXXX /  \`\\    /'
            / XXXXXX /\`-------'
           / XXXXXX /
          / XXXXXX /
         (________(                
          \`------'              

          THANK YOU FOR VISITING!`;

export const serverRackAscii = `
  ┌──────────────────────────────┐
  │  ┌──────────────────────┐    │
  │  │  ▀▀▀▀▀▀   ○ ○ ○ ○   │    │
  │  │  SERVER-01   [ACTIVE]│    │
  │  └──────────────────────┘    │
  │                              │
  │  ┌──────────────────────┐    │
  │  │  ▀▀▀▀▀▀   ● ● ● ●   │    │
  │  │  DB-01     [STANDBY]│    │
  │  └──────────────────────┘    │
  │                              │
  │      HOSTING MY PROJECTS     │
  └──────────────────────────────┘
`;

export default AsciiArt;
