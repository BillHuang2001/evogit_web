export default function NavLink({ href, text, icon: Icon }) {
  return (
    <li className="flex items-center">
      <a
        href={href}
        className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center gap-2"
        target={href.startsWith("http") ? "_blank" : "_self"}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {Icon && <Icon className="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" />}
        <span className="text-sm font-medium">{text}</span>
      </a>
    </li>
  );
}
