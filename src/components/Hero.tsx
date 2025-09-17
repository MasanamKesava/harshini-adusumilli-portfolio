import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="section gradient-hero min-h-screen flex items-center">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="mb-6 gradient-primary bg-clip-text text-transparent">
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
            </div>
          </div>

          <p className="text-lg md:text-xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialized in designing and delivering <strong>scalable, secure, and high-performing enterprise applications</strong> across healthcare, banking, retail, and government domains. Expert in <strong>C#, ASP.NET Core, Angular, React</strong>, and cloud technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

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