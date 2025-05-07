
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-gray-100 animate-fade-in">
      <div className="p-3 mb-4 bg-brand-purple-light rounded-full">
        <Icon className="w-6 h-6 text-brand-purple" />
      </div>
      <h3 className="mb-2 text-xl font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
