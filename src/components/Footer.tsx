import { Mail, MapPin, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Harshini Adusumilli</h3>
            <p className="text-background/80 mb-4">
              Senior Full Stack .NET Developer with 10+ years of experience in enterprise application development.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/harshini-adusumilli-a393161b4/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:harshidolly2812@gmail.com" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#skills", label: "Skills" },
                { href: "#education", label: "Education" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <li key={link.href}>
                  <button 
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-background/60" />
                <span className="text-background/80">United States</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-background/60" />
                <span className="text-background/80">harshidolly2812@gmail.com</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-background/10">
              <h5 className="font-medium text-sm mb-2">Open to Work</h5>
              <p className="text-xs text-background/80">
                Available for Senior .NET Developer, Full Stack Engineer, and Software Engineer positions.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Harshini Adusumilli. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-400" /> and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;