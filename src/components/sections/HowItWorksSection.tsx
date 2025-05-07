
import { Link, ArrowRight, BarChart3, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Link,
      title: "Connect your channel",
      description: "Quickly connect with OAuth + YouTube API and we'll start analyzing your comments."
    },
    {
      icon: ArrowRight,
      title: "We analyze your recent comments",
      description: "Our AI-powered sentiment analysis processes thousands of comments in minutes."
    },
    {
      icon: BarChart3,
      title: "See clear insights in your dashboard",
      description: "View sentiment trends, word clouds, and actionable feedback at a glance."
    },
    {
      icon: Mail,
      title: "Get weekly summaries in your inbox",
      description: "Stay ahead of trends with automated reports delivered straight to you."
    }
  ];

  return (
    <section className="py-16 md:py-24" id="how-it-works">
      <div className="container px-4">
        <SectionHeading 
          title="How It Works"
          subtitle="Four simple steps to turn viewer comments into actionable insights"
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FeatureCard 
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
