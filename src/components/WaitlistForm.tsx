
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
  
  // You need to replace this with your actual Google Form URL
  // Format: https://docs.google.com/forms/d/e/{YOUR_FORM_ID}/formResponse
  const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
  
  // Replace 'entry.123456789' with the actual entry ID from your Google Form
  // You can find this by inspecting the form in your browser
  const emailEntryId = "entry.123456789";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Creating a form data object
      const formData = new FormData();
      formData.append(emailEntryId, email);
      
      // Using no-cors mode since Google Forms doesn't support CORS
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });
      
      // Since we're using no-cors mode, we won't get a proper response
      // So we just assume success
      toast({
        title: "Success!",
        description: "You've been added to the waitlist.",
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
