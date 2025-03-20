
import { ArrowRight } from "lucide-react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute w-[1000px] h-[1000px] top-[-400px] right-[-400px]"></div>
        <div className="absolute w-full h-[500px] top-0 inset-x-0 bg-gradient-radial from-blue-50/50 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-primary/10 text-primary animate-fade-in">
            <span className="text-sm font-medium">Enterprise Data Transformation</span>
          </div>

          <h1 className="heading-xl mb-6 text-balance animate-fade-in">
            Instantly Turn <span className="text-primary">Messy Enterprise Data</span> into Clear Priorities
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl animate-fade-in">
            AI-powered platform that seamlessly organizes fragmented insights from Jira tickets, Slack conversations, internal docs, and meetings into actionable tasks and strategic priorities.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-fade-in">
            <Button size="lg" className="group">
              Prioritize Instantly
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              See How It Works
            </Button>
          </div>

          <div className="relative w-full max-w-4xl mx-auto animate-fade-in">
            <div className="absolute inset-0 bg-gradient-radial from-blue-100/30 to-transparent rounded-xl"></div>
            <div className="relative glass-card rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-[16/9] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center p-8">
                  <div className="w-full grid grid-cols-3 gap-4">
                    <div className="h-32 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center">
                      <span className="text-lg font-semibold text-slate-400">Jira</span>
                    </div>
                    <div className="h-32 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center">
                      <span className="text-lg font-semibold text-slate-400">Slack</span>
                    </div>
                    <div className="h-32 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center">
                      <span className="text-lg font-semibold text-slate-400">Docs</span>
                    </div>
                  </div>
                  <div className="my-8 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <div className="w-full h-32 rounded-lg bg-white shadow-sm border border-slate-200 p-4">
                    <div className="flex flex-col h-full">
                      <div className="w-1/3 h-4 rounded bg-primary/20 mb-2"></div>
                      <div className="flex-1 grid grid-cols-4 gap-2">
                        <div className="h-4 rounded bg-green-100"></div>
                        <div className="h-4 rounded bg-blue-100"></div>
                        <div className="h-4 rounded bg-yellow-100"></div>
                        <div className="h-4 rounded bg-purple-100"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="h-4 rounded bg-slate-100"></div>
                        <div className="h-4 rounded bg-slate-100"></div>
                        <div className="h-4 rounded bg-slate-100"></div>
                      </div>
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

export default Hero;
