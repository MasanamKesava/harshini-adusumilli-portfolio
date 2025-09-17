import { Code2, Database, Cloud, Wrench, TestTube, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Code2,
    skills: [
      ".NET 8", "ASP.NET Core", "C# 10", "ASP.NET MVC", "Web API", 
      "Entity Framework Core", "ADO.NET", "Microservices", "RESTful APIs", 
      "SOAP Services", "OAuth2", "JWT"
    ]
  },
  {
    title: "Frontend Development", 
    icon: Code2,
    skills: [
      "Angular 18", "React.js", "TypeScript", "JavaScript", "HTML5", 
      "CSS3", "Bootstrap", "Redux", "NgRx", "jQuery", "AJAX"
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "SQL Server", "Oracle Database", "PostgreSQL", "MongoDB", 
      "DynamoDB", "Entity Framework", "Stored Procedures", "Database Design", 
      "Query Optimization", "Indexing"
    ]
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      "Microsoft Azure", "AWS Cloud", "Azure Functions", "Lambda", 
      "API Gateway", "App Service", "EC2", "S3", "Azure DevOps", 
      "CloudFormation", "VPC"
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: [
      "Jenkins", "Azure DevOps", "CI/CD", "SonarQube", "Git", "TFS", 
      "SVN", "Docker", "Visual Studio", "Postman", "Swagger", "JIRA"
    ]
  },
  {
    title: "Testing & Quality",
    icon: TestTube,
    skills: [
      "xUnit", "TDD", "Unit Testing", "Karma", "Jasmine", "Protractor", 
      "Code Reviews", "Quality Assurance", "Performance Testing", "Serilog", "Log4Net"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning full-stack development, cloud technologies, and enterprise architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="experience-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Frameworks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Databases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Cloud Platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;