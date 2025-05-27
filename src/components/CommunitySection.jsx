export default function CommunitySection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Join Our Community
        </h2>
        <p className="text-center text-lg mb-8 text-gray-700 dark:text-gray-300">
          Connect with other developers, contribute to EvoX, and explore our sister projects.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <CommunityLink
            href="https://github.com/EMI-Group/evox"
            label="GitHub"
            bgColor="bg-blue-600"
            hoverColor="hover:bg-blue-700"
            icon="code-bracket-square"
          />
          <CommunityLink
            href="https://discord.gg/Vbtgcpy7G4"
            label="Discord"
            bgColor="bg-indigo-600"
            hoverColor="hover:bg-indigo-700"
            icon="chat-bubble-left-right"
          />
          <CommunityLink
            href="https://evox.readthedocs.io/en/latest/"
            label="Documentation"
            bgColor="bg-green-600"
            hoverColor="hover:bg-green-700"
            icon="book-open"
          />
          <CommunityLink
            href="https://arxiv.org/abs/2301.12457"
            label="Paper"
            bgColor="bg-yellow-600"
            hoverColor="hover:bg-yellow-700"
            icon="document-text"
          />
          <CommunityLink
            href="https://github.com/EMI-Group/evoxbench"
            label="EvoXBench"
            bgColor="bg-purple-600"
            hoverColor="hover:bg-purple-700"
            icon="chart-bar"
          />
        </div>
      </div>
    </section>
  );
}

import CommunityLink from "./CommunityLink";
