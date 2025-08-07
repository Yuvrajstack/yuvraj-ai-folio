import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail, Star, Users, Code, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/yuvraj-profile.jpg";

const Home = () => {
  const stats = [
    { icon: Code, label: "Projects", value: "3+", color: "text-blue-400" },
    { icon: Users, label: "Contributions", value: "50+", color: "text-green-400" },
    { icon: Trophy, label: "Achievements", value: "5+", color: "text-yellow-400" },
    { icon: Star, label: "Skills", value: "8+", color: "text-purple-400" }
  ];

  const highlights = [
    "🚀 AI & ML Enthusiast",
    "💻 Full-Stack Developer", 
    "🎯 Problem Solver",
    "📚 Continuous Learner"
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 lg:px-8 pt-20 relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Main Content - 7 columns */}
            <div className="lg:col-span-7 space-y-8 animate-fade-in">
              {/* Status Badge */}
              <Badge className="bg-green-500/10 text-green-400 border-green-500/20 px-4 py-2 text-sm font-medium">
                🟢 Available for opportunities
              </Badge>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Hi, I'm{" "}
                  <span className="hero-gradient block lg:inline">
                    Yuvraj Kabadwal
                  </span>
                </h1>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-2xl lg:text-3xl text-muted-foreground">
                    Computer Science Student
                  </span>
                  <span className="text-2xl lg:text-3xl">&</span>
                  <span className="text-2xl lg:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                    AI Innovator
                  </span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Passionate about building <span className="text-primary font-semibold">intelligent solutions</span> that 
                combine creativity and cutting-edge technology. Currently exploring the frontiers of AI, 
                machine learning, and innovative software development.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 text-sm text-muted-foreground"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="glow group relative overflow-hidden">
                  <Link to="/projects">
                    <span className="relative z-10 flex items-center">
                      Explore My Work
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Download Resume
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4 pt-6">
                <span className="text-sm text-muted-foreground">Connect with me:</span>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" className="hover:glow hover:scale-110 transition-all duration-300">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:glow hover:scale-110 transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:glow hover:scale-110 transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Profile & Stats - 5 columns */}
            <div className="lg:col-span-5 flex flex-col items-center space-y-8">
              {/* Profile Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-glow-pulse group-hover:opacity-50 transition-opacity"></div>
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Yuvraj Kabadwal"
                    className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/10 animate-float group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30 animate-float" style={{ animationDelay: '1s' }}>
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-secondary/30 animate-float" style={{ animationDelay: '2s' }}>
                    <Star className="w-6 h-6 text-secondary" />
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                {stats.map((stat, index) => (
                  <Card 
                    key={index} 
                    className="glass p-4 text-center hover:glow transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-lg font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Current Focus Section */}
      <section className="py-20 px-4 lg:px-8 border-t border-white/5 relative z-10">
        <div className="container mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-6 py-2 text-sm font-medium">
                🎯 Current Learning Focus
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Expanding My Knowledge
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Continuously learning and adapting to the latest technologies and methodologies in computer science and AI.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {["DSA", "Cybersecurity", "Machine Learning", "NLP", "Large Language Models"].map((topic, index) => (
                <Card
                  key={topic}
                  className="glass p-6 hover:glow transition-all duration-300 hover:scale-105 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary font-bold text-lg">{topic.charAt(0)}</span>
                    </div>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{topic}</h3>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button variant="outline" size="lg" asChild className="group">
                <Link to="/learning">
                  <span className="flex items-center">
                    View Learning Journey
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;