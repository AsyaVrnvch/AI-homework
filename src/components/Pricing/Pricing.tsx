import PricingCard from "../PricingCard/PricingCard";

export const Pricing = () => {
  const handleSubscribe = (planName: string) => {
    alert(`Subscribed to ${planName}!`);
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white">Pricing</h1>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl w-full items-center sm:items-end">
        <PricingCard
          plan="Standard"
          price="$100"
          features={[
            "50,000 Requests",
            "4 contributors",
            "Up to 3 GB storage space",
          ]}
          onSubscribe={() => handleSubscribe("Standard")}
        />
        <PricingCard
          plan="Pro"
          price="$200"
          features={[
            "100,000 Requests",
            "7 contributors",
            "Up to 6 GB storage space",
          ]}
          isFeatured={true}
          onSubscribe={() => handleSubscribe("Pro")}
        />
        <PricingCard
          plan="Expert"
          price="$500"
          features={[
            "200,000 Requests",
            "11 contributors",
            "Up to 10 GB storage space",
          ]}
          onSubscribe={() => handleSubscribe("Expert")}
        />
      </main>
    </div>
  );
};

export default Pricing;
