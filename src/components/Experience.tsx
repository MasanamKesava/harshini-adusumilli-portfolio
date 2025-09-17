import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    company: "Citizens Bank",
    role: "Senior Full Stack .NET Developer",
    type: "Contract",
    location: "Johnston, Rhode Island, United States · Remote",
    duration: "Jan 2024 - Present · 1 yr 9 mos",
    description: "Led the development of a cloud-native Digital Loan Origination Platform for Citizen's Bank, transforming legacy workflows into a scalable, event-driven microservices architecture using ASP.NET Core Web API, C# 10, and Angular 18.",
    achievements: [
      "Improved loan processing efficiency by 40% through modular microservices",
      "Integrated Apache Kafka for real-time loan status updates",
      "Leveraged Azure services (API Gateway, App Service, Azure Functions)",
      "Automated CI/CD pipelines via Azure DevOps with SonarQube quality gates"
    ],
    technologies: [".NET 8", "ASP.NET Core Web API", "Angular 18", "C# 10", "Azure", "Apache Kafka", "Entity Framework Core", "OAuth2"]
  },
  {
    company: "Blue Cross Blue Shield Association",
    role: "Senior Full Stack .NET Developer", 
    type: "Contract",
    location: "Chicago, Illinois, United States · Remote",
    duration: "Sep 2022 - Dec 2023 · 1 yr 4 mos",
    description: "Architected and developed enterprise-grade healthcare applications for BCBS using ASP.NET Core Web API, C# 10, and ReactJS, following Onion Architecture for modular, scalable solutions.",
    achievements: [
      "Delivered microservices for member enrollment, claims processing, and eligibility verification",
      "Integrated OAuth2 and AWS Cognito for secure authentication",
      "Implemented RabbitMQ for asynchronous event-driven processing",
      "Enhanced software delivery through Jenkins-based CI/CD pipelines"
    ],
    technologies: [".Net 6", "ASP.NET Core Web API", "ReactJS", "AWS Cloud", "DynamoDB", "RabbitMQ", "Jenkins", "Redux"]
  },
  {
    company: "State of California",
    role: "Senior Full Stack .NET Developer",
    type: "Contract", 
    location: "California, United States · Remote",
    duration: "Oct 2020 - Aug 2022 · 1 yr 11 mos",
    description: "Contributed to the modernization of public services for the State of California, developing scalable and maintainable applications using ASP.NET MVC (4.8) within an Agile SDLC environment.",
    achievements: [
      "Designed RESTful Web Services for seamless communication between state departments",
      "Built responsive UIs significantly improving user experience for online applications",
      "Managed large-scale semi-structured data with MongoDB optimization",
      "Delivered custom SSRS reports and interactive dashboards"
    ],
    technologies: [".NET Framework", "ASP.NET MVC", "MongoDB", "Entity Framework", "OAuth2", "SSRS", "JSON"]
  },
  {
    company: "Lululemon",
    role: "Full Stack .NET Developer",
    type: "Contract",
    location: "Dallas, Texas, United States · On-site", 
    duration: "Apr 2017 - Sep 2020 · 3 yrs 6 mos",
    description: "Led the design and development of a Retail Inventory and Order Management System for Lululemon using the .NET MVC framework under an Agile SDLC.",
    achievements: [
      "Improved order processing efficiency through iterative releases",
      "Designed SOAP-based web services for supplier and logistics integration",
      "Optimized Oracle database schemas for real-time inventory tracking",
      "Built reusable MVC components for enhanced scalability"
    ],
    technologies: [".NET Framework", "ASP.NET MVC", "Oracle Database", "SOAP web services", "jQuery", "AJAX"]
  },
  {
    company: "Infosys",
    role: ".NET Developer",
    type: "Full-time",
    location: "Hyderabad, Telangana, India · On-site",
    duration: "Jun 2015 - Feb 2017 · 1 yr 9 mos", 
    description: "Developed and maintained a multi-tier banking application for Infosys using ASP.NET WebForms, ADO.NET, and PostgreSQL, modernizing legacy modules and enhancing transactional efficiency.",
    achievements: [
      "Applied N-Tier architecture for clean separation of concerns",
      "Optimized database performance with complex PL/SQL procedures",
      "Delivered high-quality modules through rigorous testing and code reviews",
      "Ensured regulatory compliance in critical banking enhancements"
    ],
    technologies: [".NET Framework", "ASP.NET WebForms", "PostgreSQL", "ADO.NET", "SOAP web services", "xUnit"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Over a decade of delivering enterprise-grade solutions across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">{exp.company}</span>
                        <span className="text-sm text-muted-foreground">· {exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;