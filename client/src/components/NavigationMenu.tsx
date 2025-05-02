import { Link, useLocation } from "wouter";

const NavigationMenu = () => {
  const [location] = useLocation();

  // Function to convert route to Id for smooth scrolling on home page
  const getHref = (path: string) => {
    if (location === '/') {
      return `#${path.replace('/', '')}`;
    }
    return path;
  };

  return (
    <nav className="w-full bg-[var(--retro-silver)] p-3 border-t-2 border-white border-b-2 border-b-gray-500">
      <div className="container mx-auto flex flex-wrap justify-center space-x-1 md:space-x-3">
        <Link href="/">
          <a className="pixel-border bg-[var(--retro-silver)] hover:bg-gray-300 text-[var(--retro-navy)] font-['VT323'] p-2 m-1">
            HOME
          </a>
        </Link>
        <Link href={getHref('/about')}>
          <a className="pixel-border bg-[var(--retro-silver)] hover:bg-gray-300 text-[var(--retro-navy)] font-['VT323'] p-2 m-1">
            ABOUT
          </a>
        </Link>
        <Link href={getHref('/projects')}>
          <a className="pixel-border bg-[var(--retro-silver)] hover:bg-gray-300 text-[var(--retro-navy)] font-['VT323'] p-2 m-1">
            PROJECTS
          </a>
        </Link>
        <Link href={getHref('/contact')}>
          <a className="pixel-border bg-[var(--retro-silver)] hover:bg-gray-300 text-[var(--retro-navy)] font-['VT323'] p-2 m-1">
            CONTACT
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationMenu;
