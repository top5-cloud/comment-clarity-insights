
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote: "Comment Clarity helped me discover what my audience really cares about. I've seen a 30% increase in engagement since applying these insights.",
    author: "Alex Morgan",
    role: "Tech Educator",
    avatar: "AM"
  },
  {
    quote: "As a small creator, I was drowning in comments and missing important feedback. Now I can respond to the most critical ones and track sentiment over time.",
    author: "Jamie Chen",
    role: "Lifestyle Vlogger",
    avatar: "JC"
  },
  {
    quote: "The weekly summaries are a game changer. I can now see exactly which topics are resonating with my audience and plan content accordingly.",
    author: "Sam Wilson",
    role: "Gaming Creator",
    avatar: "SW"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24" id="testimonials">
      <div className="container px-4">
        <SectionHeading 
          title="Made for Creators Like You"
          subtitle="Trusted by early testers — indie creators, niche educators, and vloggers"
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="flex-1">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="" alt={testimonial.author} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
