
import { useState } from "react";
import Button from "./Button";
import { Check, ArrowRight } from "lucide-react";
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
      toast.success("Thanks for joining our early access list!");
    }, 1500);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden border-none">
            <div className="p-8 md:p-12 relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-blue-100/30 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              
              <div className="relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="heading-lg mb-6 animate-fade-in text-balance">
                    Ready to Take Control of Your Enterprise Data?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
                    Join our early access program and be among the first to transform how your organization prioritizes.
                  </p>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="animate-fade-in">
                      <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                              Join Early Access
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="animate-fade-in flex items-center justify-center space-x-2 text-green-600 bg-green-50 py-4 px-6 rounded-md max-w-md mx-auto">
                      <Check className="h-5 w-5" />
                      <span>Thanks! We'll be in touch soon.</span>
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
