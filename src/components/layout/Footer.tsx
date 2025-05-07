
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">CommentClarity</h3>
            <p className="text-gray-600 mb-6 md:mb-0">
              Turn YouTube comments into actionable insights.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="link" asChild>
              <a href="#features">Features</a>
            </Button>
            <Button variant="link" asChild>
              <a href="#how-it-works">How It Works</a>
            </Button>
            <Button variant="link" asChild>
              <a href="#pricing">Pricing</a>
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 CommentClarity. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
