import Image from "next/image";
import NavLink from "./NavLink";

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between px-4 py-2 z-50">
      <div className="flex items-center">
        <Image
          src="/contents/images/evox_logo_with_text_light.png"
          alt="EvoX Logo"
          width={150}
          height={50}
          className="dark:hidden"
        />
        <Image
          src="/contents/images/evox_logo_with_text_dark.png"
          alt="EvoX Logo"
          width={150}
          height={50}
          className="hidden dark:block"
        />
      </div>
      <ul className="flex space-x-4">
        <NavLink href="/" text="Home" />
        <NavLink href="https://evox.readthedocs.io/en/latest/" text="Docs" />
        <NavLink href="https://github.com/EMI-Group/evox" text="GitHub" />
        <NavLink href="https://discord.gg/Vbtgcpy7G4" text="Community" />
      </ul>
      <div className="hidden md:flex items-center space-x-4">
        <a
          href="https://pypi.org/project/evox/"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition dark:bg-blue-400 dark:hover:bg-blue-500"
        >
          Install EvoX
        </a>
      </div>
    </nav>
  );
}
