import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in Computer Science and Technology
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="experience-card">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Bachelor of Technology - BTech, Computer Science
                </h3>
                <h4 className="text-lg font-medium text-primary mb-3">
                  Devineni Venkata Ramana & Dr. Hima Sekhar MIC College of Technology
                </h4>
                
                <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Jun 2011 - Apr 2015</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>Grade: 8.64</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-foreground mb-2">Core Technologies Studied:</h5>
                  <div className="flex flex-wrap gap-2">
                    {["SQL", "JavaScript", "Database Systems", "C Programming", "Object-Oriented Programming", "Data Structures"].map((subject, index) => (
                      <span key={index} className="skill-tag">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive computer science education with focus on programming fundamentals, 
                  database systems, and software engineering principles. Strong academic performance 
                  with 8.64 CGPA, building the foundation for a successful career in enterprise 
                  software development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Continuous Learning</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Committed to staying current with emerging technologies and industry best practices 
            through continuous professional development and hands-on experience with cutting-edge tools.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-card border border-border hover-lift text-center">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Certifications & Training</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover-lift text-center">
              <div className="text-2xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Learning</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover-lift text-center">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Commitment to Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;