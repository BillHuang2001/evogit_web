export default function InstallButton() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <a
        href="https://pypi.org/project/evox/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition dark:bg-blue-400 dark:hover:bg-blue-500"
      >
        Install EvoX
      </a>
    </div>
  );
}
