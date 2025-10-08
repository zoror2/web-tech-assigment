import { Mail, Phone, MapPin, Linkedin, Github, Code, Briefcase, GraduationCap, FolderGit2, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileHeader from "@/assets/profile-header.jpg";

const Resume = () => {
  const skills = [
    "Python", "Machine Learning", "TensorFlow", "PyTorch", "AI/ML", "Deep Learning",
    "JavaScript", "React", "Chrome Extensions", "Flask", "SQL", "Git"
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Sri Sairam College of Engineering",
      year: "2022 - Present (3rd Year)",
      gpa: ""
    },
    {
      degree: "Pre-University College (PUC)",
      institution: "Kumarns PUC",
      year: "2020 - 2022",
      gpa: ""
    }
  ];

  const experience = [
    {
      title: "AI/ML Intern",
      company: "Maitrii Infotech",
      period: "2024",
      description: "Worked on machine learning projects including plant disease detection system. Gained hands-on experience in developing and deploying AI models for real-world applications."
    }
  ];

  const projects = [
    {
      name: "Phishing Detector",
      description: "Chrome extension that detects and alerts users about potential phishing websites using machine learning algorithms",
      tech: ["JavaScript", "Chrome API", "Python", "ML"]
    },
    {
      name: "Plant Disease Detector",
      description: "AI-powered system to identify plant diseases from images, developed during internship at Maitrii Infotech",
      tech: ["Python", "TensorFlow", "CNN", "Flask"]
    },
    {
      name: "College Hall Booking System",
      description: "Web-based system for managing and booking college halls and auditoriums, built for Sri Sairam College of Engineering",
      tech: ["React", "Node.js", "MySQL", "Express"]
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Prajwal H M</h1>
          <p className="text-xl text-white/90 mb-6">AI/ML Developer & Computer Science Student</p>
          <div className="flex flex-wrap gap-4 text-white/90">
            <a href="mailto:phm340701@gmail.com" className="flex items-center gap-2 hover:text-white section-transition">
              <Mail className="w-4 h-4" />
              <span>phm340701@gmail.com</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white section-transition">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bangalore, Karnataka</span>
            </span>
            <a href="https://linkedin.com/in/prajwalhm" className="flex items-center gap-2 hover:text-white section-transition">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/prajwalhm" className="flex items-center gap-2 hover:text-white section-transition">
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
                Passionate Computer Science student and AI/ML enthusiast currently pursuing Bachelor of Engineering at Sri Sairam College of Engineering.
                Experienced in developing machine learning models and web applications with hands-on internship experience at Maitrii Infotech.
                Certified in AI technologies by NVIDIA and Microsoft Azure, with a strong foundation in deep learning and cloud computing.
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

        {/* Certifications Section */}
        <section className="mb-12">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GraduationCap className="w-6 h-6 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-lg">Generative AI with Diffusion Models</h3>
                  <p className="text-muted-foreground">NVIDIA</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-lg">Azure Fundamentals Cloud Certification</h3>
                  <p className="text-muted-foreground">Microsoft</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-lg">Generative AI Workshop</h3>
                  <p className="text-muted-foreground">Indian Institute of Science (IISc), Bangalore</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Prajwal H M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
