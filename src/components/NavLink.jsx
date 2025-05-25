export default function NavLink({ href, text }) {
  return (
    <li>
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
