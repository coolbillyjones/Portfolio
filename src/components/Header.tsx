import Marquee from "./Marquee";

const Header = () => {
  return (
    <header className="w-full bg-[var(--retro-navy)] text-white">
      <div className="container mx-auto p-2 text-center">
        <pre className="hidden md:block text-[var(--retro-cyan)] font-['VT323'] text-xs md:text-base overflow-x-auto whitespace-pre">
  _______  _______  ______   _______  _______  _______ _________ _______  _        _______  _______ 
 (  ____ \(  ____ \(  __  \ (  ____ )(  ___  )(  ____ \\__   __/(  ___  )( \      (  ____ \(  ___  )
 | (    \/| (    \/| (  \  )| (    )|| (   ) || (    \/   ) (   | (   ) || (      | (    \/| (   ) |
 | |      | (__    | |   ) || (____)|| |   | || (_____    | |   | |   | || |      | (__    | |   | |
 | |      |  __)   | |   | ||     __)| |   | |(_____  )   | |   | |   | || |      |  __)   | |   | |
 | |      | (      | |   ) || (\ (   | |   | |      ) |   | |   | |   | || |      | (      | |   | |
 | (____/\| (____/\| (__/  )| ) \ \__| (___) |/\____) |   | |   | (___) || (____/\| (____/\| (___) |
 (_______/(_______/(______/ |/   \__/(_______)\_______)   )_(   (_______)(_______/(_______/(_______)
        </pre>
        <h1 className="text-xl md:text-2xl font-['VT323'] block md:hidden">CODE PORTFOLIO</h1>
      </div>
      
      <Marquee text="★ Welcome to my developer portfolio! ★ Check out my projects! ★ Contact me for collaboration! ★ " />
    </header>
  );
};

export default Header;
