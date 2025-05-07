
import SectionHeading from "@/components/SectionHeading";
import WaitlistForm from "@/components/WaitlistForm";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-purple text-white" id="waitlist">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to see what your audience really thinks?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join the waitlist and be the first to try Comment Clarity when we launch!
          </p>
          <div className="flex justify-center">
            <WaitlistForm variant="light" buttonText="Join Waitlist Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
