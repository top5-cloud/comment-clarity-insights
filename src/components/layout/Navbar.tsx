
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent",
        className
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">CommentClarity</span>
        </a>

        <div className="flex gap-4">
          <Button asChild variant="outline">
            <a href="#pricing">Pricing</a>
          </Button>
          <Button asChild>
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
