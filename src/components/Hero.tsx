
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute w-[1000px] h-[1000px] top-[-400px] right-[-400px] opacity-70"></div>
        <div className="blob-secondary absolute w-[800px] h-[800px] bottom-[-300px] left-[-300px] opacity-50"></div>
        <div className="absolute w-full h-[500px] top-0 inset-x-0 bg-gradient-radial from-blue-50/50 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-primary/10 text-primary animate-fade-in shadow-sm border border-primary/20">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">AI-Powered Enterprise Intelligence</span>
          </div>

          <h1 className="heading-xl mb-6 text-balance animate-fade-in">
            Crystallize Chaos into <span className="text-gradient">Strategic Clarity</span> 
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl animate-fade-in">
            Our AI transforms enterprise noise into executive wisdom. Convert scattered data into insights that drive impact, faster execution, and results.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-fade-in">
            <Button size="lg" className="group">
              Transform Your Priorities
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative w-full max-w-4xl mx-auto animate-fade-in">
            <div className="absolute inset-0 bg-gradient-radial from-blue-100/30 to-transparent rounded-xl"></div>
            <div className="relative glass-card rounded-xl overflow-hidden shadow-xl border border-white/40">
              <div className="aspect-video p-8 bg-gradient-to-br from-white to-slate-50 flex items-center justify-center">
                <div className="w-full max-w-2xl">
                  <div className="relative flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-pink-50/50 rounded-lg backdrop-blur-sm"></div>

                    {/* Visualization of transformation */}
                    <div className="relative z-10 p-8">
                      <div className="flex flex-col space-y-6">
                        {/* Input sources - visualized as flowing data */}
                        <div className="flex flex-wrap justify-center gap-4 mb-6">
                          <div className="data-card">
                            <div className="h-2 w-12 bg-red-400/70 rounded-full mb-1"></div>
                            <div className="h-2 w-16 bg-red-300/70 rounded-full"></div>
                          </div>
                          <div className="data-card">
                            <div className="h-2 w-14 bg-yellow-400/70 rounded-full mb-1"></div>
                            <div className="h-2 w-10 bg-yellow-300/70 rounded-full"></div>
                          </div>
                          <div className="data-card">
                            <div className="h-2 w-10 bg-green-400/70 rounded-full mb-1"></div>
                            <div className="h-2 w-14 bg-green-300/70 rounded-full"></div>
                          </div>
                          <div className="data-card">
                            <div className="h-2 w-12 bg-blue-400/70 rounded-full mb-1"></div>
                            <div className="h-2 w-8 bg-blue-300/70 rounded-full"></div>
                          </div>
                          <div className="data-card">
                            <div className="h-2 w-8 bg-purple-400/70 rounded-full mb-1"></div>
                            <div className="h-2 w-12 bg-purple-300/70 rounded-full"></div>
                          </div>
                        </div>

                        {/* Processing animation */}
                        <div className="flex justify-center items-center">
                          <div className="processing-circle">
                            <div className="processing-circle-inner"></div>
                          </div>
                        </div>

                        {/* Output - prioritized data */}
                        <div className="priority-container">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-4 w-4 rounded-full bg-red-500"></div>
                            <div className="flex-1 h-4 bg-gradient-to-r from-red-100 to-red-200 rounded-md"></div>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                            <div className="flex-1 h-4 bg-gradient-to-r from-amber-100 to-amber-200 rounded-md"></div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-green-500"></div>
                            <div className="flex-1 h-4 bg-gradient-to-r from-green-100 to-green-200 rounded-md"></div>
                          </div>
                        </div>
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
