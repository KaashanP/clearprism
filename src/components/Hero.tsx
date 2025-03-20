
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
