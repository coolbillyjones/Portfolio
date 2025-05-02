import { useState } from "react";
import RetroCard from "@/components/RetroCard";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormData]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, this would send data to a server
      console.log("Form submitted:", formData);
      
      // Show success message
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }
  };
  
  return (
    <section id="contact" className="mb-8">
      <RetroCard title="CONTACT ME">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">Feel free to reach out for collaboration, job opportunities, or just to say hello!</p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="pixel-border bg-[var(--retro-silver)] p-1 mr-2 w-8 h-8 flex items-center justify-center">
                  <span className="text-[var(--retro-navy)]">@</span>
                </div>
                <a href="mailto:example@email.com" className="text-blue-700 underline">example@email.com</a>
              </div>
              
              <div className="flex items-center">
                <div className="pixel-border bg-[var(--retro-silver)] p-1 mr-2 w-8 h-8 flex items-center justify-center">
                  <span className="text-[var(--retro-navy)]">☎</span>
                </div>
                <span>(555) 123-4567</span>
              </div>
              
              <div className="flex items-center">
                <div className="pixel-border bg-[var(--retro-silver)] p-1 mr-2 w-8 h-8 flex items-center justify-center">
                  <span className="text-[var(--retro-navy)]">⌂</span>
                </div>
                <span>City, State, Country</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-['VT323'] text-[var(--retro-purple)] mb-2">FIND ME ONLINE:</h3>
              <div className="flex space-x-2">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pixel-border bg-[var(--retro-navy)] text-white font-['VT323'] p-1 text-sm hover:bg-[var(--retro-purple)]"
                >
                  GITHUB
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pixel-border bg-[var(--retro-navy)] text-white font-['VT323'] p-1 text-sm hover:bg-[var(--retro-purple)]"
                >
                  LINKEDIN
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pixel-border bg-[var(--retro-navy)] text-white font-['VT323'] p-1 text-sm hover:bg-[var(--retro-purple)]"
                >
                  TWITTER
                </a>
              </div>
            </div>
          </div>
          
          <div className="pixel-border-inset bg-[var(--retro-silver)] p-3">
            <h3 className="font-['VT323'] text-[var(--retro-navy)] mb-3">SEND ME A MESSAGE:</h3>
            
            {submitSuccess && (
              <div className="bg-[var(--retro-yellow)] text-[var(--retro-navy)] p-2 mb-3 pixel-border font-['VT323']">
                Message sent successfully! Thank you.
              </div>
            )}
            
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-sm">Your Name:</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`pixel-border-inset w-full p-2 focus:outline-none ${formErrors.name ? 'border-red-500' : ''}`} 
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                )}
              </div>
              
              <div>
                <label className="block mb-1 text-sm">Your Email:</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`pixel-border-inset w-full p-2 focus:outline-none ${formErrors.email ? 'border-red-500' : ''}`} 
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>
              
              <div>
                <label className="block mb-1 text-sm">Message:</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`pixel-border-inset w-full p-2 focus:outline-none ${formErrors.message ? 'border-red-500' : ''}`} 
                />
                {formErrors.message && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                )}
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="pixel-border bg-[var(--retro-navy)] text-white font-['VT323'] p-2 hover:bg-[var(--retro-purple)]"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </RetroCard>
    </section>
  );
};

export default Contact;
