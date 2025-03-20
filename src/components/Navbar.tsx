
import { useState, useEffect } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold text-primary">iPersona</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#results" className="text-foreground/80 hover:text-primary transition-colors">
            Results
          </a>
          <Button>Early Access</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#results"
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </a>
            <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
              Early Access
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
