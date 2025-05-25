export default function CommunitySection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Join Our Community</h2>
        <p className="text-center text-lg mb-8">
          Connect with other developers, contribute to EvoX, and explore our sister projects.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/EMI-Group/evox"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            GitHub
          </a>
          <a
            href="https://discord.gg/Vbtgcpy7G4"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700"
          >
            Discord
          </a>
          <a
            href="https://evox.readthedocs.io/en/latest/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700"
          >
            Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
