export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        <div>
          <h4 className="font-semibold text-lg mb-2">Docs</h4>
          <ul>
            <li>
              <a
                href="https://evox.readthedocs.io/en/latest/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="/install"
                className="hover:text-white transition-colors duration-200"
              >
                Install
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">GitHub</h4>
          <ul>
            <li>
              <a
                href="https://github.com/EMI-Group/evox"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                GitHub Repo
              </a>
            </li>
            <li>
              <a
                href="/contribute"
                className="hover:text-white transition-colors duration-200"
              >
                Contribute
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">License</h4>
          <ul>
            <li>
              <a
                href="/license"
                className="hover:text-white transition-colors duration-200"
              >
                License
              </a>
            </li>
            <li>
              <a
                href="/acknowledgments"
                className="hover:text-white transition-colors duration-200"
              >
                Acknowledgments
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-8">
        &copy; {new Date().getFullYear()} EvoX. All rights reserved.
      </div>
    </footer>
  );
}
