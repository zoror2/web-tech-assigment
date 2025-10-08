import { Mail, Phone, MapPin, Linkedin, Github, Code, Briefcase, GraduationCap, FolderGit2, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileHeader from "@/assets/profile-header.jpg";

const Resume = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL",
    "Git", "Docker", "AWS", "REST APIs", "GraphQL", "Agile"
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      year: "2018 - 2020",
      gpa: "3.8/4.0"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      year: "2014 - 2018",
      gpa: "3.6/4.0"
    }
  ];

  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Led development of enterprise web applications, mentored junior developers, and implemented CI/CD pipelines."
    },
    {
      title: "Software Engineer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2021",
      description: "Developed and maintained full-stack applications using React and Node.js, collaborated with cross-functional teams."
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2018 - 2020",
      description: "Built responsive web interfaces, participated in code reviews, and contributed to open-source projects."
    }
  ];

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and real-time inventory management",
      tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      name: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team communication features",
      tech: ["TypeScript", "React", "Firebase", "Material-UI"]
    },
    {
      name: "Analytics Dashboard",
      description: "Data visualization platform for business metrics with customizable reports and exports",
      tech: ["React", "D3.js", "Python", "PostgreSQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${profileHeader})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">John Doe</h1>
          <p className="text-xl text-white/90 mb-6">Senior Software Engineer</p>
          <div className="flex flex-wrap gap-4 text-white/90">
            <a href="mailto:john.doe@email.com" className="flex items-center gap-2 hover:text-white section-transition">
              <Mail className="w-4 h-4" />
              <span>john.doe@email.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white section-transition">
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </span>
            <a href="https://linkedin.com" className="flex items-center gap-2 hover:text-white section-transition">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com" className="flex items-center gap-2 hover:text-white section-transition">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* About Section */}
        <section className="mb-12">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <User className="w-6 h-6 text-primary" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Passionate software engineer with 5+ years of experience building scalable web applications.
                Specialized in full-stack development with expertise in modern JavaScript frameworks and cloud technologies.
                Proven track record of delivering high-quality solutions and leading development teams to success.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Code className="w-6 h-6 text-primary" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm">
                      <span className="text-muted-foreground">{edu.year}</span>
                      <span className="text-primary font-medium">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Briefcase className="w-6 h-6 text-primary" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{job.period}</p>
                    <p className="mt-2 text-muted-foreground">{job.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FolderGit2 className="w-6 h-6 text-primary" />
                Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 hover:border-primary section-transition">
                    <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
