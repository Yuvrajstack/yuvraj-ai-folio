import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  liveLink, 
  githubLink,
  image 
}: ProjectCardProps) => {
  return (
    <Card className="glass p-6 group hover:glow transition-all duration-300 hover:scale-[1.02]">
      {image && (
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Project Preview</span>
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 line-clamp-3">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-2">
        {liveLink && (
          <Button variant="default" size="sm" asChild>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
        {githubLink && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;