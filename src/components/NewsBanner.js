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
    <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 text-white text-center py-2">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        {news.map((item, index) => (
          <span key={index} className="mx-4">
            <strong>{item.title}</strong> - {item.description}{" "}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-300"
            >
              [Details]
            </a>
          </span>
        ))}
      </marquee>
    </div>
  );
}
