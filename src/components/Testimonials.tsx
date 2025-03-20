
import Card from "./Card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform completely transformed how we prioritize our product roadmap. What used to take days of meetings now happens in minutes with much clearer outcomes.",
      author: "Sarah J.",
      role: "Product Director",
      company: "Enterprise Tech",
      rating: 5,
    },
    {
      quote: "The ability to automatically organize insights from across our tools has been game-changing. Our teams are finally aligned on what matters most.",
      author: "Michael R.",
      role: "CTO",
      company: "SaaS Platform",
      rating: 5,
    },
    {
      quote: "We've cut our decision time by 75% while improving the quality of our priorities. This is exactly what our enterprise needed to move faster.",
      author: "Lisa T.",
      role: "Operations VP",
      company: "Fortune 500",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6 animate-fade-in">
            Trusted by Enterprise Leaders
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            See how organizations like yours have transformed their approach to prioritization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              glass={true}
              className={`animate-fade-in border-none`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="text-lg italic text-foreground/90">"{testimonial.quote}"</p>
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-medium">
                    {testimonial.author.split(' ')[0][0]}
                    {testimonial.author.split(' ')[1][0]}
                  </span>
                </div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
