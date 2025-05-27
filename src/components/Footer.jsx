export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        <div>
          <h4 className="font-semibold text-lg mb-2 text-gray-100">Docs</h4>
          <ul>
            <li>
              <a
                href="https://evox.readthedocs.io/en/latest/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="/install"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                Install
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2 text-gray-100">GitHub</h4>
          <ul>
            <li>
              <a
                href="https://github.com/EMI-Group/evox"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                GitHub Repo
              </a>
            </li>
            <li>
              <a
                href="/contribute"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                Contribute
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2 text-gray-100">License</h4>
          <ul>
            <li>
              <a
                href="/license"
                className="hover:text-gray-50 transition-colors duration-200"
              >
                License
              </a>
            </li>
            <li>
              <a
                href="/acknowledgments"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                Acknowledgments
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-8 text-gray-400">
        <p>&copy; {new Date().getFullYear()} EvoX. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://discord.gg/Vbtgcpy7G4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-50"
          >
            Join our Discord Community
          </a>
          <a
            href="https://github.com/EMI-Group/evox"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-50"
          >
            GitHub
          </a>
          <a
            href="https://evox.readthedocs.io/en/latest/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-50"
          >
            Documentation
          </a>
        </div>
      </div>
    </footer>
  );
}
