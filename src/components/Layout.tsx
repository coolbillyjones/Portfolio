import { ReactNode } from "react";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NavigationMenu />
      
      <main className="container mx-auto p-4 flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
