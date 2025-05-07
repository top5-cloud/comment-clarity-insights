
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface WaitlistFormProps {
  variant?: "primary" | "light";
  buttonText?: string;
}

const WaitlistForm = ({ 
  variant = "primary", 
  buttonText = "Join Waitlist"
}: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to the waitlist.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`${
          variant === "light" ? "bg-white/90 text-gray-900" : ""
        }`}
      />
      <Button 
        type="submit" 
        disabled={isLoading}
        className={`${variant === "light" ? "bg-brand-purple hover:bg-brand-purple-dark text-white" : ""}`}
      >
        {isLoading ? "Adding..." : buttonText}
      </Button>
    </form>
  );
};

export default WaitlistForm;
