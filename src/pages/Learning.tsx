import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Code, Shield, Brain, Github, Video, FileText } from "lucide-react";

const Learning = () => {
  const learningTopics = [
    {
      title: "SWOC Analysis",
      icon: goal,
      progress: 100,
      description: "learn about SWOC(Strengths, Weaknesses, Opportunities, Challenges) analysis to understand academic growth areas with a positive mindset",
      resources: [
        { type: "Assignments", title: "Assignment", url: "#" },
        { type: "Vedios", title: "Vedio", url: "#" },
        { type: "Notes", title: "My Notes", url: "#" }
      ],
      status: "Active"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      progress: 45,
      description: "Learning ethical hacking, network security, and cybersecurity fundamentals.",
      resources: [
        { type: "github", title: "Security Tools Collection", url: "#" },
        { type: "notes", title: "Pentesting Methodology", url: "#" }
      ],
      status: "In Progress"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      progress: 85,
      description: "Deep diving into ML algorithms, neural networks, and practical implementations.",
      resources: [
        { type: "github", title: "ML Projects Repository", url: "#" },
        { type: "video", title: "Neural Network Implementations", url: "#" },
        { type: "notes", title: "ML Theory & Mathematics", url: "#" }
      ],
      status: "Advanced"
    },
    {
      title: "Natural Language Processing",
      icon: BookOpen,
      progress: 70,
      description: "Exploring text processing, sentiment analysis, and language models.",
      resources: [
        { type: "github", title: "NLP Experiments", url: "#" },
        { type: "notes", title: "Transformer Architecture", url: "#" }
      ],
      status: "Active"
    },
    {
      title: "Large Language Models",
      icon: Brain,
      progress: 30,
      description: "Understanding LLM architecture, fine-tuning, and practical applications.",
      resources: [
        { type: "github", title: "LLM Fine-tuning Scripts", url: "#" },
        { type: "video", title: "GPT Architecture Deep Dive", url: "#" }
      ],
      status: "Starting"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Advanced": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Active": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "In Progress": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Starting": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "github": return Github;
      case "video": return Video;
      case "notes": return FileText;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 lg:px-8">
      <div className="container mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold">Learning Journey</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning is at the core of my growth. Here's what I'm currently exploring 
            and the resources I'm using to expand my knowledge.
          </p>
        </div>

        {/* Learning Topics */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Current Focus Areas</h2>
            <Button variant="outline" size="sm">
              Add New Topic
            </Button>
          </div>

          <div className="grid gap-6">
            {learningTopics.map((topic, index) => (
              <Card key={index} className="glass p-6 hover:glow transition-all duration-300">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <topic.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{topic.title}</h3>
                        <Badge className={`text-xs ${getStatusColor(topic.status)}`}>
                          {topic.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">{topic.progress}%</span>
                      <p className="text-xs text-muted-foreground">Complete</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <Progress value={topic.progress} className="h-2" />

                  {/* Description */}
                  <p className="text-muted-foreground">{topic.description}</p>

                  {/* Resources */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Resources & Materials</h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {topic.resources.map((resource, resourceIndex) => {
                        const IconComponent = getResourceIcon(resource.type);
                        return (
                          <Button
                            key={resourceIndex}
                            variant="ghost"
                            size="sm"
                            className="justify-start h-auto p-2 text-xs"
                            asChild
                          >
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                              <IconComponent className="h-3 w-3 mr-2" />
                              {resource.title}
                            </a>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="glass p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-center mb-8">Learning Statistics</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-muted-foreground">Active Topics</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">61%</div>
              <div className="text-muted-foreground">Average Progress</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">12</div>
              <div className="text-muted-foreground">Resources</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Learning;
