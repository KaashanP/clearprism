
import { useState } from "react";
import Button from "./Button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("You're on the exclusive early access list!");
    }, 1500);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob-secondary absolute w-[800px] h-[800px] top-[-300px] right-[-300px] opacity-30"></div>
        <div className="blob absolute w-[800px] h-[800px] bottom-[-300px] left-[-300px] opacity-30"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden border-white/40 shadow-xl">
            <div className="p-12 md:p-16 relative bg-gradient-to-br from-white to-slate-50">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-indigo-100/30 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              
              <div className="relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                  <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-purple-50 text-purple-600 animate-fade-in">
                    <Sparkles className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Limited Early Access</span>
                  </div>
                
                  <h2 className="heading-lg mb-6 animate-fade-in text-balance">
                    Ready to <span className="text-gradient-alt">Transform</span> How Your Enterprise Makes Decisions?
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
                    Join forward-thinking enterprises already using our platform to cut through data noise 
                    and make better strategic decisions, faster.
                  </p>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="animate-fade-in">
                      <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                          type="email"
                          placeholder="Enter your work email"
                          className="flex-1 px-4 py-3 rounded-md border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <Button 
                          type="submit" 
                          className="whitespace-nowrap"
                          disabled={isLoading}
                        >
                          {isLoading ? "Please wait..." : (
                            <>
                              Get Priority Access
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="animate-fade-in flex items-center justify-center space-x-3 py-5 px-8 rounded-xl max-w-md mx-auto bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-green-800">Thank you for joining!</p>
                        <p className="text-sm text-green-600">We'll be in touch with your exclusive access details soon.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
