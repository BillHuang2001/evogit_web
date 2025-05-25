import Image from "next/image";

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <Image
          src="/contents/images/evox_logo_with_text_light.png"
          alt="EvoX Logo"
          width={150}
          height={50}
        />
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="https://evox.readthedocs.io/en/latest/" className="text-gray-700 hover:text-blue-500">
            Docs
          </a>
        </li>
        <li>
          <a href="https://github.com/EMI-Group/evox" className="text-gray-700 hover:text-blue-500">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://discord.gg/Vbtgcpy7G4" className="text-gray-700 hover:text-blue-500">
            Community
          </a>
        </li>
      </ul>
    </nav>
  );
}
