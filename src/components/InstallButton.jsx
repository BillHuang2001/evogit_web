export default function InstallButton() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <a
        href="https://pypi.org/project/evox/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition dark:bg-blue-400 dark:hover:bg-blue-500 shadow-md shadow-blue-400/50 dark:shadow-blue-300/30"
      >
        Install EvoX
      </a>
      <a
        href="https://github.com/EMI-Group/evox"
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 shadow-md shadow-gray-400/50 dark:shadow-gray-500/30"
      >
        View on GitHub
      </a>
    </div>
  );
}
