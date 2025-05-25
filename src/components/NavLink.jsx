export default function NavLink({ href, text }) {
  return (
    <li className="flex items-center">
      <a
        href={href}
        className="text-gray-700 hover:text-blue-500 transition-colors duration-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        target={href.startsWith("http") ? "_blank" : "_self"}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </li>
  );
}
