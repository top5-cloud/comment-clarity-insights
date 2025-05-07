
import SectionHeading from "@/components/SectionHeading";

const DashboardPreviewSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-purple-light/30">
      <div className="container px-4">
        <SectionHeading 
          title="Sneak Peek at Your Dashboard"
          subtitle="Here's a preview of the insights you'll get from Comment Clarity"
          center={true}
        />
        
        <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden max-w-5xl mx-auto">
          <div className="p-4 border-b bg-gray-50">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-4 text-sm text-gray-500">Comment Clarity Dashboard</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div className="col-span-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h4 className="font-medium mb-3">Sentiment Over Time</h4>
              <div className="h-48 flex items-end space-x-2">
                <div className="w-1/12 bg-brand-purple h-1/3 rounded-t"></div>
                <div className="w-1/12 bg-brand-purple h-2/5 rounded-t"></div>
                <div className="w-1/12 bg-brand-purple h-1/2 rounded-t"></div>
                <div className="w-1/12 bg-brand-purple h-3/5 rounded-t"></div>
                <div className="w-1/12 bg-brand-purple h-1/4 rounded-t"></div>
                <div className="w-1/12 bg-brand-purple h-2/3 rounded-t"></div>
                <div className="w-1/12 bg-brand-blue h-3/4 rounded-t"></div>
                <div className="w-1/12 bg-brand-blue h-4/5 rounded-t"></div>
                <div className="w-1/12 bg-brand-blue h-full rounded-t"></div>
                <div className="w-1/12 bg-brand-blue h-4/5 rounded-t"></div>
                <div className="w-1/12 bg-brand-blue h-2/3 rounded-t"></div>
                <div className="w-1/12 bg-brand-blue h-3/4 rounded-t"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>May 1</span>
                <span>May 15</span>
                <span>May 30</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h4 className="font-medium mb-3">Sentiment Breakdown</h4>
              <div className="flex flex-col space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Positive</span>
                    <span>68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '68%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Neutral</span>
                    <span>24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-500 h-2 rounded-full" style={{width: '24%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Negative</span>
                    <span>8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '8%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h4 className="font-medium mb-3">Top Feedback This Week</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-gray-100">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Presentation Quality</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Positive</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    "Your explanation of complex topics is so clear. Love the visuals you've been adding lately!"
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded border border-gray-100">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Content Request</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Suggestion</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    "Would love to see a deep dive on data visualization techniques in your next video!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreviewSection;
