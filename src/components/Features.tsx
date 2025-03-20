
import Card from "./Card";
import { Database, Brain, Sliders, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Unified Data Capture",
      description:
        "Seamlessly integrate data from Jira, Slack, meetings, and internal documentation into a single source of truth.",
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      title: "AI-Driven Prioritization",
      description:
        "Automatically surface and rank tasks based on strategic relevance, stakeholder impact, and resource requirements.",
      icon: <Brain className="h-10 w-10 text-primary" />,
    },
    {
      title: "Customizable Templates",
      description:
        "Tailor prioritization criteria and templates to align with your specific workflow and strategic objectives.",
      icon: <Sliders className="h-10 w-10 text-primary" />,
    },
    {
      title: "Real-Time Collaboration",
      description:
        "Keep teams aligned with instantly sharable, prioritized outcomes for better decision-making and execution.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6 animate-fade-in">
            Prioritization-Centric Features
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Purpose-built tools designed to transform enterprise data chaos into
            strategic clarity and actionable priorities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              glass={true}
              hover={true}
              className={`animate-fade-in border-none`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
