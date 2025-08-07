import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail, Star, Users, Code, Trophy, Sparkles, Zap, Brain, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import profileImage from "@/assets/yuvraj-profile.jpg";
import { Scene3D } from "@/components/3d/Scene3D";
import { TypingAnimation } from "@/components/TypingAnimation";

const Home = () => {
  const stats = [
    { icon: Code, label: "Projects", value: "3+", color: "text-blue-400" },
    { icon: Users, label: "Contributions", value: "50+", color: "text-green-400" },
    { icon: Trophy, label: "Achievements", value: "5+", color: "text-yellow-400" },
    { icon: Star, label: "Skills", value: "8+", color: "text-purple-400" }
  ];

  const dynamicTitles = [
    "AI Innovator",
    "Problem Solver", 
    "Code Architect",
    "Tech Enthusiast",
    "ML Engineer"
  ];

  const techSkills = [
    { name: "Python", icon: "🐍", level: 90 },
    { name: "Machine Learning", icon: "🤖", level: 85 },
    { name: "JavaScript", icon: "⚡", level: 80 },
    { name: "React", icon: "⚛️", level: 85 },
    { name: "AI/NLP", icon: "🧠", level: 75 }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 opacity-30">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-[32rem] h-[32rem] bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20 w-24 h-24 border border-primary/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-accent/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 lg:px-8 pt-20 relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Main Content - 7 columns */}
            <div className="lg:col-span-7 space-y-8 animate-fade-in relative z-10">
              {/* Status Badge with Enhanced Design */}
              <div className="flex items-center gap-4">
                <Badge className="bg-green-500/10 text-green-400 border-green-500/20 px-6 py-3 text-sm font-medium animate-pulse">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
                  Available for opportunities
                </Badge>
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2 text-xs">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Open Source Contributor
                </Badge>
              </div>

              {/* Enhanced Main Heading with 3D Effects */}
              <div className="space-y-6">
                <div className="relative">
                  <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                    <span className="block text-foreground/90">Hi, I'm</span>
                    <span className="hero-gradient block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                      Yuvraj Kabadwal
                    </span>
                  </h1>
                  
                  {/* Floating 3D Elements around text */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-lg rotate-12 animate-float backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 items-center text-2xl lg:text-4xl">
                  <span className="text-muted-foreground">Computer Science Student &</span>
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold min-w-[200px]">
                    <TypingAnimation texts={dynamicTitles} speed={150} />
                  </div>
                </div>
              </div>
              
              {/* Enhanced Description with Interactive Elements */}
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                  Passionate about building <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg">intelligent solutions</span> that 
                  combine creativity and cutting-edge technology. Currently exploring the frontiers of 
                  <span className="text-accent font-semibold"> AI, machine learning</span>, and innovative software development.
                </p>

                {/* Tech Skills with Progress Indicators */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {techSkills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="glass p-4 rounded-xl hover:glow transition-all duration-300 group cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-foreground">{skill.name}</div>
                          <div className="w-full bg-muted/30 rounded-full h-1.5 mt-1">
                            <div 
                              className="bg-gradient-to-r from-primary to-accent h-1.5 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced CTA Buttons with 3D Effects */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Button size="lg" asChild className="glow group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 px-8 py-4 text-lg">
                  <Link to="/projects">
                    <span className="relative z-10 flex items-center">
                      <Rocket className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Explore My Universe
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" className="group border-2 border-primary/30 hover:border-primary px-8 py-4 text-lg backdrop-blur-sm">
                  <Download className="mr-3 h-5 w-5 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                  Download Resume
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                </Button>
              </div>
              
              {/* Enhanced Social Links with 3D Hover Effects */}
              <div className="flex items-center gap-6 pt-8">
                <span className="text-muted-foreground font-medium">Connect & Collaborate:</span>
                <div className="flex gap-4">
                  <Button variant="ghost" size="icon" className="hover:glow hover:scale-125 transition-all duration-300 rounded-xl relative group">
                    <Github className="h-6 w-6 transition-transform group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:glow hover:scale-125 transition-all duration-300 rounded-xl relative group">
                    <Linkedin className="h-6 w-6 transition-transform group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:glow hover:scale-125 transition-all duration-300 rounded-xl relative group">
                    <Mail className="h-6 w-6 transition-transform group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                </div>
              </div>
            </div>
            
            
            {/* Enhanced Profile & Stats - 5 columns */}
            <div className="lg:col-span-5 flex flex-col items-center space-y-8 relative z-10">
              {/* 3D Profile Image with Multiple Layers */}
              <div className="relative group">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-40 animate-glow-pulse group-hover:opacity-60 transition-opacity scale-125"></div>
                
                {/* Middle glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary rounded-full blur-xl opacity-30 animate-glow-pulse group-hover:opacity-50 transition-opacity scale-110" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Profile container */}
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Yuvraj Kabadwal"
                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/20 animate-float group-hover:scale-105 transition-all duration-700 shadow-2xl"
                  />
                  
                  {/* Floating Tech Icons with 3D Effect */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 glass rounded-2xl flex items-center justify-center animate-float backdrop-blur-lg border border-primary/30 group-hover:scale-110 transition-transform" style={{ animationDelay: '1s' }}>
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 glass rounded-2xl flex items-center justify-center animate-float backdrop-blur-lg border border-secondary/30 group-hover:scale-110 transition-transform" style={{ animationDelay: '2s' }}>
                    <Zap className="w-8 h-8 text-secondary" />
                  </div>
                  
                  <div className="absolute top-1/4 -left-8 w-16 h-16 glass rounded-2xl flex items-center justify-center animate-float backdrop-blur-lg border border-accent/30 group-hover:scale-110 transition-transform" style={{ animationDelay: '3s' }}>
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  
                  <div className="absolute top-3/4 -right-8 w-16 h-16 glass rounded-2xl flex items-center justify-center animate-float backdrop-blur-lg border border-green-500/30 group-hover:scale-110 transition-transform" style={{ animationDelay: '4s' }}>
                    <Star className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Cards with 3D Effects */}
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                {stats.map((stat, index) => (
                  <Card 
                    key={index} 
                    className="glass p-6 text-center hover:glow transition-all duration-500 hover:scale-110 cursor-pointer group relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">{stat.value}</div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </div>
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