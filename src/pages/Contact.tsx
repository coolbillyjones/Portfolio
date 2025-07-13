import { useState } from "react";
import RetroCard from "@/components/RetroCard";

const Contact = () => {
  return (
    <section id="contact" className="mb-8">
      <RetroCard title="CONTACT ME">
        <div className="grid grid-cols-5 md:grid-cols-1 gap-8">
          <div>
            <p className="mb-4">Feel free to reach out for collaboration, job opportunities, or just to say hello!</p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="pixel-border bg-[var(--retro-silver)] p-1 mr-2 w-8 h-8 flex items-center justify-center">
                  <span className="text-[var(--retro-navy)]">@</span>
                </div>
                <a href="mailto:example@email.com" className="text-blue-700 underline">josephgcoll@gmail.com</a>
              </div>
              
              <div className="flex items-center">
                <div className="pixel-border bg-[var(--retro-silver)] p-1 mr-2 w-8 h-8 flex items-center justify-center">
                  <span className="text-[var(--retro-navy)]">☎</span>
                </div>
                <span>(786) 218-8544</span>
              </div>
              
            </div>
            
            <div className="mt-6">
              <h3 className="font-['VT323'] text-[var(--retro-purple)] mb-2">FIND ME ONLINE:</h3>
              <div className="flex space-x-2">
                <a 
                  href="https://github.com/coolbillyjones" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pixel-border bg-[var(--retro-navy)] text-white font-['VT323'] p-1 text-sm hover:bg-[var(--retro-purple)]"
                >
                  GITHUB
                </a>
                <a 
                  href="https://www.linkedin.com/in/josephgonzalez042/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pixel-border bg-[var(--retro-navy)] text-white font-['VT323'] p-1 text-sm hover:bg-[var(--retro-purple)]"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </RetroCard>
    </section>
  );
};

export default Contact;
