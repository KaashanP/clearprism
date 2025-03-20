
import Card from "./Card";
import { BarChart3, Clock, PieChart, Zap } from "lucide-react";

const Results = () => {
  const results = [
    {
      title: "Time Saved",
      value: "90%",
      description: "Less time spent sorting and organizing data",
      icon: <Clock className="h-8 w-8 text-primary" />,
    },
    {
      title: "Decision Speed",
      value: "4x",
      description: "Faster strategic decision-making process",
      icon: <Zap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Productivity Gain",
      value: "60%",
      description: "Increase in team productivity and focus",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
    },
    {
      title: "Alignment Improvement",
      value: "85%",
      description: "Better team alignment on priorities",
      icon: <PieChart className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section id="results" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6 animate-fade-in">
            Spend 90% Less Time Sorting Data, and More Time Making Strategic Decisions
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Our platform delivers measurable improvements in productivity, decision-making,
            and strategic alignment across the enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <Card
              key={index}
              glass={true}
              className={`text-center p-8 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-6">
                {result.icon}
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">{result.value}</h3>
              <p className="font-medium mb-2">{result.title}</p>
              <p className="text-sm text-muted-foreground">{result.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-20 glass-card max-w-5xl mx-auto overflow-hidden rounded-xl animate-fade-in">
          <div className="aspect-[16/6] bg-white p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">
                From Scattered Data to Strategic Action
              </h3>
              <p className="text-muted-foreground max-w-md">
                See how enterprises use our platform to transform their decision-making process
                and align teams around clear priorities.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 h-full flex items-center justify-center">
              <div className="w-full max-w-xs relative">
                <div className="absolute inset-0 bg-gradient-radial from-blue-50/50 to-transparent rounded-lg"></div>
                <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                  <div className="h-4 bg-slate-100 flex items-center px-2">
                    <div className="w-2 h-2 rounded-full bg-red-400 mr-1"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mr-1"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex justify-between items-center mb-4">
                      <div className="h-4 w-24 bg-slate-100 rounded"></div>
                      <div className="h-4 w-16 bg-primary/20 rounded"></div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="h-3 w-full bg-slate-100 rounded"></div>
                      <div className="h-3 w-5/6 bg-slate-100 rounded"></div>
                      <div className="h-3 w-4/6 bg-slate-100 rounded"></div>
                    </div>
                    
                    <div className="h-24 rounded bg-primary/10 flex items-center justify-center">
                      <div className="h-16 w-16">
                        <div className="h-full w-full rounded-full border-4 border-t-primary border-r-primary/40 border-b-primary/10 border-l-primary/70 animate-spin" style={{ animationDuration: '3s' }}></div>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="h-2 w-4/6 bg-slate-100 rounded"></div>
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

export default Results;
