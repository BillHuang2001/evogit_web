export default function InstallButton() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <a
        href="https://pypi.org/project/evox/"
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 transition dark:from-blue-400 dark:to-blue-500 dark:hover:from-blue-500 dark:hover:to-blue-600 shadow-md shadow-blue-400/50 dark:shadow-blue-300/30"
      >
        Install EvoX
      </a>
      <a
        href="https://github.com/EMI-Group/evox"
        className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 rounded-md hover:from-gray-300 hover:to-gray-400 transition dark:from-gray-700 dark:to-gray-600 dark:text-gray-200 dark:hover:from-gray-600 dark:hover:to-gray-500 shadow-md shadow-gray-400/50 dark:shadow-gray-500/30"
      >
        View on GitHub
      </a>
    </div>
  );
}
