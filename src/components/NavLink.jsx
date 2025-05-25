export default function NavLink({ href, text, icon: Icon }) {
  return (
    <li className="flex items-center">
      {Icon && <Icon className="w-5 h-5 mr-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" />}
      <a
        href={href}
        className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
        target={href.startsWith("http") ? "_blank" : "_self"}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </li>
  );
}
