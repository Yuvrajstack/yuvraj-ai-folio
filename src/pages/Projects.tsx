import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Fee Calculator Website",
      description: "A comprehensive tool designed to calculate university fees based on department and semester. Features an intuitive interface that helps students and parents quickly determine educational costs with accurate calculations.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Chaaya - Death Person Recreation AI",
      description: "An innovative AI simulator that recreates the voice, thoughts, and personality of a lost loved one using advanced artificial intelligence. This project combines machine learning with emotional computing to provide comfort and connection.",
      technologies: ["Python", "Machine Learning", "NLP", "AI", "Deep Learning"],
      githubLink: "#"
    },
    {
      title: "GAN-based Song Generator",
      description: "An AI-powered music generation project that creates original songs from text prompts using Generative Adversarial Networks. The system can compose music in various styles and genres based on user input.",
      technologies: ["Python", "GANs", "TensorFlow", "Music AI", "Deep Learning"],
      githubLink: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 lg:px-8">
      <div className="container mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects spanning web development, artificial intelligence, 
            and innovative solutions that combine creativity with cutting-edge technology.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <span className="text-muted-foreground">{projects.length} projects</span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6 pt-12">
          <div className="glass p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:glow transition-all duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary/20 text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;