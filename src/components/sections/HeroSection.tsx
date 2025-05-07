
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple-light/30 to-transparent -z-10" />
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 max-w-3xl font-bold">
            Turn YouTube Comments into <span className="gradient-text">Insights</span>
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-gray-600 max-w-2xl">
            Instantly understand how viewers feel about your videos — and why.
          </p>
          <p className="mb-8 text-lg text-gray-600 max-w-2xl">
            Connect your channel and get weekly sentiment summaries, trending feedback, and alerts on what's working (or not).
          </p>
          <div className="mb-12">
            <WaitlistForm />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-lg p-4 border border-gray-100 max-w-4xl">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000" 
              alt="Comment Clarity Dashboard" 
              className="w-full rounded h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
