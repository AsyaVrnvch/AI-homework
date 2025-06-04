import React from "react";

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
  onSubscribe: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
  onSubscribe,
}) => {
  const cardBaseClasses =
    "rounded-lg shadow-lg flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none";

  const cardSpecificClasses = isFeatured
    ? "bg-slate-700 text-white pt-10 pb-8 px-8 relative sm:scale-105 focus:ring-2 focus:ring-sky-400 focus:ring-offset-4 focus:ring-offset-slate-900" // Adjusted offset for dark page
    : "bg-white text-slate-800 py-8 px-6 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-4 focus:ring-offset-slate-900"; // Adjusted offset for dark page

  const planTextClasses = isFeatured
    ? "text-slate-300 text-lg"
    : "text-slate-600 text-base"; // Adjusted non-featured plan text color for better contrast on white

  const priceTextClasses = isFeatured
    ? "text-white text-6xl"
    : "text-slate-900 text-5xl";

  const featureItemBaseClasses = "py-4 text-center text-sm";
  const featureItemBorderClasses = isFeatured
    ? "border-slate-600"
    : "border-gray-200";
  const featureItemTextClasses = isFeatured
    ? "text-slate-300"
    : "text-slate-700"; // Adjusted non-featured feature text color

  const subscribeButtonContainerClasses = isFeatured
    ? `border-slate-600`
    : `border-gray-200`;

  const subscribeButtonClasses = isFeatured
    ? "bg-transparent text-white hover:text-slate-200 focus:ring-sky-400 focus:ring-offset-slate-700"
    : "bg-transparent text-slate-700 hover:text-slate-900 focus:ring-indigo-500 focus:ring-offset-white";

  return (
    <div className={`${cardBaseClasses} ${cardSpecificClasses}`} tabIndex={0}>
      {/* Plan Name */}
      <div className="text-center mb-4">
        <h3
          className={`font-semibold uppercase tracking-wide ${planTextClasses}`}
        >
          {plan}
        </h3>
      </div>

      {/* Price */}
      <div className="text-center mb-8">
        <span className={`font-bold ${priceTextClasses}`}>{price}</span>
      </div>

      {/* Features */}
      <div className="flex-grow">
        <ul className="space-y-0">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`${featureItemBaseClasses} ${featureItemTextClasses} ${
                index > 0 ? `border-t ${featureItemBorderClasses}` : ""
              }`}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Subscribe Button */}
      <div
        className={`mt-auto pt-4 border-t ${subscribeButtonContainerClasses}`}
      >
        <button
          onClick={onSubscribe}
          className={`w-full block text-center uppercase tracking-wider font-semibold py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm ${subscribeButtonClasses}`} // rounded-sm for tighter button corner
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
