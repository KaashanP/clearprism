
import Card from "./Card";
import { Clock, Zap, BarChart3, PieChart, Sparkles } from "lucide-react";
import Button from "./Button";

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

        <div className="mt-20 max-w-6xl mx-auto overflow-hidden rounded-2xl animate-fade-in shadow-xl">
          <div className="bg-gradient-to-br from-indigo-50 to-white p-12 flex flex-col md:flex-row items-center justify-between border border-white/50">
            <div className="mb-10 md:mb-0 md:mr-12 md:max-w-md">
              <h3 className="text-2xl font-semibold mb-4 text-balance">
                See How AI Transforms Enterprise Decision-Making
              </h3>
              <p className="text-muted-foreground mb-6">
                Watch how our platform analyzes scattered enterprise data and transforms it into clear, 
                actionable priorities that drive measurable business outcomes.
              </p>
              <Button className="group">
                Watch Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-radial from-blue-50/50 to-transparent rounded-lg"></div>
              <div className="relative shadow-lg rounded-lg overflow-hidden border border-white/50">
                <div className="bg-slate-800 h-6 flex items-center px-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="aspect-video bg-white p-4">
                  <div className="h-full rounded bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/80 shadow-md mb-3">
                        <Play className="h-8 w-8 text-indigo-500 ml-1" />
                      </div>
                      <p className="text-sm font-medium text-slate-600">See it in action</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add missing imports
import { ArrowRight, Play } from "lucide-react";

export default Results;
