export default function NavLink({ href, text }) {
  return (
    <li>
      <a href={href} className="text-gray-700 hover:text-blue-500">
        {text}
      </a>
    </li>
  );
}
