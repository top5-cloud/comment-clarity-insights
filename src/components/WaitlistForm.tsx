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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Replace with your Google Form's formResponse URL and field ID
      const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSftC0qdTQxgQZwSQvWGIzCl-igECir7vRB_80VxUsmU9yVQ9A/formResponse";
      const formData = new FormData();
      formData.append("entry.268758907", email); // Replace with your field ID

      console.log("Submitting email:", email);
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors", // Required for Google Forms
        body: formData,
      });
      console.log("Submission completed");

      toast({
        title: "Success!",
        description: "Your email has been submitted to the waitlist.",
      });

      setEmail("");
    } catch (error) {
      console.error("Error submitting to Google Form:", error);
      toast({
        title: "Error",
        description: "Failed to submit your email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 sm:flex-row">
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
          {isLoading ? "Submitting..." : buttonText}
        </Button>
      </form>
    </div>
  );
};

export default WaitlistForm;
