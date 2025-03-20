
import Card from "./Card";
import { Clock, Zap, BarChart3, PieChart, Sparkles } from "lucide-react";

const Results = () => {
  const results = [
    {
      title: "Time Reclaimed",
      value: "90%",
      description: "Less time wasted on data sorting, more focus on strategic action",
      icon: <Clock className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "Decision Velocity",
      value: "4x",
      description: "Faster strategic decisions with AI-powered clarity",
      icon: <Zap className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Productivity Surge",
      value: "60%",
      description: "Boost in team effectiveness and strategic focus",
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Team Alignment",
      value: "85%",
      description: "Improved organizational clarity on true priorities",
      icon: <PieChart className="h-8 w-8 text-pink-500" />,
    },
  ];

  return (
    <section id="results" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-dot-pattern absolute inset-0 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-50/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-purple-50/20 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-50 text-blue-600 animate-fade-in">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Measurable Impact</span>
          </div>
          
          <h2 className="heading-lg mb-6 animate-fade-in">
            Transform Information <span className="text-gradient">Overload</span> into Decision <span className="text-gradient">Superpower</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in">
            Our platform delivers quantifiable improvements across your entire decision-making
            ecosystem, turning data chaos into your competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <Card
              key={index}
              glass={true}
              className={`text-center p-8 animate-fade-in enhanced-card`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/80 to-slate-50 mx-auto flex items-center justify-center mb-6 shadow-md border border-white/50">
                {result.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2 text-gradient">{result.value}</h3>
              <p className="font-medium mb-2">{result.title}</p>
              <p className="text-sm text-muted-foreground">{result.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
