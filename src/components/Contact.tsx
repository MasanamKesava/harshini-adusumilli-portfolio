import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to discussing opportunities in Senior .NET Developer, Full Stack Engineer, and Software Engineer roles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">harshini.adusumilli@email.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="text-muted-foreground">United States (Remote)</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">LinkedIn</div>
                    <div className="text-muted-foreground">500+ connections</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Open to Work</h4>
                <p className="text-muted-foreground mb-4">
                  Currently seeking opportunities in:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Senior .NET Developer",
                    "Full Stack Engineer", 
                    ".NET Developer",
                    "Web Developer",
                    "Software Engineer"
                  ].map((role, index) => (
                    <span key={index} className="skill-tag">
                      {role}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@company.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input placeholder="Your company name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about the opportunity or project you'd like to discuss..."
                    rows={5}
                  />
                </div>

                <Button className="w-full" variant="hero" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center gap-6">
            <Button variant="outline" size="lg" className="hover-lift">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </Button>
            <Button variant="outline" size="lg" className="hover-lift">
              <Mail className="w-5 h-5 mr-2" />
              Email Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;