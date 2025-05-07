
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="pricing">
      <div className="container px-4">
        <SectionHeading 
          title="Simple, Transparent Pricing"
          subtitle="Start free, upgrade when you're ready"
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle>Free Plan</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500 ml-2">forever</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span>Analysis for your first 3 videos</span>
                </li>
                <li className="flex">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span>Basic sentiment analysis</span>
                </li>
                <li className="flex">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span>Weekly summary email</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="border-2 border-brand-purple">
            <CardHeader>
              <div className="px-3 py-1 bg-brand-purple-light text-brand-purple rounded-full w-fit text-sm font-medium mb-2">
                RECOMMENDED
              </div>
              <CardTitle>Pro Plan</CardTitle>
              <CardDescription>For serious creators</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$5</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span>Unlimited video analysis</span>
                </li>
                <li className="flex">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span>Advanced sentiment analysis</span>
                </li>
                <li className="flex">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span>Topic & keyword extraction</span>
                </li>
                <li className="flex">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span>Customizable dashboard</span>
                </li>
                <li className="flex">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span>Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Join Waitlist
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
