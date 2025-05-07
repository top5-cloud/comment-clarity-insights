
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  center = false 
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="mb-4 font-bold">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
