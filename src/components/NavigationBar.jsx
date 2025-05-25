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
        <NavLink href="/" text="Home" />
        <NavLink href="https://evox.readthedocs.io/en/latest/" text="Docs" />
        <NavLink href="https://github.com/EMI-Group/evox" text="GitHub" />
        <NavLink href="https://discord.gg/Vbtgcpy7G4" text="Community" />
      </ul>
    </nav>
  );
}

function NavLink({ href, text }) {
  return (
    <li>
      <a href={href} className="text-gray-700 hover:text-blue-500">
        {text}
      </a>
    </li>
  );
}
