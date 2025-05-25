export default function KeyFeatures() {
  const features = [
    {
      title: "🚀 Ultra Performance",
      description:
        "Supports acceleration on CPUs and GPUs, achieving over 100x speedups with distributed workflows.",
    },
    {
      title: "🌐 All-in-One Solution",
      description:
        "Includes 50+ algorithms for single- and multi-objective optimization, supporting complex tasks like neuroevolution.",
    },
    {
      title: "🛠️ Easy-to-Use Design",
      description:
        "Fully compatible with PyTorch, offering a tailored programming model for effortless setup.",
    },
    {
      title: "📚 Extensive Benchmark Suites",
      description:
        "Features 100+ benchmark problems, including physics engines like Brax for reinforcement learning.",
    },
    {
      title: "📈 Flexible Visualization",
      description:
        "Provides real-time data streaming and customizable modules for tailored visualizations.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Key Features
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Discover the powerful capabilities of EvoX to accelerate your workflows.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

import FeatureCard from "./FeatureCard";
