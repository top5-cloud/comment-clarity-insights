
import { MessageSquare, Clock, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="problem">
      <div className="container px-4">
        <SectionHeading 
          title="Reading Every Comment? That's Not Scalable."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="p-3 mb-4 bg-brand-purple-light rounded-full">
              <MessageSquare className="h-6 w-6 text-brand-purple" />
            </div>
            <h3 className="text-xl font-medium mb-2">Drowning in thousands of comments?</h3>
            <p className="text-gray-600">
              Stop struggling to manually parse through hundreds of comments on every video.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="p-3 mb-4 bg-brand-purple-light rounded-full">
              <TrendingUp className="h-6 w-6 text-brand-purple" />
            </div>
            <h3 className="text-xl font-medium mb-2">Struggling to tell which videos are resonating?</h3>
            <p className="text-gray-600">
              Know exactly which content performs best with your audience at a glance.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="p-3 mb-4 bg-brand-purple-light rounded-full">
              <Clock className="h-6 w-6 text-brand-purple" />
            </div>
            <h3 className="text-xl font-medium mb-2">Missing subtle feedback that could improve your content?</h3>
            <p className="text-gray-600">
              Catch valuable suggestions and trends you might otherwise miss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
