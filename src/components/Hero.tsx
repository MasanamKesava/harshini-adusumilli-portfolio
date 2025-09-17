import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Calendar, Phone, Linkedin } from "lucide-react";
import CV from "@/assets/harshini_resume.pdf"; // Import PDF

const Hero = () => {
  return (
    <section className="section gradient-hero min-h-screen flex items-center">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name + Title */}
          <div className="mb-8">
            <h1 className="mb-6 gradient-primary bg-clip-text text-transparent text-4xl md:text-6xl font-bold">
              Harshini Adusumilli
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Senior Full Stack .NET Developer
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>United States</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>(469) 290-2940</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialized in designing and delivering{" "}
            <strong>scalable, secure, and high-performing enterprise applications</strong> 
            across healthcare, banking, retail, and government domains. Expert in{" "}
            <strong>C#, ASP.NET Core, Angular, React</strong>, and cloud technologies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Contact Me */}
            <a
              href="mailto:harshidolly2812@gmail.com?subject=Job%20Opportunity%20for%20Senior%20Full%20Stack%20Developer&body=Hi%20Harshini,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20resume.%20We%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]"
            >
              <Button size="lg" className="text-lg px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </a>

            {/* LinkedIn Profile */}
            <a
              href="https://www.linkedin.com/in/harshini-adusumilli-a393161b4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
                <Linkedin className="w-5 h-5 mr-2" />
                Harshini’s Profile
              </Button>
            </a>

            {/* Download Resume */}
            <a href={CV} download="Harshini_Adusumilli_Resume.pdf">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-muted-foreground">Major Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
