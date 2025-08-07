import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/yuvraj-profile.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="hero-gradient">Yuvraj Kabadwal</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  Computer Science Student & AI Enthusiast
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Passionate about problem-solving, design, and innovation. I enjoy building 
                projects that combine creativity and technology, with a focus on AI and 
                machine learning applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="glow">
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <Button variant="ghost" size="icon" className="hover:glow">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:glow">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:glow">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-glow-pulse"></div>
                <img
                  src={profileImage}
                  alt="Yuvraj Kabadwal"
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/10 animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Current Focus */}
      <section className="py-16 px-4 lg:px-8 border-t border-white/10">
        <div className="container mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold">Currently Learning</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["DSA", "Cybersecurity", "Machine Learning", "NLP", "Large Language Models"].map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
            <Button variant="outline" asChild>
              <Link to="/learning">
                View Learning Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;