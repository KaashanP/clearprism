
import Card from "./Card";
import { Brain, Sparkles, Puzzle, FlaskConical } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Neural Integration",
      description:
        "Our AI listens to your enterprise's digital heartbeat, seamlessly unifying insights across all platforms into a single source of truth.",
      icon: <Brain className="h-10 w-10 text-indigo-500" />,
    },
    {
      title: "Prismatic Clarity",
      description:
        "Transform information overload into crystal-clear priorities. Our AI cuts through noise to identify what truly moves your business forward.",
      icon: <Sparkles className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Modular Customization",
      description:
        "Shape your prioritization framework to match your unique business DNA. Tailor criteria that align perfectly with your strategic vision.",
      icon: <Puzzle className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Catalyzed Execution",
      description:
        "Slash decision cycles from weeks to hours. Drive alignment and focused action with instantly shareable, crystal-clear priorities.",
      icon: <FlaskConical className="h-10 w-10 text-red-500" />,
    },
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-50/30 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-indigo-50 text-indigo-600 animate-fade-in">
            <Brain className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Game-Changing Capabilities</span>
          </div>
          
          <h2 className="heading-lg mb-6 animate-fade-in">
            Transformative <span className="text-gradient-alt">Features</span> That Elevate Enterprise Decision-Making
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in">
            Purpose-built AI that transforms enterprise data chaos into strategic clarity, 
            empowering teams to focus on what truly matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              glass={true}
              hover={true}
              className={`animate-fade-in feature-card border-none`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="feature-icon-container">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
