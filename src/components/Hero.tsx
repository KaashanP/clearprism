
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
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
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-primary/10 text-primary animate-fade-in shadow-sm border border-primary/20">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">AI-Powered Enterprise Intelligence</span>
          </div>

          {/* Main headline */}
          <h1 className="heading-xl mb-8 text-balance animate-fade-in">
            Instantly Clarify Enterprise <span className="text-gradient">Noise</span> into Strategic Objectives 
          </h1>

          {/* Three-step process visualization */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 w-full animate-fade-in">
            {/* Step 1 */}
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium mb-2">Gather Fragmented Data</h3>
              <p className="text-sm text-muted-foreground">From communication channels, meeting transcripts, and project tools</p>
            </div>
            
            {/* Step 2 */}
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-medium mb-2">Interpret Context</h3>
              <p className="text-sm text-muted-foreground">Our AI accurately understands relationships and significance</p>
            </div>
            
            {/* Step 3 */}
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-medium mb-2">Deliver Actionable Priorities</h3>
              <p className="text-sm text-muted-foreground">Drive faster decisions and measurable business impact</p>
            </div>
          </div>

          {/* CTA button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in">
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
