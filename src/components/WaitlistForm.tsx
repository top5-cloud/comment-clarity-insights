
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Save } from "lucide-react";

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
  const [savedEmails, setSavedEmails] = useState<string[]>([]);
  const { toast } = useToast();
  
  // Load saved emails from localStorage on component mount
  useEffect(() => {
    const storedEmails = localStorage.getItem("waitlistEmails");
    if (storedEmails) {
      setSavedEmails(JSON.parse(storedEmails));
    }
  }, []);

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
      // Add email to the saved list if it's not already there
      if (!savedEmails.includes(email)) {
        const updatedEmails = [...savedEmails, email];
        setSavedEmails(updatedEmails);
        
        // Store in localStorage for persistence
        localStorage.setItem("waitlistEmails", JSON.stringify(updatedEmails));
        
        toast({
          title: "Success!",
          description: "You've been added to the waitlist.",
        });
      } else {
        toast({
          title: "Already Subscribed",
          description: "This email is already on the waitlist.",
        });
      }
      
      setEmail("");
    } catch (error) {
      console.error("Error saving email:", error);
      toast({
        title: "Error",
        description: "Failed to save your email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const downloadEmailsAsFile = () => {
    if (savedEmails.length === 0) {
      toast({
        title: "No Emails",
        description: "There are no emails to download.",
        variant: "destructive",
      });
      return;
    }
    
    // Create content for the text file
    const content = savedEmails.join("\n");
    
    // Create a blob with the content
    const blob = new Blob([content], { type: "text/plain" });
    
    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "waitlist-emails.txt";
    
    // Trigger download
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Started",
      description: `Downloaded ${savedEmails.length} email addresses.`,
    });
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
          {isLoading ? "Adding..." : buttonText}
        </Button>
      </form>
      
      {savedEmails.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <p className={`text-sm ${variant === "light" ? "text-white/90" : "text-gray-500"}`}>
            {savedEmails.length} {savedEmails.length === 1 ? "email" : "emails"} collected
          </p>
          <Button
            onClick={downloadEmailsAsFile}
            variant="outline"
            size="sm"
            className={`${variant === "light" ? "bg-white/20 text-white border-white/30 hover:bg-white/30" : ""}`}
          >
            <Save className="mr-2 h-4 w-4" />
            Download List
          </Button>
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;
