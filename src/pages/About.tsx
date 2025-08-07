import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";
import SkillBadge from "@/components/SkillBadge";

const About = () => {
  const experiences = [
    {
      title: "Contributor",
      organization: "GirlScript Summer of Code (GSSoC)",
      icon: Award,
      description: "Contributing to open-source projects and collaborating with developers worldwide."
    },
    {
      title: "Personal Development Trainee",
      organization: "ISKCON",
      icon: Users,
      description: "Focused on personal growth, leadership skills, and community service."
    },
    {
      title: "Arcade Facilitator",
      organization: "Arcade Facilitator Program",
      icon: BookOpen,
      description: "Facilitating learning experiences and helping peers in their educational journey."
    },
    {
      title: "Class Representative",
      organization: "Graphic Era Hill University",
      icon: Users,
      description: "Leading class initiatives and representing student interests to faculty."
    }
  ];

  const skills = {
    languages: ["Python", "C", "JavaScript", "HTML", "CSS"],
    domains: ["Machine Learning", "Natural Language Processing", "Web Development"],
    learning: ["Data Structures & Algorithms", "Cybersecurity", "Large Language Models"]
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 lg:px-8">
      <div className="container mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am a passionate Computer Science student with a love for problem-solving, 
            design, and innovation. I enjoy building projects that combine creativity and technology.
          </p>
        </div>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Education</h2>
          <Card className="glass p-8 max-w-2xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">B.Tech in Computer Science Engineering</h3>
                <p className="text-primary font-medium">Graphic Era Hill University</p>
                <p className="text-muted-foreground mt-1">
                  Currently pursuing my undergraduate degree with a focus on software development, 
                  artificial intelligence, and innovative technology solutions.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass p-6 hover:glow transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <exp.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-primary text-sm font-medium">{exp.organization}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Skills & Technologies</h2>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill) => (
                  <SkillBadge key={skill} skill={skill} category="language" />
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Domains & Specializations</h3>
              <div className="flex flex-wrap gap-3">
                {skills.domains.map((skill) => (
                  <SkillBadge key={skill} skill={skill} category="domain" />
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Currently Learning</h3>
              <div className="flex flex-wrap gap-3">
                {skills.learning.map((skill) => (
                  <SkillBadge key={skill} skill={skill} category="framework" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;