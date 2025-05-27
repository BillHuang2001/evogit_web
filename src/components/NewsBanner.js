export default function NewsBanner() {
  const news = [
    {
      title: "🚀 Released EvoX 1.2.1",
      description: "Featuring the new Mujoco Playground and an official tutorial!",
      link: "https://evox.group/index.php?m=home&c=View&a=index&aid=157",
    },
    {
      title: "📢 Released EvoRL",
      description: "A GPU-accelerated framework for Evolutionary Reinforcement Learning, powered by JAX!",
      link: "https://github.com/EMI-Group/evorl",
    },
    {
      title: "🌟 Released EvoGP",
      description: "A GPU-accelerated framework for Genetic Programming, powered by PyTorch & CUDA!",
      link: "https://github.com/EMI-Group/evogp",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-2 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900">
      <div className="relative flex overflow-hidden whitespace-nowrap scroll-smooth px-4">
        <div className="w-full flex items-center space-x-6 animate-scroll">
          {news.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 py-2 bg-white text-black rounded-md shadow-md hover:scale-105 transition-transform duration-300 dark:bg-gray-800 dark:text-white"
            >
              <strong className="block text-lg">{item.title}</strong>
              <span className="block text-sm">{item.description}</span>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-yellow-300 dark:hover:text-yellow-500 text-sm"
              >
                [Details]
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
