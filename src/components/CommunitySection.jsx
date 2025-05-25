export default function CommunitySection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Join Our Community</h2>
        <p className="text-center text-lg mb-8">
          Connect with other developers, contribute to EvoX, and explore our sister projects.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <CommunityLink
            href="https://github.com/EMI-Group/evox"
            label="GitHub"
            bgColor="bg-blue-600"
            hoverColor="hover:bg-blue-700"
          />
          <CommunityLink
            href="https://discord.gg/Vbtgcpy7G4"
            label="Discord"
            bgColor="bg-indigo-600"
            hoverColor="hover:bg-indigo-700"
          />
          <CommunityLink
            href="https://evox.readthedocs.io/en/latest/"
            label="Documentation"
            bgColor="bg-green-600"
            hoverColor="hover:bg-green-700"
          />
        </div>
      </div>
    </section>
  );
}

function CommunityLink({ href, label, bgColor, hoverColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-6 py-3 ${bgColor} text-white rounded-md shadow-md ${hoverColor}`}
    >
      {label}
    </a>
  );
}
