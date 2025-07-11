import { getFormattedDate } from "@/lib/utils";

const Footer = () => {
  const currentDate = getFormattedDate();

  return (
    <footer className="bg-[var(--retro-navy)] text-white p-4">
      <div className="container mx-auto text-center">
        <p className="font-['VT323'] text-sm">© {new Date().getFullYear()} MY PORTFOLIO • BEST VIEWED IN 800x600</p>
        <p className="text-xs mt-1">Last updated: {currentDate}</p>
        <div className="mt-2 text-[var(--retro-cyan)] text-xs">
          <span className="blink">[</span> 
          <a href="#home" className="underline hover:text-[var(--retro-magenta)]">Back to Top</a> 
          <span className="blink">]</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
