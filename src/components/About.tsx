import { Award, Users, Zap, Target } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Specialized in enterprise application development across healthcare, banking, retail, and government domains"
  },
  {
    icon: Users,
    title: "Cross-functional Leadership",
    description: "Experienced in mentoring junior developers and collaborating with diverse teams in Agile environments"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Proven track record of improving system efficiency by 40%+ through architectural improvements"
  },
  {
    icon: Target,
    title: "Domain Expertise",
    description: "Deep knowledge in financial services, healthcare systems, retail operations, and government applications"
  }
];

const About = () => {
  return (
    <section id="about" className="section bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Senior Full Stack Developer passionate about building scalable, secure enterprise solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                With over a <strong>decade of experience</strong> as a Senior Full Stack .NET Developer, 
                I specialize in designing and delivering <strong>scalable, secure, and high-performing 
                enterprise applications</strong>. My expertise spans across healthcare, banking, retail, 
                and government domains, consistently driving digital transformation and improving 
                operational efficiency.
              </p>
              
              <p>
                I bring strong proficiency in <strong>C#, ASP.NET Core, MVC, and Microservices architectures</strong>, 
                leveraging Web API, Entity Framework Core, and ADO.NET to build distributed, modular solutions. 
                On the front end, I have developed responsive, dynamic applications using <strong>Angular, React, 
                TypeScript, and modern JavaScript frameworks</strong>.
              </p>

              <p>
                My cloud expertise includes deploying solutions on <strong>AWS and Azure</strong>, implementing 
                secure authentication with OAuth2 and JWT, and building CI/CD pipelines for efficient, 
                error-free deployments. I thrive in both Agile and Waterfall environments, always focusing 
                on <strong>quality, maintainability, and business value</strong>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="experience-card text-center">
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Industries & Domains</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {["Healthcare", "Banking & Finance", "Retail & E-commerce", "Government"].map((industry, index) => (
              <div key={index} className="p-4 rounded-xl bg-card border border-border hover-lift">
                <div className="text-lg font-medium text-foreground">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;