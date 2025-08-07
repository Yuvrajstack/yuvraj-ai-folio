interface SkillBadgeProps {
  skill: string;
  category?: "language" | "framework" | "tool" | "domain";
}

const SkillBadge = ({ skill, category = "language" }: SkillBadgeProps) => {
  const getCategoryStyles = () => {
    switch (category) {
      case "language":
        return "bg-primary/10 text-primary border-primary/20";
      case "framework":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "tool":
        return "bg-accent/10 text-accent border-accent/20";
      case "domain":
        return "bg-muted/20 text-foreground border-muted/30";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <span 
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${getCategoryStyles()}`}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;